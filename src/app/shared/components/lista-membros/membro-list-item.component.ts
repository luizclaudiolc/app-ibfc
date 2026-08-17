import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Membro } from '../../models/membro.model';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-membro-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  template: `
    <div
      [routerLink]="['/dashboard/perfil', membro().id]"
      class="bg-white p-3.5 mb-3 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between gap-3 hover:shadow-md/5 hover:border-sky-200 transition-all cursor-pointer group"
    >
      <div class="flex items-center gap-3.5 min-w-0">
        @if (membro().foto_url) {
          <img
            [src]="membro().foto_url"
            class="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 shadow-inner shrink-0"
            alt="Perfil"
          />
        } @else {
          <div
            class="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 font-bold flex items-center justify-center text-sm border border-slate-200/40 shadow-inner shrink-0"
          >
            {{ membro().nome[0].toUpperCase() }}
          </div>
        }

        <div class="space-y-0.5 min-w-0">
          <div class="flex items-center gap-1.5 min-w-0">
            <h3 class="font-bold text-slate-800 text-sm tracking-tight leading-none truncate">
              {{ membro().nome }} {{ membro().sobrenome }}
            </h3>
            @if (isCurrentUser()) {
              <span
                class="bg-sky-50 text-sky-600 font-bold text-[9px] px-1.5 py-0.5 rounded-md uppercase tracking-wider border border-sky-100 shrink-0"
                >Você</span
              >
            }
          </div>

          <p class="text-xs text-slate-500 font-medium truncate">
            {{ cargoNome() }}
            @if (departamentoNome()) {
              • <span class="text-sky-600 font-semibold">{{ departamentoNome() }}</span>
            }
          </p>

          <div class="flex items-center gap-2.5 text-[10px] text-slate-400 font-medium pt-0.5">
            <div class="flex items-center gap-1">
              <mat-icon
                class="!w-[14px] !h-[14px] !text-[14px] !leading-none overflow-visible text-slate-400"
                >cake</mat-icon
              >
              <span class="pt-[1px]">{{ membro().data_nascimento | date: 'dd/MM' : 'UTC' }}</span>
            </div>

            @if (membro().ministerios && membro().ministerios!.length > 0) {
              <div class="flex items-center gap-2.5">
                <span class="w-1 h-1 rounded-full bg-slate-200"></span>
                <div class="flex items-center gap-1 text-slate-500">
                  <mat-icon
                    class="!w-[14px] !h-[14px] !text-[14px] !leading-none overflow-visible text-sky-400"
                    >diversity_3</mat-icon
                  >
                  <span class="pt-[1px]"
                    >{{ membro().ministerios!.length }}
                    {{ membro().ministerios!.length > 1 ? 'ministérios' : 'ministério' }}</span
                  >
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <mat-icon
        class="text-slate-300 group-hover:text-sky-500 transition-colors !w-[20px] !h-[20px] !text-[20px] shrink-0"
      >
        chevron_right
      </mat-icon>
    </div>
  `,
})
export class MembroListItemComponent {
  membro = input.required<Membro>();
  isCurrentUser = input<boolean>(false);
  cargoNome = input.required<string>();
  departamentoNome = input<string>();
}
