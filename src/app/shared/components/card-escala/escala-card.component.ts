import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Escala } from '../../models/escala.model';
import { MaterialModule } from '../../../core/modules/material.module';

@Component({
  selector: 'app-escala-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './escala-card.component.html',
})
export class EscalaCardComponent {
  escala = input.required<Escala>();
  nomeEvento = input.required<string>();
  nomeUsuario = input.required<string>();

  solicitarSubstituicao = output<Escala>();

  jaPediuSubstituicao(): boolean {
    const pedidos = this.escala().pedidos_substituicao || '';
    return pedidos.toLowerCase().includes(this.nomeUsuario().toLowerCase());
  }
}
