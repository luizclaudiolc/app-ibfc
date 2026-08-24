import { inject, Injectable } from '@angular/core';
import { Observable, from, map, shareReplay, tap } from 'rxjs';
import { Escala } from '../../shared/models/escala.model';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class EscalaService {
  private supabaseService = inject(SupabaseService);

  private cacheEscalas = new Map<string, Observable<Escala[]>>();

  constructor() {
    this.supabaseService.supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        this.limparCache();
      }
    });
  }

  limparCache(): void {
    this.cacheEscalas.clear();
  }

  buscarProximosDias(dias = 30): Observable<Escala[]> {
    const hoje = this.toISODate(new Date());
    const limite = new Date();
    limite.setDate(limite.getDate() + dias);

    return this.buscarPorIntervalo(hoje, this.toISODate(limite));
  }

  buscarPorMes(ano: number, mes: number, departamento?: string | null): Observable<Escala[]> {
    const primeiroDoMes = new Date(ano, mes, 1);
    const ultimoDoMes = new Date(ano, mes + 1, 0);
    const inicioGrid = new Date(ano, mes, 1 - primeiroDoMes.getDay());

    return this.buscarPorIntervalo(
      this.toISODate(inicioGrid),
      this.toISODate(ultimoDoMes),
      departamento,
    );
  }

  private buscarPorIntervalo(
    dataInicio: string,
    dataFim: string,
    departamento?: string | null,
  ): Observable<Escala[]> {
    const cacheKey = `intervalo_${dataInicio}_${dataFim}_${departamento || 'todos'}`;

    if (this.cacheEscalas.has(cacheKey)) {
      return this.cacheEscalas.get(cacheKey)!;
    }

    let query = this.supabaseService.supabase
      .from('escalas')
      .select('id, data_escala, evento, departamento, voluntarios, pedidos_substituicao')
      .gte('data_escala', dataInicio)
      .lte('data_escala', dataFim)
      .order('data_escala', { ascending: true });

    if (departamento) {
      query = query.eq('departamento', departamento);
    }

    const request$ = from(query).pipe(
      map((res) => (res.data ?? []) as Escala[]),
      shareReplay(1),
    );

    this.cacheEscalas.set(cacheKey, request$);
    return request$;
  }

  salvar(escala: Partial<Escala>): Observable<Escala> {
    if (escala.id) {
      const promise = this.supabaseService.supabase
        .from('escalas')
        .update(escala)
        .eq('id', escala.id)
        .select()
        .single();

      return from(promise).pipe(
        map((res) => res.data as Escala),
        tap(() => this.limparCache()),
      );
    }

    const promise = this.supabaseService.supabase.from('escalas').insert(escala).select().single();
    return from(promise).pipe(
      map((res) => res.data as Escala),
      tap(() => this.limparCache()),
    );
  }

  excluir(id: string): Observable<unknown> {
    return from(this.supabaseService.supabase.from('escalas').delete().eq('id', id)).pipe(
      tap(() => this.limparCache()),
    );
  }

  private toISODate(data: Date): string {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }
}
