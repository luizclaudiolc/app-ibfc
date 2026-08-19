import { inject, Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { SupabaseService } from './supabase';
import { Filho } from '../../shared/models/filhos.model';

@Injectable({ providedIn: 'root' })
export class FilhoService {
  private supabase = inject(SupabaseService);

  buscarPorMembro(membroId: string): Observable<Filho[]> {
    const promise = this.supabase.supabase
      .from('filhos')
      .select('*')
      .or(`membro_id.eq.${membroId},outro_responsavel_id.eq.${membroId}`)
      .order('data_nascimento', { ascending: false });

    return from(promise).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as Filho[];
      }),
    );
  }

  /**
   * Registra um novo filho para o membro logado.
   */
  async criar(filho: Omit<Filho, 'id' | 'created_at'>): Promise<Filho> {
    const { data, error } = await this.supabase.supabase
      .from('filhos')
      .insert([filho])
      .select()
      .single();

    if (error) throw error;
    return data as Filho;
  }

  /**
   * Atualiza as informações de uma criança existente (ex: adicionou uma alergia).
   */
  async atualizar(id: string, dados: Partial<Filho>): Promise<Filho> {
    const { data, error } = await this.supabase.supabase
      .from('filhos')
      .update(dados)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Filho;
  }

  /**
   * Remove o cadastro da criança.
   */
  async excluir(id: string): Promise<void> {
    const { error } = await this.supabase.supabase.from('filhos').delete().eq('id', id);

    if (error) throw error;
  }
}
