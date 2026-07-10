import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export interface ConfirmDialogData {
  titulo: string;
  mensagem: string;
  textoCancelar?: string;
  textoConfirmar?: string;
  tipo?: 'padrao' | 'perigo';
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <div
      class="bg-white p-6 rounded-3xl text-center max-w-sm w-full mx-auto shadow-xl border border-slate-100"
    >
      <div
        class="mx-auto w-16 h-16 mb-4 rounded-full flex items-center justify-center border-4 border-white shadow-sm"
        [ngClass]="data.tipo === 'perigo' ? 'bg-red-50 text-red-500' : 'bg-sky-50 text-sky-500'"
      >
        @if (data.tipo === 'perigo') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        } @else {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        }
      </div>

      <h2 class="text-xl font-bold text-slate-800 mb-2 tracking-tight">{{ data.titulo }}</h2>
      <p class="text-sm text-slate-500 mb-6 leading-relaxed">{{ data.mensagem }}</p>

      <div class="flex gap-3">
        <button
          mat-dialog-close
          class="w-full py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          {{ data.textoCancelar || 'Cancelar' }}
        </button>

        <button
          [mat-dialog-close]="true"
          class="w-full py-3 rounded-xl font-bold text-white transition-colors shadow-sm"
          [ngClass]="
            data.tipo === 'perigo' ? 'bg-red-500 hover:bg-red-600' : 'bg-sky-600 hover:bg-sky-700'
          "
        >
          {{ data.textoConfirmar || 'Confirmar' }}
        </button>
      </div>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}
}
