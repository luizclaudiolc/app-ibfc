import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div
      class="text-center py-12 px-6 bg-white border border-dashed border-slate-200 rounded-3xl w-full flex flex-col items-center justify-center shadow-xs"
    >
      <div
        class="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-3 shadow-inner"
      >
        <mat-icon class="!w-6 !h-6 !text-[24px] flex items-center justify-center">{{
          icone()
        }}</mat-icon>
      </div>
      <p class="text-sm font-bold text-slate-700">{{ titulo() }}</p>

      @if (subtitulo(); as sub) {
        <p class="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">{{ sub }}</p>
      }

      @if (textoBotao(); as btnText) {
        <button
          type="button"
          (click)="acao.emit()"
          class="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
        >
          {{ btnText }}
        </button>
      }
    </div>
  `,
})
export class EmptyStateComponent {
  readonly icone = input<string>('search_off');
  readonly titulo = input<string>('Nenhum registro encontrado');
  readonly subtitulo = input<string | undefined>(undefined);
  readonly textoBotao = input<string | undefined>(undefined);

  readonly acao = output<void>();
}
