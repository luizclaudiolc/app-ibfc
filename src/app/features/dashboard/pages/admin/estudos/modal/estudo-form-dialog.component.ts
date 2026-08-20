import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../../core/modules/material.module';
import { DialogLayoutComponent } from '../../../../../../shared/components/layout-modal/dialog-layout.component';
import { Component, inject, OnInit } from '@angular/core';

export interface EstudoFormDialogData {
  modo: 'PDF' | 'LINK' | 'EDITAR';
  fileName?: string;
  fileSize?: string;
  tituloAtual?: string;
  descricaoAtual?: string;
}

@Component({
  selector: 'app-estudo-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, DialogLayoutComponent],
  templateUrl: './estudo-form-dialog.component.html',
})
export class EstudoFormDialogComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<EstudoFormDialogComponent>);
  public data: EstudoFormDialogData = inject(MAT_DIALOG_DATA);

  form = this.fb.nonNullable.group({
    titulo: ['', Validators.required],
    descricao: [''],
    url: [''],
  });

  ngOnInit() {
    if (this.data.modo === 'LINK') {
      this.form.controls.url.setValidators([
        Validators.required,
        Validators.pattern(/^https?:\/\/.+/),
      ]);
      this.form.controls.url.updateValueAndValidity();
    }

    if (this.data.modo === 'EDITAR') {
      this.form.patchValue({
        titulo: this.data.tituloAtual || '',
        descricao: this.data.descricaoAtual || '',
      });
    }
  }

  private converterParaDirectDownloadUrl(urlOriginal: string): string {
    const regexDriveView =
      /https:\/\/(?:drive|docs)\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/?(?:\?.+)?/;
    const match = urlOriginal.match(regexDriveView);

    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/uc?id=${fileId}&export=download`;
    }

    return urlOriginal;
  }

  confirmar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValues = this.form.getRawValue();

    if (this.data.modo === 'LINK' && formValues.url) {
      const urlFinal = this.converterParaDirectDownloadUrl(formValues.url);
      this.form.patchValue({ url: urlFinal });
    }

    this.dialogRef.close(this.form.getRawValue());
  }
}
