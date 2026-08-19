import { inject, Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { SupabaseService } from './supabase';

export interface PedidoOracao {
  id: string;
  membro_id: string;
  descricao: string;
  atendido: boolean;
  intercessores: string[];
  created_at: string;
  updated_at: string;
  membro?: {
    nome: string;
    sobrenome: string;
    foto_url: string | null;
  };
}

@Injectable({ providedIn: 'root' })
export class PedidoOracaoService {
  private supabase = inject(SupabaseService);

  buscarAtivos(): Observable<PedidoOracao[]> {
    const promise = this.supabase.supabase
      .from('pedidos_oracao')
      .select('*, membro:membros(nome, sobrenome, foto_url)')
      .eq('atendido', false)
      .order('created_at', { ascending: false });

    return from(promise).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as PedidoOracao[];
      }),
    );
  }

  buscarTodosComMembro(): Observable<PedidoOracao[]> {
    const promise = this.supabase.supabase
      .from('pedidos_oracao')
      .select('*, membro:membros(nome, sobrenome, foto_url)')
      .order('created_at', { ascending: false });

    return from(promise).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as PedidoOracao[];
      }),
    );
  }

  buscarMeusPedidos(membroId: string): Observable<PedidoOracao[]> {
    const promise = this.supabase.supabase
      .from('pedidos_oracao')
      .select('*')
      .eq('membro_id', membroId)
      .order('created_at', { ascending: false });

    return from(promise).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as PedidoOracao[];
      }),
    );
  }

  /**
   * Cria um novo pedido de oração.
   */
  async criar(membroId: string, descricao: string): Promise<PedidoOracao> {
    const { data, error } = await this.supabase.supabase
      .from('pedidos_oracao')
      .insert([{ membro_id: membroId, descricao }])
      .select()
      .single();

    if (error) throw error;
    return data as PedidoOracao;
  }

  async marcarComoAtendido(id: string): Promise<void> {
    const { error } = await this.supabase.supabase
      .from('pedidos_oracao')
      .update({ atendido: true, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw error;
  }

  async alternarIntercessao(pedidoId: string): Promise<void> {
    const { error } = await this.supabase.supabase.rpc('toggle_oracao', {
      pedido_id: pedidoId,
    });

    if (error) throw error;
  }

  async excluir(id: string): Promise<void> {
    const { error } = await this.supabase.supabase.from('pedidos_oracao').delete().eq('id', id);

    if (error) throw error;
  }

  async atualizar(id: string, novaDescricao: string): Promise<PedidoOracao> {
    const { data, error } = await this.supabase.supabase
      .from('pedidos_oracao')
      .update({
        descricao: novaDescricao,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as PedidoOracao;
  }

  async buscarTotalIntercessoes(meuId: string): Promise<number> {
    const { count, error } = await this.supabase.supabase
      .from('pedidos_oracao')
      .select('id', { count: 'exact', head: true })
      .contains('intercessores', [meuId]);

    if (error) throw error;
    return count || 0;
  }
}
