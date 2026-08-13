import { inject, Injectable } from '@angular/core';
import { Observable, forkJoin, from, map } from 'rxjs';
import { SupabaseService } from './supabase';
import { PulsoService } from './pulso.service';
import { ESCOLARIDADE_MAP } from '../../shared/models/consts';

export interface DashboardData {
  totalMembros: number;
  oracoesAtivas: number;
  mediaIdade: number;
  genero: { labels: string[]; data: number[] };
  estadoCivil: { labels: string[]; data: number[] };
  escolaridade: { labels: string[]; data: number[] };
  pulsoSemana: { paz: number; correria: number; oracao: number; total: number };
}

@Injectable({ providedIn: 'root' })
export class EstatisticasService {
  private supabase = inject(SupabaseService);
  private pulsoService = inject(PulsoService);

  obterEstatisticas(): Observable<DashboardData> {
    const semanaAtual = this.pulsoService.getSemanaAtual();

    const membros$ = from(
      this.supabase.supabase
        .from('membros')
        .select('genero, estado_civil, total_oracoes, status, data_nascimento, nivel_escolaridade')
        .eq('status', 'ATIVO'),
    );

    const pulso$ = from(
      this.supabase.supabase
        .from('checkins_semanais')
        .select('status')
        .eq('semana_ano', semanaAtual),
    );

    return forkJoin({ membros: membros$, pulso: pulso$ }).pipe(
      map(({ membros, pulso }) => {
        const listaMembros = membros.data || [];
        const listaPulso = pulso.data || [];

        let masc = 0,
          fem = 0,
          casados = 0,
          solteiros = 0,
          div = 0,
          viuvos = 0;
        let totalOracoes = 0;
        let somaIdades = 0;
        let qtdMembrosComIdade = 0;
        const hoje = new Date();

        const escolaridadeContagem: { [key: number]: number } = {};

        listaMembros.forEach((m) => {
          totalOracoes += m.total_oracoes || 0;

          if (m.genero === 1) masc++;
          if (m.genero === 2) fem++;

          if (m.estado_civil === 1) solteiros++;
          if (m.estado_civil === 2) casados++;
          if (m.estado_civil === 3) div++;
          if (m.estado_civil === 4) viuvos++;

          if (m.nivel_escolaridade !== null && m.nivel_escolaridade !== undefined) {
            escolaridadeContagem[m.nivel_escolaridade] =
              (escolaridadeContagem[m.nivel_escolaridade] || 0) + 1;
          }

          if (m.data_nascimento) {
            const dataNasc = new Date(m.data_nascimento);
            let idade = hoje.getFullYear() - dataNasc.getFullYear();
            const mes = hoje.getMonth() - dataNasc.getMonth();
            if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
              idade--;
            }
            if (idade >= 0) {
              somaIdades += idade;
              qtdMembrosComIdade++;
            }
          }
        });

        const mediaIdade = qtdMembrosComIdade > 0 ? Math.round(somaIdades / qtdMembrosComIdade) : 0;

        const escolaridadeLabels: string[] = [];
        const escolaridadeData: number[] = [];

        Object.entries(ESCOLARIDADE_MAP).forEach(([key, label]) => {
          const numKey = +key;
          const qtd = escolaridadeContagem[numKey] || 0;

          if (qtd > 0) {
            escolaridadeLabels.push(label);
            escolaridadeData.push(qtd);
          }
        });

        let paz = 0,
          correria = 0,
          oracao = 0;
        listaPulso.forEach((p) => {
          if (p.status === 1) paz++;
          if (p.status === 2) correria++;
          if (p.status === 3) oracao++;
        });

        return {
          totalMembros: listaMembros.length,
          oracoesAtivas: totalOracoes,
          mediaIdade,
          genero: {
            labels: ['Masculino', 'Feminino'],
            data: [masc, fem],
          },
          estadoCivil: {
            labels: ['Solteiros', 'Casados', 'Divorciados', 'Viúvos'],
            data: [solteiros, casados, div, viuvos],
          },
          escolaridade: {
            labels: escolaridadeLabels,
            data: escolaridadeData,
          },
          pulsoSemana: {
            paz,
            correria,
            oracao,
            total: listaPulso.length,
          },
        };
      }),
    );
  }
}
