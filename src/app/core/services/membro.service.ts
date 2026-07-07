import { Injectable } from '@angular/core';
import { Observable, from, map, switchMap } from 'rxjs';
import { Membro } from '../../shared/models/membro.model';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class MembroService {
  constructor(private supabaseService: SupabaseService) {}

  buscarTodos(): Observable<Membro[]> {
    const promise = this.supabaseService.supabase
      .from('membros')
      .select('*')
      .eq('status', 'ATIVO')
      .order('nome', { ascending: true });

    return from(promise).pipe(map((res) => res.data as Membro[]));
  }

  atualizarFotoPerfil(
    arquivo: File,
  ): Observable<{ sucesso: boolean; fotoUrl?: string; mensagem?: string }> {
    return from(this.executarAtualizacaoFoto(arquivo));
  }

  private async executarAtualizacaoFoto(
    arquivo: File,
  ): Promise<{ sucesso: boolean; fotoUrl?: string; mensagem?: string }> {
    try {
      const { data: authData, error: authError } =
        await this.supabaseService.supabase.auth.getUser();
      if (authError || !authData.user) throw new Error('Usuário não autenticado.');

      const userId = authData.user.id;
      const extensao = arquivo.name.split('.').pop();

      const nomeArquivo = `${userId}-perfil-${Date.now()}.${extensao}`;

      const { error: uploadError } = await this.supabaseService.supabase.storage
        .from('fotos_membros')
        .upload(nomeArquivo, arquivo, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) throw new Error('Erro ao fazer upload da imagem.');

      const { data: urlData } = this.supabaseService.supabase.storage
        .from('fotos_membros')
        .getPublicUrl(nomeArquivo);

      const fotoUrl = urlData.publicUrl;

      const { error: updateError } = await this.supabaseService.supabase
        .from('membros')
        .update({ foto_url: fotoUrl })
        .eq('id', userId);

      if (updateError) throw new Error('Erro ao salvar o link da foto no perfil.');

      return { sucesso: true, fotoUrl: fotoUrl };
    } catch (error: any) {
      return { sucesso: false, mensagem: error.message };
    }
  }

  atualizarPerfil(dados: {
    nome: string;
    sobrenome: string;
    telefone: string;
    data_nascimento: string;
  }): Observable<{ sucesso: boolean; mensagem?: string }> {
    return from(this.executarAtualizacaoPerfil(dados));
  }

  private async executarAtualizacaoPerfil(
    dados: any,
  ): Promise<{ sucesso: boolean; mensagem?: string }> {
    try {
      const {
        data: { user },
      } = await this.supabaseService.supabase.auth.getUser();
      if (!user) throw new Error('Usuário não encontrado.');

      const { error } = await this.supabaseService.supabase
        .from('membros')
        .update({
          nome: dados.nome,
          sobrenome: dados.sobrenome,
          telefone: dados.telefone,
          data_nascimento: dados.data_nascimento,
        })
        .eq('id', user.id);

      if (error) throw error;

      localStorage.setItem('user_nome', `${dados.nome} ${dados.sobrenome}`);

      return { sucesso: true };
    } catch (error: any) {
      return { sucesso: false, mensagem: error.message };
    }
  }

  buscarMeuPerfil(): Observable<any> {
    return from(this.supabaseService.supabase.auth.getUser()).pipe(
      switchMap(({ data }) =>
        this.supabaseService.supabase.from('membros').select('*').eq('id', data.user?.id).single(),
      ),
      map((res) => res.data),
    );
  }

  atualizarSetor(id: string, novoSetor: string) {
    return from(
      this.supabaseService.supabase
        .from('membros')
        .update({ setor_responsavel: novoSetor })
        .eq('id', id),
    );
  }
}
