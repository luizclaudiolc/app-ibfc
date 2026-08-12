import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../../core/modules/material.module';
import { DialogLayoutComponent } from '../../../../../../shared/components/layout-modal/dialog-layout.component';

export interface EstudoFormDialogData {
  fileName: string;
  fileSize: string;
}

@Component({
  selector: 'app-estudo-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, DialogLayoutComponent],
  templateUrl: './estudo-form-dialog.component.html',
})
export class EstudoFormDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<EstudoFormDialogComponent>);

  public data: EstudoFormDialogData = inject(MAT_DIALOG_DATA);

  form = this.fb.nonNullable.group({
    titulo: ['', Validators.required],
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
