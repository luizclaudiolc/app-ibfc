import { Component, Inject, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../../../core/modules/material.module';
import { DialogLayoutComponent } from '../layout-modal/dialog-layout.component';

@Component({
  selector: 'app-editar-pedido-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MaterialModule,
    DialogLayoutComponent,
  ],
  template: `
    <app-dialog-layout title="Editar Motivo de Oração">
      <div
        dialog-icon
        class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center"
      >
        <mat-icon class="!w-5 !h-5 !text-[20px]">edit</mat-icon>
      </div>

      <span dialog-subtitle>Atualize as informações do seu pedido</span>

      <form [formGroup]="form" class="space-y-4">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Motivo / Descrição</mat-label>
          <textarea
            matInput
            formControlName="descricao"
            rows="4"
            maxlength="160"
            placeholder="Escreva seu pedido..."
          ></textarea>
          <mat-hint align="end">{{ form.controls.descricao.value.length || 0 }}/160</mat-hint>
        </mat-form-field>
      </form>

      <div dialog-actions class="w-full flex justify-end gap-2">
        <button
          mat-button
          mat-dialog-close
          type="button"
          class="!rounded-xl !px-4 !py-2 !text-xs !font-bold text-slate-500 hover:bg-slate-100"
        >
          Cancelar
        </button>

        <button
          mat-flat-button
          type="button"
          (click)="salvar()"
          [disabled]="form.invalid || salvando()"
          class="!rounded-xl !h-10 !bg-sky-600 hover:!bg-sky-700 !text-white !font-bold !text-xs !px-5"
        >
          @if (salvando()) {
            <mat-spinner diameter="16" class="!inline-block !mr-2"></mat-spinner>
          }
          Salvar Alterações
        </button>
      </div>
    </app-dialog-layout>
  `,
})
export class EditarPedidoDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<EditarPedidoDialogComponent>);
  public data = inject(MAT_DIALOG_DATA);

  salvando = signal<boolean>(false);

  form = this.fb.nonNullable.group({
    descricao: [this.data.descricao || '', [Validators.required, Validators.maxLength(160)]],
  });

  salvar(): void {
    if (this.form.invalid) return;
    const novoTexto = this.form.getRawValue().descricao.trim();
    this.dialogRef.close(novoTexto);
  }
}
