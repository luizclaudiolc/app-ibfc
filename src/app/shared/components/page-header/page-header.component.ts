import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
  titulo = input.required<string>();
  subtitulo = input<string>('');
  icone = input<string>('');
}
