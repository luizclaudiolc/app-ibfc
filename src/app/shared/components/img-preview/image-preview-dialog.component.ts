import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-image-preview-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="relative bg-slate-900/95 flex items-center justify-center p-4 h-full min-h-[50vh]">
      <button
        mat-dialog-close
        class="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
      >
        <mat-icon>close</mat-icon>
      </button>

      <img
        [src]="data.url"
        [alt]="data.nome"
        class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
      />
    </div>
  `,
})
export class ImagePreviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string; nome: string }) {}
}
