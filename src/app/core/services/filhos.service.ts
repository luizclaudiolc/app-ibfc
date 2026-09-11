import { inject, Injectable } from '@angular/core';
import { Observable, from, map, of } from 'rxjs';
import { SupabaseService } from './supabase';
import { Filho, FilhoExistente } from '../../shared/models/filhos.model';

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

  async criar(filho: Omit<Filho, 'id' | 'created_at'>): Promise<Filho> {
    const { data, error } = await this.supabase.supabase
      .from('filhos')
      .insert([filho])
      .select()
      .single();

    if (error) throw error;
    return data as Filho;
  }

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

  buscarPorMembros(ids: string[]): Observable<Filho[]> {
    if (!ids.length) return of([]);

    const lista = ids.join(',');

    return from(
      this.supabase.supabase
        .from('filhos')
        .select('id, nome, data_nascimento, membro_id, outro_responsavel_id')
        .or(`membro_id.in.(${lista}),outro_responsavel_id.in.(${lista})`),
    ).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as Filho[];
      }),
    );
  }

  async excluir(id: string): Promise<void> {
    const { error } = await this.supabase.supabase.from('filhos').delete().eq('id', id);

    if (error) throw error;
  }

  async buscarExistente(nome: string, dataNascimento: string): Promise<FilhoExistente | null> {
    const { data, error } = await this.supabase.supabase.rpc('buscar_filho_existente', {
      p_nome: nome,
      p_data_nascimento: dataNascimento,
    });
    if (error) throw error;
    return (data as FilhoExistente) ?? null;
  }

  async vincularOuCriar(input: {
    nome: string;
    data_nascimento: string;
    informacoes_medicas?: string | null;
    outro_responsavel_id?: string | null;
    forcarNovo?: boolean;
  }): Promise<{ id: string; acao: 'criado' | 'vinculado' | 'ja_vinculado' }> {
    const { data, error } = await this.supabase.supabase.rpc('vincular_ou_criar_filho', {
      p_nome: input.nome,
      p_data_nascimento: input.data_nascimento,
      p_informacoes_medicas: input.informacoes_medicas ?? null,
      p_outro_responsavel_id: input.outro_responsavel_id ?? null,
      p_forcar_novo: input.forcarNovo ?? false,
    });
    if (error) throw error;
    return data as { id: string; acao: 'criado' | 'vinculado' | 'ja_vinculado' };
  }
}
