import { inject, Injectable } from '@angular/core';
import { forkJoin, from, map, Observable, shareReplay } from 'rxjs';
import { SupabaseService } from './supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

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

  constructor() {
    this.supabase.supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        this.limparCache();
      }
    });
  }

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

  ouvirMural(handlers: {
    onEvento: (tipo: 'INSERT' | 'UPDATE' | 'DELETE', row: PedidoOracao) => void;
    onPresenca: (quantidade: number) => void;
    meuId: string;
    meuNome: string;
  }): () => void {
    const canal: RealtimeChannel = this.supabase.supabase
      .channel('mural-oracoes', {
        config: { presence: { key: handlers.meuId } },
      })
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'pedidos_oracao' },
        (payload) => {
          const tipo = payload.eventType as 'INSERT' | 'UPDATE' | 'DELETE';
          const row = (tipo === 'DELETE' ? payload.old : payload.new) as PedidoOracao;
          this.limparCache();
          handlers.onEvento(tipo, row);
        },
      )
      .on('presence', { event: 'sync' }, () => {
        handlers.onPresenca(Object.keys(canal.presenceState()).length);
      })
      .subscribe((status) => {
        if (status !== 'SUBSCRIBED') return;
        void canal.track({
          user_id: handlers.meuId,
          nome: handlers.meuNome,
        });
      });

    return () => {
      void canal.untrack();
      void this.supabase.supabase.removeChannel(canal);
    };
  }

  nomePresente(userId: string): string | null {
    const canal = this.supabase.supabase
      .getChannels()
      .find((c) => c.topic.endsWith('mural-oracoes'));
    if (!canal) return null;
    const lista = canal.presenceState()[userId] as { nome?: string }[] | undefined;
    return lista?.[0]?.nome ?? null;
  }

  buscarPorId(id: string): Observable<PedidoOracao | null> {
    return from(
      this.supabase.supabase
        .from('pedidos_oracao')
        .select(this.selectComMembro)
        .eq('id', id)
        .single(),
    ).pipe(map((res) => (res.data as PedidoOracao) ?? null));
  }
}
