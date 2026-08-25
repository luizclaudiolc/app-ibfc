import { inject, Injectable } from '@angular/core';
import { Observable, forkJoin, from, map } from 'rxjs';
import { SupabaseService } from './supabase';
import { PulsoService } from './pulso.service';
import { MINISTERIOS_DISPONIVEIS } from '../../shared/models/consts';

export interface DashboardData {
  totalMembros: number;
  totalCriancas: number;
  membrosPendentes: number;
  oracoesAtivas: number;
  mediaIdade: number;
  genero: { labels: string[]; data: number[] };
  estadoCivil: { labels: string[]; data: number[] };
  ministeriosCount: { labels: string[]; data: number[] };
  pulsoSemana: { paz: number; correria: number; oracao: number; total: number };
}

@Injectable({ providedIn: 'root' })
export class EstatisticasService {
  private supabase = inject(SupabaseService);
  private pulsoService = inject(PulsoService);

  obterEstatisticas(): Observable<DashboardData> {
    const semanaAtual = this.pulsoService.getSemanaAtual();

    return from(
      this.supabase.supabase.rpc('dashboard_estatisticas', { p_semana: semanaAtual }),
    ).pipe(
      map((res) => {
        if (res.error) throw res.error;
        return res.data as DashboardData;
      }),
    );
  }
}
