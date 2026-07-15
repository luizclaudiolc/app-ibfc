import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { DEPARTAMENTOS_DISPONIVEIS, EVENTOS_OPCOES } from '../../../../../shared/models/consts';
import { CommonModule, DatePipe } from '@angular/common';
import { MembroService } from '../../../../../core/services/membro.service';
import { Membro } from '../../../../../shared/models/membro.model';
import { EscalaService } from '../../../../../core/services/escala.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-escala-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, DatePipe, CommonModule],
  template: `
    <div class="bg-slate-50 flex flex-col h-full max-h-[90vh]">
      <div
        class="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shrink-0"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shrink-0"
          >
            <mat-icon class="!w-6 !h-6 text-[24px]">
              {{ data.isReadOnly ? 'view_list' : 'event_available' }}
            </mat-icon>
          </div>
          <div>
            <h2 class="text-base font-bold text-slate-800 leading-tight">
              @if (data.isReadOnly) {
                Escalas do Dia
              } @else {
                {{ data.escala ? 'Editar Escala' : 'Nova Escala' }}
              }
            </h2>
            <div class="flex items-center gap-1.5 mt-0.5">
              <mat-icon class="text-[12px] w-[12px] h-[12px] text-slate-400"
                >calendar_month</mat-icon
              >
              <p class="text-[11px] text-slate-500 font-medium uppercase tracking-wide">
                {{ data.data_escala | date: 'dd/MM/yyyy' }}
              </p>
            </div>
          </div>
        </div>
        <button
          mat-dialog-close
          class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <mat-icon class="text-[16px] w-[16px] h-[16px]">close</mat-icon>
        </button>
      </div>

      <div class="p-6 overflow-y-auto flex-1">
        @if (data.isReadOnly) {
          <div class="space-y-4">
            @if (data.escalas?.length === 0) {
              <div class="text-center py-8 text-slate-400 flex flex-col items-center">
                <mat-icon class="!w-12 !h-12 text-[48px] mb-2 opacity-50">event_busy</mat-icon>
                <p>Nenhum evento programado para este dia.</p>
              </div>
            } @else {
              @for (esc of data.escalas; track esc.id) {
                <div
                  class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3"
                >
                  <div>
                    <span
                      class="text-[10px] font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100"
                    >
                      {{ esc.departamento }}
                    </span>
                    <h3 class="font-bold text-slate-800 text-sm mt-1.5">{{ esc.evento }}</h3>
                  </div>

                  <div class="pt-2 border-t border-slate-100">
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Equipe Escalada
                    </p>
                    <div class="flex flex-wrap gap-1.5">
                      @for (vol of esc.voluntarios.split(','); track vol) {
                        <span
                          class="bg-slate-50 text-slate-700 text-[11px] px-2.5 py-1 rounded-full font-semibold border border-slate-200 shadow-sm"
                        >
                          {{ vol.trim() }}
                        </span>
                      }
                    </div>
                  </div>
                </div>
              }
            }
          </div>
        } @else {
          <form [formGroup]="form" class="space-y-5">
            <div class="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
                Detalhes
              </h3>
              <div class="grid grid-cols-1 gap-3">
                <mat-form-field appearance="outline" class="w-full">
                  <mat-label>Departamento</mat-label>
                  <mat-select formControlName="departamento">
                    @for (dept of departamentosPermitidos; track dept.value) {
                      <mat-option [value]="dept.value">{{ dept.label }}</mat-option>
                    }
                  </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="w-full">
                  <mat-label>Título / Evento</mat-label>
                  <mat-select formControlName="evento" placeholder="Selecione o evento">
                    @for (evento of eventosPreDefinidos; track evento) {
                      <mat-option [value]="evento.value">{{ evento.label }}</mat-option>
                    }
                  </mat-select>
                </mat-form-field>
              </div>
            </div>

            <div class="p-4 bg-sky-50/50 rounded-2xl border border-sky-100">
              <h3 class="text-[10px] font-bold text-sky-800 uppercase tracking-wider mb-3 px-1">
                Equipe Escalada
              </h3>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Adicionar Voluntários</mat-label>
                <mat-chip-grid #chipGrid formControlName="voluntarios">
                  @for (vol of form.controls.voluntarios.value || []; track vol) {
                    <mat-chip-row (removed)="removerVoluntario(vol)">
                      {{ vol }}
                      <button matChipRemove><mat-icon>cancel</mat-icon></button>
                    </mat-chip-row>
                  }
                  <input
                    placeholder="Digite o nome..."
                    [matChipInputFor]="chipGrid"
                    [matAutocomplete]="auto"
                    (input)="filtrarMembros($event)"
                  />
                </mat-chip-grid>
                <mat-autocomplete
                  #auto="matAutocomplete"
                  (optionSelected)="adicionarVoluntario($event)"
                >
                  @for (membro of membrosFiltrados(); track membro.id) {
                    <mat-option [value]="membro.nome + ' ' + membro.sobrenome">
                      {{ membro.nome }} {{ membro.sobrenome }}
                    </mat-option>
                  }
                </mat-autocomplete>
              </mat-form-field>
            </div>
          </form>
        }
      </div>

      <div class="bg-white border-t border-slate-100 p-4 shrink-0 flex gap-3">
        @if (data.isReadOnly) {
          <button
            mat-dialog-close
            class="w-full py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Fechar
          </button>
        } @else {
          @if (data.escala?.id) {
            <button
              type="button"
              (click)="excluir()"
              [disabled]="carregandoEnvio"
              class="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 hover:bg-red-100 border border-red-100 text-red-500 transition-colors"
            >
              <mat-icon class="text-[20px]">delete_outline</mat-icon>
            </button>
          }
          <button
            mat-dialog-close
            [disabled]="carregandoEnvio"
            class="flex-1 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            (click)="salvar()"
            [disabled]="form.invalid || carregandoEnvio"
            class="flex-[1.5] py-3 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm flex justify-center items-center gap-2"
          >
            @if (carregandoEnvio) {
              <mat-spinner diameter="20" class="!stroke-white"></mat-spinner>
            }
            {{ carregandoEnvio ? 'Salvando...' : 'Salvar' }}
          </button>
        }
      </div>
    </div>
  `,
})
export class EscalaDialogComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<EscalaDialogComponent>);
  fb = inject(FormBuilder);
  membroService = inject(MembroService);
  private escalaService = inject(EscalaService);

  carregandoEnvio = false;
  membrosAtivos = signal<Membro[]>([]);
  membrosFiltrados = signal<Membro[]>([]);

  eventosPreDefinidos = EVENTOS_OPCOES;

  departamentosPermitidos = this.data.isAdmin
    ? DEPARTAMENTOS_DISPONIVEIS
    : DEPARTAMENTOS_DISPONIVEIS.filter((d) => d.value === this.data.setorUsuario);

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
      this.form.controls.voluntarios.setValue(
        this.data.escala.voluntarios.split(',').map((n: string) => n.trim()),
      );
    }
    this.membroService.buscarTodos(true).subscribe((membros) => {
      const ativos = membros.filter((m) => m.status === 'ATIVO');
      this.membrosAtivos.set(ativos);
      this.membrosFiltrados.set(ativos);
    });
  }

  filtrarMembros(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    this.membrosFiltrados.set(
      this.membrosAtivos().filter((m) =>
        (m.nome + ' ' + m.sobrenome).toLowerCase().includes(input),
      ),
    );
  }

  adicionarVoluntario(event: MatAutocompleteSelectedEvent): void {
    const nome = event.option.value;
    const atuais = this.form.controls.voluntarios.value || [];
    if (!atuais.includes(nome)) this.form.controls.voluntarios.setValue([...atuais, nome]);
  }

  removerVoluntario(nome: string): void {
    this.form.controls.voluntarios.setValue(
      (this.form.controls.voluntarios.value || []).filter((v) => v !== nome),
    );
  }

  salvar() {
    if (this.form.invalid) return;
    this.carregandoEnvio = true;
    const formValues = this.form.getRawValue();
    const dadosParaSalvar: any = {
      ...formValues,
      voluntarios: (formValues.voluntarios as string[]).join(', '),
    };
    if (this.data.escala?.id) dadosParaSalvar.id = this.data.escala.id;

    this.escalaService.salvar(dadosParaSalvar).subscribe({
      next: () => this.dialogRef.close({ sucesso: true }),
      error: () => (this.carregandoEnvio = false),
    });
  }

  excluir() {
    if (!this.data.escala?.id || !confirm('Confirmar exclusão?')) return;
    this.escalaService
      .excluir(this.data.escala.id)
      .subscribe(() => this.dialogRef.close({ sucesso: true, excluido: true }));
  }
}
