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
      class="group relative w-full overflow-hidden rounded-3xl bg-slate-900 shadow-lg ring-1 ring-slate-200 transition-all duration-300 active:scale-[0.98]"
    >
      <img
        [src]="aviso().foto_url"
        loading="lazy"
        alt="Aviso"
        class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div
        class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"
      ></div>
      <div
        class="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 shadow-sm"
      >
        <mat-icon class="!text-[18px] !w-[18px] !h-[18px] text-slate-700">zoom_in</mat-icon>
        <span class="text-xs font-semibold text-slate-700"> Ampliar </span>
      </div>
    </button>
  `,
})
export class CardAvisoComponent {
  aviso = input.required<Aviso>();
  ampliar = output<void>();
}
