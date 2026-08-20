import { inject, Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { SupabaseService } from './supabase';
import { Estudo } from '../../shared/models/estudos.model';

@Injectable({ providedIn: 'root' })
export class EstudoService {
  private supabaseService = inject(SupabaseService);
  private bucketName = 'avisos';

  buscarTodos(): Observable<Estudo[]> {
    const promise = this.supabaseService.supabase
      .from('estudos')
      .select('*')
      .order('created_at', { ascending: false });

    return from(promise).pipe(map((res) => res.data as Estudo[]));
  }

  async criar(file: File | Blob, titulo: string, descricao?: string | null): Promise<Estudo> {
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.pdf`;
    const filePath = `estudos/${fileName}`;

    const { error: uploadError } = await this.supabaseService.supabase.storage
      .from(this.bucketName)
      .upload(filePath, file, {
        contentType: 'application/pdf',
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = this.supabaseService.supabase.storage
      .from(this.bucketName)
      .getPublicUrl(filePath);

    return this.salvarRegistroNoBanco(publicUrlData.publicUrl, titulo, descricao);
  }

  async criarComLink(url: string, titulo: string, descricao?: string | null): Promise<Estudo> {
    return this.salvarRegistroNoBanco(url, titulo, descricao);
  }

  private async salvarRegistroNoBanco(
    url: string,
    titulo: string,
    descricao?: string | null,
  ): Promise<Estudo> {
    const payloadParaSalvar: any = {
      titulo: titulo.trim().toLowerCase(),
      arquivo_url: url.trim(),
    };

    if (descricao && descricao.trim() !== '') {
      payloadParaSalvar.descricao = descricao.trim();
    }

    const { data, error: dbError } = await this.supabaseService.supabase
      .from('estudos')
      .insert([payloadParaSalvar])
      .select()
      .single();

    if (dbError) throw dbError;
    return data as Estudo;
  }

  async excluir(id: string, arquivo_url: string): Promise<void> {
    const { error: dbError } = await this.supabaseService.supabase
      .from('estudos')
      .delete()
      .eq('id', id);

    if (dbError) throw dbError;

    if (arquivo_url.includes('supabase.co/storage')) {
      const urlParts = arquivo_url.split('/');
      const fileName = urlParts.pop()?.split('?')[0];

      if (fileName) {
        const filePath = `estudos/${fileName}`;
        await this.supabaseService.supabase.storage.from(this.bucketName).remove([filePath]);
      }
    }
  }

  async atualizar(id: string, titulo: string, descricao?: string | null): Promise<Estudo> {
    const payload: any = {
      titulo: titulo.trim().toUpperCase(),
    };

    payload.descricao = descricao && descricao.trim() !== '' ? descricao.trim() : null;

    const { data, error } = await this.supabaseService.supabase
      .from('estudos')
      .update(payload)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Estudo;
  }

  public isLinkExterno(url: string): boolean {
    return !url.includes('supabase.co/storage');
  }

  private extrairDriveId(url: string): string | null {
    const match = url.match(/(?:\/file\/d\/|[?&]id=)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  }

  public obterUrlVisualizacao(url: string): string {
    if (!this.isLinkExterno(url)) return url;
    const id = this.extrairDriveId(url);
    if (id) {
      return `https://drive.google.com/file/d/${id}/view`;
    }
    return url;
  }

  public obterUrlDownload(url: string): string {
    if (!this.isLinkExterno(url)) return url;
    const id = this.extrairDriveId(url);
    if (id) {
      return `https://drive.google.com/uc?id=${id}&export=download`;
    }
    return url;
  }
}
