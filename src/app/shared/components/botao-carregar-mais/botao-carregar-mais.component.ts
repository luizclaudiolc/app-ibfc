import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="flex justify-center pt-2">
      <button
        type="button"
        (click)="carregarMais.emit()"
        class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs px-6 py-3 rounded-2xl shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95"
      >
        <mat-icon class="!w-4 !h-4 !text-[16px]">expand_more</mat-icon>
        {{ texto }}
        @if (restantes > 0) {
          ({{ restantes }} restantes)
        }
      </button>
    </div>
  `,
})
export class BotaoCarregarMaisComponent {
  @Input() texto: string = 'Carregar mais';
  @Input() restantes: number = 0;
  @Output() carregarMais = new EventEmitter<void>();
}
