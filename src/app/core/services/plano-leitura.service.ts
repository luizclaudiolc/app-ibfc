import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map, from } from 'rxjs';
import { SupabaseService } from './supabase';
import { AuthService } from './auth.service';
import { PlanoLeitura, PLANOS_LEITURA } from '../../shared/models/plano-leitura.const';

export interface CapituloBiblia {
  referencia: string;
  versiculos: { verse: number; text: string }[];
}

@Injectable({ providedIn: 'root' })
export class PlanoLeituraService {
  constructor() {
    this.validarIntegridadePlanos();
  }

  private http = inject(HttpClient);
  private supabase = inject(SupabaseService);
  private authService = inject(AuthService);

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
    const cacheLocal = this.authService.obterCapituloEmCache(referencia);
    if (cacheLocal) {
      return of(cacheLocal);
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
        this.authService.salvarCapituloEmCache(referencia, capitulo);
      }),
    );
  }

  verificarSePlanoEstaConcluido(
    planoId: string,
    progressoGeral: Record<string, number[]>,
  ): boolean {
    const plano = this.obterPlanos().find((p) => p.id === planoId);
    if (!plano) return false;

    const diasLidosDoPlano = progressoGeral[planoId] || [];

    return diasLidosDoPlano.length >= plano.dias.length;
  }

  private validarIntegridadePlanos() {
    const ids = PLANOS_LEITURA.map((p) => p.id);
    const duplicados = ids.filter((id, index) => ids.indexOf(id) !== index);

    if (duplicados.length > 0) {
      console.error('⚠️ ERRO CRÍTICO: IDs de planos duplicados detectados:', duplicados);
    }
  }
}
