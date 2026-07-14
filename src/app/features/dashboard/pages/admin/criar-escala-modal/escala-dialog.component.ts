import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { DEPARTAMENTOS_DISPONIVEIS } from '../../../../../shared/models/consts';
import { CommonModule, DatePipe } from '@angular/common';
import { MembroService } from '../../../../../core/services/membro.service';
import { Membro } from '../../../../../shared/models/membro.model';
import { EscalaService } from '../../../../../core/services/escala.service';

@Component({
  selector: 'app-escala-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, DatePipe, CommonModule],
  template: `
    <div class="bg-white px-6 py-4 border-b flex justify-between items-center">
      <h2 class="font-bold text-slate-800">
        {{ data.escala ? 'Editar Escala' : 'Nova Escala' }}
      </h2>
      <button mat-dialog-close class="text-slate-400 hover:text-slate-600">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <form [formGroup]="form" (ngSubmit)="salvar()" class="p-6 space-y-4">
      <div
        class="bg-sky-50 text-sky-800 p-3 rounded-xl text-sm font-medium mb-2 flex items-center gap-2"
      >
        <mat-icon class="text-sky-600">calendar_today</mat-icon>
        Data selecionada: {{ data.data_escala | date: 'dd/MM/yyyy' }}
      </div>

      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Departamento</mat-label>
        <mat-select formControlName="departamento">
          @for (dept of departamentosPermitidos; track dept.value) {
            <mat-option [value]="dept.value">{{ dept.label }}</mat-option>
          }
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Título / Evento (Ex: Culto da Família)</mat-label>
        <input matInput formControlName="evento" placeholder="Ex: Culto da Família" />
      </mat-form-field>

      <!-- NOVO: Campo de Voluntários com Seleção Múltipla e Chips em Tailwind -->
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Voluntários Escalados</mat-label>
        <mat-select formControlName="voluntarios" multiple placeholder="Selecione os membros...">
          <mat-select-trigger class="flex flex-wrap gap-1.5 py-1">
            @for (vol of form.controls.voluntarios.value || []; track vol) {
              <span
                class="bg-sky-100 text-sky-700 text-[11px] px-2.5 py-1 rounded-full font-bold shadow-sm border border-sky-200"
              >
                {{ vol }}
              </span>
            }
          </mat-select-trigger>

          <!-- Lista os membros buscados do banco -->
          @for (membro of membrosAtivos(); track membro.id) {
            <mat-option [value]="membro.nome + ' ' + membro.sobrenome">
              {{ membro.nome }} {{ membro.sobrenome }}
            </mat-option>
          }
        </mat-select>
        @if (carregandoMembros()) {
          <mat-hint>Carregando membros...</mat-hint>
        }
      </mat-form-field>

      <!-- Ações do Formulário -->
      <div
        class="flex items-center mt-4 pt-4 border-t border-slate-100"
        [ngClass]="data.escala?.id ? 'justify-between' : 'justify-end'"
      >
        <!-- Botão Excluir (só aparece se estiver editando uma escala existente) -->
        @if (data.escala?.id) {
          <button
            type="button"
            (click)="excluir()"
            class="text-red-500 hover:bg-red-50 p-2 flex items-center justify-center rounded-xl transition-colors disabled:opacity-50"
            [disabled]="carregandoEnvio"
          >
            <mat-icon class="text-[20px] w-[20px] h-[20px]">delete_outline</mat-icon>
          </button>
        }

        <!-- Botões Cancelar e Salvar -->
        <div class="flex gap-3">
          <button
            mat-button
            type="button"
            mat-dialog-close
            class="!rounded-xl"
            [disabled]="carregandoEnvio"
          >
            Cancelar
          </button>
          <button
            mat-flat-button
            type="submit"
            class="!bg-sky-600 hover:!bg-sky-700 !text-white !rounded-xl transition-colors"
            [disabled]="form.invalid || carregandoEnvio"
          >
            {{ carregandoEnvio ? 'Processando...' : 'Salvar Escala' }}
          </button>
        </div>
      </div>
    </form>
  `,
})
export class EscalaDialogComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<EscalaDialogComponent>);
  fb = inject(FormBuilder);
  membroService = inject(MembroService);
  private escalaService = inject(EscalaService);

  carregandoMembros = signal<boolean>(true);
  membrosAtivos = signal<Membro[]>([]);
  carregandoEnvio = false;

  departamentosPermitidos = this.data.isAdmin
    ? DEPARTAMENTOS_DISPONIVEIS
    : DEPARTAMENTOS_DISPONIVEIS.filter((d) => d.value === this.data.setorUsuario);

  voluntariosIniciais: string[] = [];

  form = this.fb.group({
    data_escala: [this.data.data_escala.toISOString().split('T')[0]],
    departamento: [
      {
        value: this.data.escala?.departamento || (this.data.isAdmin ? '' : this.data.setorUsuario),
        disabled: !this.data.isAdmin,
      },
      Validators.required,
    ],
    evento: [this.data.escala?.evento || '', Validators.required],

    voluntarios: [[] as string[], Validators.required],
  });

  ngOnInit() {
    if (this.data.escala?.voluntarios) {
      this.voluntariosIniciais = this.data.escala.voluntarios
        .split(',')
        .map((nome: string) => nome.trim());

      this.form.controls.voluntarios.setValue(this.voluntariosIniciais);
    }

    this.membroService.buscarTodos(true).subscribe({
      next: (membros) => {
        const apenasAtivos = membros.filter((m) => m.status === 'ATIVO');
        this.membrosAtivos.set(apenasAtivos);
        this.carregandoMembros.set(false);
      },
      error: () => {
        console.error('Erro ao buscar membros');
        this.carregandoMembros.set(false);
      },
    });
  }

  salvar() {
    if (this.form.invalid) return;
    this.carregandoEnvio = true;

    const formValues = this.form.getRawValue();
    const vols = formValues.voluntarios || [];

    const dadosParaSalvar: any = {
      data_escala: formValues.data_escala,
      departamento: formValues.departamento,
      evento: formValues.evento,
      voluntarios: vols.join(', '),
    };

    if (this.data.escala?.id) {
      dadosParaSalvar.id = this.data.escala.id;
    }

    this.escalaService.salvar(dadosParaSalvar).subscribe({
      next: (escalaSalva) => {
        this.dialogRef.close({ sucesso: true, dados: escalaSalva });
      },
      error: (err) => {
        console.error('Erro ao salvar escala no Supabase', err);
        this.carregandoEnvio = false;
      },
    });
  }

  excluir() {
    if (!this.data.escala?.id) return;

    if (!confirm(`Tem certeza que deseja excluir o evento "${this.data.escala.evento}"?`)) return;

    this.carregandoEnvio = true;
    this.escalaService.excluir(this.data.escala.id).subscribe({
      next: () => {
        this.dialogRef.close({ sucesso: true, excluido: true });
      },
      error: (err) => {
        console.error('Erro ao excluir escala', err);
        this.carregandoEnvio = false;
      },
    });
  }
}
