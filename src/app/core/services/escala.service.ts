import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Escala } from '../../shared/models/escala.model';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class EscalaService {
  constructor(private supabaseService: SupabaseService) {}

  buscarTodas(): Observable<Escala[]> {
    const promise = this.supabaseService.supabase
      .from('escalas')
      .select('*')
      .order('data_escala', { ascending: true });

    return from(promise).pipe(map((res) => res.data as Escala[]));
  }
}
