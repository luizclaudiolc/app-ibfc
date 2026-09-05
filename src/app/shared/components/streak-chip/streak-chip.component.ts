import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../core/modules/material.module';
import { StreakLeitura } from '../../../core/services/plano-leitura.service';

@Component({
  selector: 'app-streak-chip',
  standalone: true,
  imports: [CommonModule, RouterLink, MaterialModule],
  template: `
    <a
      routerLink="/dashboard/plano-leitura"
      class="flex items-center gap-4 rounded-3xl border p-5 shadow-sm transition-all duration-300 active:scale-[0.99]"
      [ngClass]="
        aceso()
          ? 'border-amber-100 bg-amber-50 text-amber-900'
          : 'border-slate-100 bg-white text-slate-700 hover:border-slate-200'
      "
    >
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-inner"
        [ngClass]="aceso() ? 'bg-amber-100 text-amber-600' : 'bg-slate-50 text-slate-400'"
      >
        <mat-icon class="!h-[20px] !w-[20px] !text-[20px]">local_fire_department</mat-icon>
      </div>

      <div class="min-w-0 flex-1">
        <p
          class="text-[11px] font-bold uppercase tracking-wider"
          [ngClass]="aceso() ? 'text-amber-700/80' : 'text-slate-400'"
        >
          Sequência na Palavra
        </p>

        @if (aceso()) {
          <h4 class="mt-0.5 text-sm font-bold">
            {{ streak().atual }}
            {{ streak().atual === 1 ? 'dia' : 'dias' }} seguidos
          </h4>
          <p class="mt-0.5 text-xs text-amber-800/80">
            Recorde: {{ streak().recorde }}
            {{ streak().recorde === 1 ? 'dia' : 'dias' }}
          </p>
        } @else {
          <h4 class="mt-0.5 text-sm font-bold text-slate-800">Comece sua sequência hoje</h4>
          <p class="mt-0.5 text-xs text-slate-500">Conclua a leitura do dia para acender o fogo.</p>
        }
      </div>

      <mat-icon
        class="!h-5 !w-5 shrink-0 !text-[20px]"
        [ngClass]="aceso() ? 'text-amber-400' : 'text-slate-300'"
      >
        chevron_right
      </mat-icon>
    </a>
  `,
})
export class StreakChipComponent {
  streak = input.required<StreakLeitura>();

  aceso = computed(() => this.streak().atual > 0);
}
