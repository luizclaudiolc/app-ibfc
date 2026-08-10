import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aviso } from '../../models/aviso.model';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-aviso-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <button
      type="button"
      (click)="ampliar.emit()"
      class="group relative flex w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-md hover:ring-slate-200 active:scale-[0.98]"
    >
      <div class="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden bg-slate-50">
        <img
          [src]="aviso().foto_url"
          loading="lazy"
          alt="Banner do aviso"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        ></div>

        <div
          class="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-sm ring-1 ring-black/5 transition-transform duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <mat-icon class="!text-[16px] !w-[16px] !h-[16px] text-slate-700">zoom_in_map</mat-icon>
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-700">Ampliar</span>
        </div>
      </div>

      <div class="flex flex-col p-4 sm:p-5">
        <div
          class="mb-2.5 flex items-center gap-1.5 self-start rounded-lg bg-sky-50 px-2.5 py-1 text-sky-700 ring-1 ring-sky-100/50"
        >
          <mat-icon class="!text-[14px] !w-[14px] !h-[14px]">calendar_today</mat-icon>

          <span class="text-[11px] font-bold tracking-wider text-slate-700">
            {{ aviso().data_evento | date: "dd 'de' MMM 'de' yyyy" : 'UTC' : 'pt-BR' | uppercase }}
          </span>
        </div>

        @if (aviso().descricao) {
          <p class="line-clamp-2 text-sm font-medium text-slate-600 leading-relaxed">
            {{ aviso().descricao }}
          </p>
        } @else {
          <p class="text-sm font-medium italic text-slate-400">Arraste ou clique para ver.</p>
        }
      </div>
    </button>
  `,
})
export class CardAvisoComponent {
  aviso = input.required<Aviso>();
  ampliar = output<void>();
}
