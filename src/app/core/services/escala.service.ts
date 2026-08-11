import { inject, Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Escala } from '../../shared/models/escala.model';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class EscalaService {
  private supabaseService = inject(SupabaseService);

  buscarTodas(somenteFuturas: boolean = true): Observable<Escala[]> {
    let query = this.supabaseService.supabase
      .from('escalas')
      .select('*')
      .order('data_escala', { ascending: true });

    if (somenteFuturas) {
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = String(hoje.getMonth() + 1).padStart(2, '0');
      const dia = String(hoje.getDate()).padStart(2, '0');
      const dataAtual = `${ano}-${mes}-${dia}`;

      query = query.gte('data_escala', dataAtual);
    }

    return from(query).pipe(map((res) => res.data as Escala[]));
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
