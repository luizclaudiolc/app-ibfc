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
  nomeDepartamento = input.required<string>();

  solicitarSubstituicao = output<Escala>();

  jaPediuSubstituicao(): boolean {
    const pedidos = this.escala().pedidos_substituicao || '';
    return pedidos.toLowerCase().includes(this.nomeUsuario().toLowerCase());
  }

  permiteSubstituicao(): boolean {
    const dataEscalaStr = this.escala().data_escala;
    if (!dataEscalaStr) return false;

    const partes = dataEscalaStr.split('-');
    const ano = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const dia = parseInt(partes[2], 10);

    const dataEvento = new Date(ano, mes, dia);
    dataEvento.setHours(0, 0, 0, 0);

    const agora = new Date();

    const diferencaMs = dataEvento.getTime() - agora.getTime();
    const limite24h = 24 * 60 * 60 * 1000;

    return diferencaMs >= limite24h;
  }
}
