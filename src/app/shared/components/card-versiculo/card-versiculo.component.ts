import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';
import { VersiculoDia } from '../../../core/services/devocional.service';

@Component({
  selector: 'app-versiculo-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div
      class="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 rounded-3xl p-6 shadow-md text-white mt-2 mb-8"
    >
      <div
        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"
      ></div>

      <div class="relative z-10 flex flex-col items-center text-center">
        <div
          class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30 shadow-inner"
        >
          <mat-icon
            class="!w-[20px] !h-[20px] !text-[20px] !leading-none overflow-visible text-white"
            >menu_book</mat-icon
          >
        </div>

        <h2 class="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2">
          Versículo do Dia
        </h2>

        <p
          class="text-[15px] sm:text-base font-semibold leading-relaxed mb-4 text-white drop-shadow-sm italic"
        >
          "{{ versiculo().texto }}"
        </p>

        <div
          class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20"
        >
          <mat-icon class="!w-[14px] !h-[14px] !text-[14px] !leading-none overflow-visible"
            >bookmark</mat-icon
          >
          <span class="text-xs font-bold pt-[1px]">{{ versiculo().referencia }}</span>
        </div>
      </div>
    </div>
  `,
})
export class VersiculoCardComponent {
  versiculo = input.required<VersiculoDia>();
}
