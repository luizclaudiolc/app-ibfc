import { Component, inject } from '@angular/core';
import { VersiculoCardComponent } from '../card-versiculo/card-versiculo.component';
import { VersiculoDia } from '../../../core/services/devocional.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-versiculo-dialog',
  standalone: true,
  imports: [VersiculoCardComponent],
  template: ` <app-versiculo-card [versiculo]="data" [rotulo]="'Palavra'" /> `,
})
export class ShareVersiculoDialogComponent {
  data = inject<VersiculoDia>(MAT_DIALOG_DATA);
}
