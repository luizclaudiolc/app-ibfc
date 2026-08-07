import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Escala } from '../../models/escala.model';

@Component({
  selector: 'app-escala-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-gradient-to-br from-sky-600 via-sky-600 to-indigo-700 text-white p-5 rounded-3xl shadow-sm relative overflow-hidden h-full"
    >
      <div
        class="absolute -right-6 -bottom-6 text-white/5 text-7xl font-bold select-none pointer-events-none"
      >
        ⛪
      </div>

      <div class="flex items-center gap-2 mb-4 relative z-10">
        <span
          class="text-[10px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
        >
          Você está escalado(a)
        </span>
      </div>

      <div class="relative z-10">
        <h2 class="text-base font-medium text-sky-100 leading-tight mb-0.5">
          Data:
          <span class="font-bold text-white">{{
            escala().data_escala | date: 'dd/MM/yyyy' : 'UTC'
          }}</span>
        </h2>
        <p class="text-lg font-bold text-white tracking-tight">Evento: {{ nomeEvento() }}</p>
      </div>

      <div
        class="text-[11px] bg-white/10 backdrop-blur-sm p-3 rounded-xl mt-4 border border-white/10 leading-relaxed relative z-10"
      >
        <span class="opacity-75 block font-semibold uppercase tracking-wider text-[9px] mb-1"
          >Equipe do dia</span
        >
        {{ escala().voluntarios }}
      </div>
    </div>
  `,
})
export class EscalaCardComponent {
  escala = input.required<Escala>();
  nomeEvento = input.required<string>();
}
