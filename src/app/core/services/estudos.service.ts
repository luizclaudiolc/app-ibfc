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

  async criar(file: File, titulo: string, descricao?: string | null): Promise<Estudo> {
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.pdf`;

    const filePath = `estudos/${fileName}`;

    const { error: uploadError } = await this.supabaseService.supabase.storage
      .from(this.bucketName)
      .upload(filePath, file, {
        contentType: 'application/pdf',
      });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = this.supabaseService.supabase.storage
      .from(this.bucketName)
      .getPublicUrl(filePath);

    const payloadParaSalvar: any = {
      titulo: titulo.trim(),
      arquivo_url: publicUrlData.publicUrl,
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

    const urlParts = arquivo_url.split('/');
    const fileName = urlParts.pop()?.split('?')[0];

    if (fileName) {
      const filePath = `estudos/${fileName}`;
      await this.supabaseService.supabase.storage.from(this.bucketName).remove([filePath]);
    }
  }
}
