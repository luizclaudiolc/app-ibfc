import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { DialogLayoutComponent } from '../../../../../shared/components/layout-modal/dialog-layout.component';

export interface AvisoFormDialogData {
  previewUrl: string;
}

@Component({
  selector: 'app-aviso-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, DialogLayoutComponent],
  template: `
    <app-dialog-layout title="Novo Banner / Aviso">
      <div
        dialog-icon
        class="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100"
      >
        <mat-icon class="!w-6 !h-6 text-[24px]">add_photo_alternate</mat-icon>
      </div>

      <form [formGroup]="form" class="space-y-4">
        <div
          class="aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-4 shadow-inner relative"
        >
          <img [src]="data.previewUrl" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <span class="absolute bottom-3 left-4 text-white text-xs font-medium">Prévia</span>
        </div>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Data do Evento</mat-label>
          <input matInput type="date" formControlName="data_evento" />
          <mat-icon matSuffix class="text-slate-400">calendar_today</mat-icon>
          @if (form.controls.data_evento.hasError('required')) {
            <mat-error>A data do evento é obrigatória.</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Descrição / Título curto (Opcional)</mat-label>
          <textarea
            matInput
            formControlName="descricao"
            rows="3"
            placeholder="Ex: Culto especial de celebração, reunião geral, etc."
            maxlength="150"
          ></textarea>
          <mat-hint align="end">{{ form.controls.descricao.value.length }}/150</mat-hint>
        </mat-form-field>
      </form>

      <ng-container dialog-actions>
        <button
          mat-dialog-close
          class="flex-1 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          Cancelar
        </button>
        <button
          (click)="confirmar()"
          [disabled]="form.invalid"
          class="flex-[1.5] py-3 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm disabled:opacity-50 disabled:bg-slate-300"
        >
          Confirmar e Enviar
        </button>
      </ng-container>
    </app-dialog-layout>
  `,
  styles: [
    `
      :host ::ng-deep .mat-mdc-form-field-subscript-wrapper {
        margin-bottom: 0px;
      }
    `,
  ],
})
export class AvisoFormDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AvisoFormDialogComponent>);

  public data: AvisoFormDialogData = inject(MAT_DIALOG_DATA);

  form = this.fb.nonNullable.group({
    data_evento: ['', Validators.required],
    descricao: [''],
  });

  confirmar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.dialogRef.close(this.form.getRawValue());
  }
}
