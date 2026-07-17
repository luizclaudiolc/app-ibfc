import { inject, Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Aviso } from '../../shared/models/aviso.model';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class AvisoService {
  private supabaseService = inject(SupabaseService);
  private bucketName = 'avisos';

  buscarTodos(): Observable<Aviso[]> {
    const promise = this.supabaseService.supabase
      .from('avisos')
      .select('*')
      .order('created_at', { ascending: false });

    return from(promise).pipe(map((res) => res.data as Aviso[]));
  }

  async criar(file: File): Promise<Aviso> {
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

    const { data, error: dbError } = await this.supabaseService.supabase
      .from('avisos')
      .insert([{ foto_url }])
      .select()
      .single();

    if (dbError) throw dbError;
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
  }
}
