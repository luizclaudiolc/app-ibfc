import { inject, Injectable } from '@angular/core';
import { Observable, from, map, shareReplay, tap } from 'rxjs';
import { Aviso } from '../../shared/models/aviso.model';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class AvisoService {
  private supabaseService = inject(SupabaseService);
  private bucketName = 'avisos';

  private cacheAvisos = new Map<string, Observable<Aviso[]>>();

  limparCache(): void {
    this.cacheAvisos.clear();
  }

  buscarTodos(somenteFuturos: boolean = true): Observable<Aviso[]> {
    const cacheKey = `avisos_${somenteFuturos}`;

    if (this.cacheAvisos.has(cacheKey)) {
      return this.cacheAvisos.get(cacheKey)!;
    }

    let query = this.supabaseService.supabase
      .from('avisos')
      .select('*')
      .order('data_evento', { ascending: true });

    if (somenteFuturos) {
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = String(hoje.getMonth() + 1).padStart(2, '0');
      const dia = String(hoje.getDate()).padStart(2, '0');
      const dataAtual = `${ano}-${mes}-${dia}`;

      query = query.gte('data_evento', dataAtual);
    }

    const request$ = from(query).pipe(
      map((res) => res.data as Aviso[]),
      shareReplay(1),
    );

    this.cacheAvisos.set(cacheKey, request$);
    return request$;
  }

  async criar(file: File, dataEvento: string, descricao?: string | null): Promise<Aviso> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `banners/${fileName}`;

    const { error: uploadError } = await this.supabaseService.supabase.storage
      .from(this.bucketName)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = this.supabaseService.supabase.storage
      .from(this.bucketName)
      .getPublicUrl(filePath);

    const foto_url = publicUrlData.publicUrl;

    const payloadParaSalvar: any = {
      foto_url,
      data_evento: dataEvento,
    };

    if (descricao && descricao.trim() !== '') {
      payloadParaSalvar.descricao = descricao.trim();
    }

    const { data, error: dbError } = await this.supabaseService.supabase
      .from('avisos')
      .insert([payloadParaSalvar])
      .select()
      .single();

    if (dbError) throw dbError;

    this.limparCache();
    return data as Aviso;
  }

  async excluir(id: string, foto_url: string): Promise<void> {
    const urlParts = foto_url.split('/');
    const fileName = urlParts.pop();
    const filePath = `banners/${fileName}`;

    const { error: dbError } = await this.supabaseService.supabase
      .from('avisos')
      .delete()
      .eq('id', id);

    if (dbError) throw dbError;

    await this.supabaseService.supabase.storage.from(this.bucketName).remove([filePath]);

    this.limparCache();
  }

  async limparAvisosPassados(): Promise<{ sucesso: boolean; mensagem?: string }> {
    try {
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = String(hoje.getMonth() + 1).padStart(2, '0');
      const primeiroDiaMesAtual = `${ano}-${mes}-01`;

      const { data: avisosAntigos, error: erroBusca } = await this.supabaseService.supabase
        .from('avisos')
        .select('id, foto_url')
        .lt('data_evento', primeiroDiaMesAtual);

      if (erroBusca) throw erroBusca;

      if (!avisosAntigos || avisosAntigos.length === 0) {
        return { sucesso: true, mensagem: 'Nenhum aviso antigo para limpar.' };
      }

      const pathsParaRemover: string[] = [];
      const idsParaApagar: string[] = [];

      for (const aviso of avisosAntigos) {
        idsParaApagar.push(aviso.id);
        if (aviso.foto_url) {
          try {
            const urlParts = aviso.foto_url.split('/');
            const fileName = urlParts.pop()?.split('?')[0];
            if (fileName) {
              pathsParaRemover.push(`banners/${fileName}`);
            }
          } catch (e) {
            console.error('Erro ao processar URL da foto do aviso:', aviso.foto_url);
          }
        }
      }

      const { error: erroDelete } = await this.supabaseService.supabase
        .from('avisos')
        .delete()
        .in('id', idsParaApagar);

      if (erroDelete) throw erroDelete;

      if (pathsParaRemover.length > 0) {
        const { error: erroStorage } = await this.supabaseService.supabase.storage
          .from(this.bucketName)
          .remove(pathsParaRemover);

        if (erroStorage) {
          console.error('Erro ao remover arquivos físicos do Storage:', erroStorage);
        }
      }

      this.limparCache();
      return { sucesso: true, mensagem: 'Avisos passados e arquivos limpos com sucesso!' };
    } catch (error: any) {
      console.error('Erro ao limpar avisos antigos:', error);
      return { sucesso: false, mensagem: error.message };
    }
  }

  confirmarLeitura(avisoId: string): Observable<{ sucesso: boolean; mensagem?: string }> {
    return from(this.executarConfirmacaoLeitura(avisoId));
  }

  private async executarConfirmacaoLeitura(
    avisoId: string,
  ): Promise<{ sucesso: boolean; mensagem?: string }> {
    try {
      const { error } = await this.supabaseService.supabase.rpc('confirmar_leitura_aviso', {
        aviso_id: avisoId,
      });

      if (error) throw error;

      this.limparCache();
      return { sucesso: true };
    } catch (error: any) {
      console.error('Erro ao confirmar leitura do aviso:', error);
      return { sucesso: false, mensagem: error.message };
    }
  }
}
