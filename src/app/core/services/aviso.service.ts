import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Aviso } from '../../shared/models/aviso.model';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class AvisoService {
  constructor(private supabaseService: SupabaseService) {}

  buscarTodos(): Observable<Aviso[]> {
    const promise = this.supabaseService.supabase
      .from('avisos')
      .select('*')
      .order('created_at', { ascending: false });

    return from(promise).pipe(map((res) => res.data as Aviso[]));
  }
}
