import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

export interface SnackbarData {
  mensagem: string;
  tipo: 'sucesso' | 'erro' | 'aviso';
}

@Component({
  selector: 'app-custom-snackbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div
      class="flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl shadow-xl text-white w-full max-w-sm mx-auto"
      [ngClass]="{
        'bg-emerald-600': data.tipo === 'sucesso',
        'bg-red-600': data.tipo === 'erro',
        'bg-amber-600': data.tipo === 'aviso',
      }"
    >
      <div class="flex items-start gap-3 flex-1 min-w-0">
        <mat-icon class="shrink-0 !w-6 !h-6 !text-[24px] mt-0.5">
          {{
            data.tipo === 'sucesso' ? 'check_circle' : data.tipo === 'erro' ? 'error' : 'warning'
          }}
        </mat-icon>

        <span
          class="font-semibold text-sm leading-snug tracking-tight whitespace-normal break-words"
        >
          {{ data.mensagem }}
        </span>
      </div>

      <button
        type="button"
        (click)="snackBarRef.dismiss()"
        class="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white ml-2 self-start mt-0.5"
      >
        <mat-icon class="!w-4 !h-4 !text-[16px] leading-none flex items-center justify-center"
          >close</mat-icon
        >
      </button>
    </div>
  `,
})
export class CustomSnackbarComponent {
  public data: SnackbarData = inject(MAT_SNACK_BAR_DATA);
  public snackBarRef = inject(MatSnackBarRef<CustomSnackbarComponent>);
}
