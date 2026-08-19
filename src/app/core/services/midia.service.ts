import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map, firstValueFrom } from 'rxjs';
import { SupabaseService } from './supabase';
import { Midia } from '../../shared/models/midia.model';
import { environment } from '../../../environments/environments.prod';

export interface DetalhesYoutube {
  titulo: string;
  descricao: string;
  thumbnail: string;
}

@Injectable({ providedIn: 'root' })
export class MidiaService {
  private supabase = inject(SupabaseService);
  private http = inject(HttpClient);

  private readonly YOUTUBE_API_KEY = environment.youtubeApiKey;

  buscarTodas(): Observable<Midia[]> {
    const promise = this.supabase.supabase
      .from('midias')
      .select('*')
      .order('created_at', { ascending: false });

    return from(promise).pipe(map((res) => res.data as Midia[]));
  }

  extrairYoutubeId(url: string): string | null {
    if (!url) return null;

    const link = url.trim();

    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|live|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;

    const match = link.match(regex);
    return match ? match[1] : null;
  }

  async buscarDetalhesDoVideo(youtubeId: string): Promise<DetalhesYoutube> {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${youtubeId}&key=${this.YOUTUBE_API_KEY}`;

    const resposta: any = await firstValueFrom(this.http.get(url));

    if (!resposta.items || resposta.items.length === 0) {
      throw new Error('Vídeo não encontrado no YouTube.');
    }

    const snippet = resposta.items[0].snippet;

    return {
      titulo: snippet.title || '',
      descricao: snippet.description || '',
      thumbnail:
        snippet.thumbnails.maxres?.url ||
        snippet.thumbnails.high?.url ||
        snippet.thumbnails.default?.url,
    };
  }

  async criar(
    youtubeId: string,
    titulo: string,
    descricao: string,
    thumbnailUrl: string,
  ): Promise<Midia> {
    const payload = {
      youtube_id: youtubeId,
      titulo: titulo.trim(),
      descricao: descricao ? descricao.trim() : null,
      thumbnail_url: thumbnailUrl,
    };

    const { data, error } = await this.supabase.supabase
      .from('midias')
      .insert([payload])
      .select()
      .single();

    if (error) throw error;
    return data as Midia;
  }

  async excluir(id: string): Promise<void> {
    const { error } = await this.supabase.supabase.from('midias').delete().eq('id', id);

    if (error) throw error;
  }
}
