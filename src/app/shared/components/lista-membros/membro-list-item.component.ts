import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Membro } from '../../models/membro.model';

@Component({
  selector: 'app-membro-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      [routerLink]="['/dashboard/perfil', membro().id]"
      class="bg-white p-3.5 mb-3 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between gap-3 hover:shadow-md/5 hover:border-sky-200 transition-all cursor-pointer"
    >
      <div class="flex items-center gap-3.5">
        @if (membro().foto_url) {
          <img
            [src]="membro().foto_url"
            class="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 shadow-inner"
            alt="Perfil"
          />
        } @else {
          <div
            class="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 font-bold flex items-center justify-center text-sm border border-slate-200/40 shadow-inner"
          >
            {{ membro().nome[0].toUpperCase() }}
          </div>
        }

        <div class="space-y-0.5">
          <div class="flex items-center gap-1.5">
            <h3 class="font-bold text-slate-800 text-sm tracking-tight leading-none">
              {{ membro().nome }} {{ membro().sobrenome }}
            </h3>
            @if (isCurrentUser()) {
              <span
                class="bg-sky-50 text-sky-600 font-bold text-[9px] px-1.5 py-0.5 rounded-md uppercase tracking-wider border border-sky-100"
                >Você</span
              >
            }
          </div>

          <p class="text-xs text-slate-500 font-medium">
            {{ cargoNome() }}
            @if (departamentoNome()) {
              • <span class="text-sky-600 font-semibold">{{ departamentoNome() }}</span>
            }
          </p>

          <div class="flex items-center gap-1 text-[10px] text-slate-400 font-medium pt-0.5">
            <span>🎈 Aniversário: {{ membro().data_nascimento | date: 'dd/MM' : 'UTC' }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MembroListItemComponent {
  membro = input.required<Membro>();
  isCurrentUser = input<boolean>(false);
  cargoNome = input.required<string>();
  departamentoNome = input<string>();
}
