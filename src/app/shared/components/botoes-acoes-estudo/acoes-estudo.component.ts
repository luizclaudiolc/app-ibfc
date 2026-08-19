import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-acoes-estudo',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './acoes-estudo.component.html',
})
export class AcoesEstudoComponent {
  isLinkExterno = input<boolean>(false);
  podeApagar = input<boolean>(false);
  exibirBaixar = input<boolean>(true);

  aoAbrir = output<void>();
  aoBaixar = output<void>();
  aoExcluir = output<void>();
}
