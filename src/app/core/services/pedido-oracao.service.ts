import { inject, Injectable } from '@angular/core';
import { forkJoin, from, map, Observable, shareReplay } from 'rxjs';
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
  private readonly selectComMembro = '*, membro:membros(nome, sobrenome, foto_url)';

  private cacheMural$: Observable<{ ativos: PedidoOracao[]; atendidos: PedidoOracao[] }> | null =
    null;
  private cacheMeusPedidos = new Map<string, Observable<PedidoOracao[]>>();

  limparCache(): void {
    this.cacheMural$ = null;
    this.cacheMeusPedidos.clear();
  }

  buscarAtivos(): Observable<PedidoOracao[]> {
    const promise = this.supabase.supabase
      .from('pedidos_oracao')
      .select(this.selectComMembro)
      .eq('atendido', false)
      .order('created_at', { ascending: false });

    return from(promise).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as PedidoOracao[];
      }),
    );
  }

  buscarAtendidosRecentes(limite = 3): Observable<PedidoOracao[]> {
    const promise = this.supabase.supabase
      .from('pedidos_oracao')
      .select(this.selectComMembro)
      .eq('atendido', true)
      .order('updated_at', { ascending: false })
      .limit(limite);

    return from(promise).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as PedidoOracao[];
      }),
    );
  }

  buscarParaMural(): Observable<{ ativos: PedidoOracao[]; atendidos: PedidoOracao[] }> {
    if (this.cacheMural$) {
      return this.cacheMural$;
    }

    this.cacheMural$ = forkJoin({
      ativos: this.buscarAtivos(),
      atendidos: this.buscarAtendidosRecentes(3),
    }).pipe(shareReplay(1));

    return this.cacheMural$;
  }

  buscarMeusPedidos(membroId: string): Observable<PedidoOracao[]> {
    if (this.cacheMeusPedidos.has(membroId)) {
      return this.cacheMeusPedidos.get(membroId)!;
    }

    const promise = this.supabase.supabase
      .from('pedidos_oracao')
      .select('*')
      .eq('membro_id', membroId)
      .order('created_at', { ascending: false });

    const request$ = from(promise).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as PedidoOracao[];
      }),
      shareReplay(1),
    );

    this.cacheMeusPedidos.set(membroId, request$);
    return request$;
  }

  async criar(membroId: string, descricao: string): Promise<PedidoOracao> {
    const { data, error } = await this.supabase.supabase
      .from('pedidos_oracao')
      .insert([{ membro_id: membroId, descricao }])
      .select()
      .single();

    if (error) throw error;
    this.limparCache();
    return data as PedidoOracao;
  }

  async marcarComoAtendido(id: string): Promise<void> {
    const { error } = await this.supabase.supabase
      .from('pedidos_oracao')
      .update({ atendido: true, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw error;
    this.limparCache();
  }

  async alternarIntercessao(pedidoId: string): Promise<void> {
    const { error } = await this.supabase.supabase.rpc('toggle_oracao', {
      pedido_id: pedidoId,
    });

    if (error) throw error;
    this.limparCache();
  }

  async excluir(id: string): Promise<void> {
    const { error } = await this.supabase.supabase.from('pedidos_oracao').delete().eq('id', id);

    if (error) throw error;
    this.limparCache();
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
    this.limparCache();
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
