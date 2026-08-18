import { inject, Injectable } from '@angular/core';
import { Observable, forkJoin, from, map } from 'rxjs';
import { SupabaseService } from './supabase';
import { PulsoService } from './pulso.service';
import { ESCOLARIDADE_MAP, MINISTERIOS_DISPONIVEIS } from '../../shared/models/consts';

export interface DashboardData {
  totalMembros: number;
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

    const membros$ = from(
      this.supabase.supabase
        .from('membros')
        .select('genero, estado_civil, pedido_oracao, status, data_nascimento, ministerios'),
    );

    const pulso$ = from(
      this.supabase.supabase
        .from('checkins_semanais')
        .select('status')
        .eq('semana_ano', semanaAtual),
    );

    return forkJoin({ membros: membros$, pulso: pulso$ }).pipe(
      map(({ membros, pulso }) => {
        const todosMembros = membros.data || [];
        const listaPulso = pulso.data || [];

        const ativos = todosMembros.filter((m) => m.status === 'ATIVO');
        const pendentes = todosMembros.filter((m) => m.status === 'PENDENTE');

        let masc = 0,
          fem = 0,
          casados = 0,
          solteiros = 0,
          div = 0,
          viuvos = 0;

        let qtdOracoesAtivas = 0;
        let somaIdades = 0;
        let qtdMembrosComIdade = 0;
        const hoje = new Date();

        const ministerioContagem: { [key: string]: number } = {};

        ativos.forEach((m) => {
          if (m.pedido_oracao && m.pedido_oracao.trim() !== '') {
            qtdOracoesAtivas++;
          }

          if (m.genero === 1) masc++;
          if (m.genero === 2) fem++;

          if (m.estado_civil === 1) solteiros++;
          if (m.estado_civil === 2) casados++;
          if (m.estado_civil === 3) div++;
          if (m.estado_civil === 4) viuvos++;

          if (Array.isArray(m.ministerios)) {
            m.ministerios.forEach((min: string) => {
              ministerioContagem[min] = (ministerioContagem[min] || 0) + 1;
            });
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

        const minLabels: string[] = [];
        const minData: number[] = [];

        const ministerioMapObj = MINISTERIOS_DISPONIVEIS.reduce(
          (acc, curr) => {
            acc[curr.value] = curr.label;
            return acc;
          },
          {} as { [key: string]: string },
        );

        Object.entries(ministerioContagem).forEach(([key, count]) => {
          const labelAmigavel = ministerioMapObj[key] || key;
          minLabels.push(labelAmigavel);
          minData.push(count);
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
          totalMembros: ativos.length,
          membrosPendentes: pendentes.length,
          oracoesAtivas: qtdOracoesAtivas,
          mediaIdade,
          genero: {
            labels: ['Masculino', 'Feminino'],
            data: [masc, fem],
          },
          estadoCivil: {
            labels: ['Solteiros', 'Casados', 'Divorciados', 'Viúvos'],
            data: [solteiros, casados, div, viuvos],
          },
          ministeriosCount: {
            labels: minLabels,
            data: minData,
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
