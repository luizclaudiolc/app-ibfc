import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map, from, forkJoin } from 'rxjs';
import { SupabaseService } from './supabase';
import { AuthService } from './auth.service';
import { PlanoLeitura, PLANOS_LEITURA } from '../../shared/models/plano-leitura.const';

export interface CapituloBiblia {
  referencia: string;
  versiculos: { verse: number; text: string }[];
}

@Injectable({ providedIn: 'root' })
export class PlanoLeituraService {
  private http = inject(HttpClient);
  private supabase = inject(SupabaseService);
  private authService = inject(AuthService);

  private readonly CACHE_PREFIX = 'biblia_cache_v2_';

  obterPlanos(): PlanoLeitura[] {
    return PLANOS_LEITURA;
  }

  obterProgressoUsuario(): Observable<Record<string, number[]>> {
    const usuario = this.authService.obterUsuarioLogado();
    if (!usuario.id) return of({});

    const promise = this.supabase.supabase
      .from('membros')
      .select('progresso_leitura')
      .eq('id', usuario.id)
      .single();

    return from(promise).pipe(
      map((res) => {
        if (res.error || !res.data?.progresso_leitura) return {};
        return res.data.progresso_leitura as Record<string, number[]>;
      }),
    );
  }

  async concluirDia(
    planoId: string,
    dia: number,
    progressoAtualGeral: Record<string, number[]>,
  ): Promise<void> {
    const usuario = this.authService.obterUsuarioLogado();
    if (!usuario.id) throw new Error('Usuário não autenticado');

    const progressoDoPlano = progressoAtualGeral[planoId] || [];
    const novoProgressoDoPlano = [...new Set([...progressoDoPlano, dia])].sort((a, b) => a - b);

    const payload = {
      ...progressoAtualGeral,
      [planoId]: novoProgressoDoPlano,
    };

    const { error } = await this.supabase.supabase
      .from('membros')
      .update({ progresso_leitura: payload })
      .eq('id', usuario.id);

    if (error) throw error;
  }

  obterCapitulo(referencia: string): Observable<CapituloBiblia> {
    const cacheKey = `${this.CACHE_PREFIX}${referencia.replace(/\s/g, '_')}`;
    const cacheLocal = this.authService.obterCapituloEmCache(cacheKey);

    if (cacheLocal) {
      return of(cacheLocal);
    }

    const matchIntervalo = referencia.match(/^(.+?)\s+(\d+)-(\d+)$/);

    if (matchIntervalo) {
      const livro = matchIntervalo[1];
      const capInicial = parseInt(matchIntervalo[2], 10);
      const capFinal = parseInt(matchIntervalo[3], 10);

      const chamadas: Observable<any>[] = [];
      for (let c = capInicial; c <= capFinal; c++) {
        const url = `https://bible-api.com/${livro} ${c}?translation=almeida`;
        chamadas.push(this.http.get<any>(url));
      }

      return forkJoin(chamadas).pipe(
        map((respostas: any[]) => {
          let todosVersiculos: { verse: number; text: string }[] = [];

          respostas.forEach((res, index) => {
            const numeroCapitulo = capInicial + index;

            todosVersiculos.push({
              verse: 0,
              text: `Capítulo ${numeroCapitulo}`,
            });

            res.verses.forEach((v: any) => {
              todosVersiculos.push({
                verse: v.verse,
                text: v.text.trim(),
              });
            });
          });

          const capituloConsolidado: CapituloBiblia = {
            referencia: referencia,
            versiculos: todosVersiculos,
          };

          return capituloConsolidado;
        }),
        tap((capitulo) => {
          this.authService.salvarCapituloEmCache(cacheKey, capitulo);
        }),
      );
    }

    const url = `https://bible-api.com/${referencia}?translation=almeida`;

    return this.http.get<any>(url).pipe(
      map((res) => ({
        referencia: res.reference,
        versiculos: res.verses.map((v: any) => ({
          verse: v.verse,
          text: v.text.trim(),
        })),
      })),
      tap((capitulo) => {
        this.authService.salvarCapituloEmCache(cacheKey, capitulo);
      }),
    );
  }
}
