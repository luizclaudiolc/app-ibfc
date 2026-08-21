import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../core/modules/material.module';
import { DialogLayoutComponent } from '../layout-modal/dialog-layout.component';
import { CapituloBiblia, PlanoLeituraService } from '../../../core/services/plano-leitura.service';
import { NotificationService } from '../../../core/services/notifications.service';

export interface LeituraDialogData {
  planoId: string;
  dia: number;
  referencia: string;
  titulo: string;
  progressoAtualGeral: Record<string, number[]>;
}

@Component({
  selector: 'app-leitura-biblica-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule, DialogLayoutComponent],
  template: `
    <app-dialog-layout [title]="'Dia ' + data.dia + ' - ' + data.titulo">
      <div
        dialog-icon
        class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"
      >
        <mat-icon class="!w-5 !h-5 !text-[20px]">menu_book</mat-icon>
      </div>

      <div class="space-y-6 pt-4 pb-6 px-1">
        @if (carregando()) {
          <div class="flex flex-col items-center justify-center py-20 gap-3">
            <mat-spinner diameter="32" class="!stroke-indigo-500"></mat-spinner>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Abrindo as Escrituras...
            </p>
          </div>
        } @else if (erro()) {
          <div class="text-center py-10 text-red-500">
            <mat-icon class="mb-2 !w-8 !h-8 !text-[32px]">wifi_off</mat-icon>
            <p class="text-sm font-bold">Sem conexão</p>
            <p class="text-xs mt-1">Verifique sua internet para baixar este capítulo.</p>
          </div>
        } @else if (capitulo()) {
          <div class="font-serif text-slate-800 text-[17px] leading-loose">
            <h2
              class="font-sans text-xl font-extrabold text-indigo-900 mb-6 border-b border-slate-100 pb-3"
            >
              {{ capitulo()!.referencia }}
            </h2>

            @for (v of capitulo()!.versiculos; track $index) {
              @if (v.verse === 0) {
                <div class="my-8 text-center">
                  <span
                    class="text-xs font-sans font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 shadow-2xs"
                  >
                    {{ v.text }}
                  </span>
                </div>
              } @else {
                <p class="mb-4">
                  <sup class="text-[10px] font-sans font-bold text-indigo-400 mr-1.5">{{
                    v.verse
                  }}</sup>
                  <span>{{ v.text }}</span>
                </p>
              }
            }
          </div>
        }
      </div>

      <ng-container dialog-actions>
        <button
          mat-dialog-close
          class="flex-1 py-3.5 rounded-xl font-bold text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors"
        >
          Ler Depois
        </button>
        <button
          [disabled]="carregando() || erro() || finalizando()"
          (click)="marcarComoLido()"
          class="flex-[1.5] py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          @if (finalizando()) {
            <mat-spinner diameter="18" class="!stroke-white"></mat-spinner>
          } @else {
            <mat-icon class="!w-[18px] !h-[18px] !text-[18px]">task_alt</mat-icon>
            Concluir Leitura
          }
        </button>
      </ng-container>
    </app-dialog-layout>
  `,
})
export class LeituraBiblicaDialogComponent implements OnInit {
  public data: LeituraDialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<LeituraBiblicaDialogComponent>);
  private planoService = inject(PlanoLeituraService);
  private notification = inject(NotificationService);

  carregando = signal(true);
  erro = signal(false);
  finalizando = signal(false);
  capitulo = signal<CapituloBiblia | null>(null);

  ngOnInit() {
    this.planoService.obterCapitulo(this.data.referencia).subscribe({
      next: (dados) => {
        this.capitulo.set(dados);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error(err);
        this.erro.set(true);
        this.carregando.set(false);
      },
    });
  }

  async marcarComoLido() {
    try {
      this.finalizando.set(true);
      await this.planoService.concluirDia(
        this.data.planoId,
        this.data.dia,
        this.data.progressoAtualGeral,
      );
      this.notification.sucesso('Parabéns! Leitura do dia concluída com sucesso.');
      this.dialogRef.close(true);
    } catch (error) {
      this.notification.erro('Erro ao salvar progresso. Tente novamente.');
      this.finalizando.set(false);
    }
  }
}
