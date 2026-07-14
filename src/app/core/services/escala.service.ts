import { inject, Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Escala } from '../../shared/models/escala.model';
import { SupabaseService } from './supabase'; // Ajuste o caminho se necessário

@Injectable({ providedIn: 'root' })
export class EscalaService {
  private supabaseService = inject(SupabaseService);

  buscarTodas(): Observable<Escala[]> {
    const promise = this.supabaseService.supabase
      .from('escalas')
      .select('*')
      .order('data_escala', { ascending: true });

    return from(promise).pipe(map((res) => res.data as Escala[]));
  }

  salvar(escala: Partial<Escala>): Observable<Escala> {
    if (escala.id) {
      const promise = this.supabaseService.supabase
        .from('escalas')
        .update(escala)
        .eq('id', escala.id)
        .select()
        .single();
      return from(promise).pipe(map((res) => res.data as Escala));
    } else {
      const promise = this.supabaseService.supabase
        .from('escalas')
        .insert(escala)
        .select()
        .single();
      return from(promise).pipe(map((res) => res.data as Escala));
    }
  }

  excluir(id: string): Observable<any> {
    const promise = this.supabaseService.supabase.from('escalas').delete().eq('id', id);

    return from(promise);
  }
}
