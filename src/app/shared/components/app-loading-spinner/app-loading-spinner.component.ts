import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    @if (inline()) {
      <span class="inline-flex items-center gap-2">
        <mat-spinner [diameter]="diametro()" class="!stroke-inherit"></mat-spinner>
        @if (mensagem(); as msg) {
          <span>{{ msg }}</span>
        }
      </span>
    } @else {
      <div
        class="flex flex-col items-center justify-center py-16 bg-white rounded-3xl shadow-sm border border-slate-100 w-full"
      >
        <mat-spinner [diameter]="diametro()" class="!stroke-sky-600"></mat-spinner>

        @if (mensagem(); as msg) {
          <p class="text-xs font-semibold text-slate-400 mt-3 animate-pulse">{{ msg }}</p>
        }
      </div>
    }
  `,
})
export class LoadingSpinnerComponent {
  readonly diametro = input<number>(40);
  readonly mensagem = input<string | undefined>(undefined);
  readonly inline = input<boolean>(false);
}
