import { Component, inject, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../core/modules/material.module';
import { NotificationService } from '../../../core/services/notifications.service';
import { AuthService } from '../../../core/services/auth.service';
import { PedidoOracao, PedidoOracaoService } from '../../../core/services/pedido-oracao.service';

@Component({
  selector: 'app-oracao-card',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './oracao-card.component.html',
})
export class OracaoCardComponent {
  pedido = input.required<PedidoOracao>();

  pedidoLocal = signal<PedidoOracao>({} as PedidoOracao);
  jaOrou = signal<boolean>(false);
  totalOracoes = signal<number>(0);
  carregando = signal<boolean>(false);

  private pedidoService = inject(PedidoOracaoService);
  private notification = inject(NotificationService);
  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      const atual = this.pedido();
      if (atual) {
        this.pedidoLocal.set(atual);
        this.calcularStatusOracao(atual);
      }
    });
  }

  private calcularStatusOracao(pedidoAtual: PedidoOracao): void {
    const meuId = this.authService.obterUsuarioLogado().id;
    const intercessores = pedidoAtual.intercessores || [];

    this.jaOrou.set(intercessores.includes(meuId));
    this.totalOracoes.set(intercessores.length);
  }

  async alternarOracao(): Promise<void> {
    if (this.carregando()) return;

    const estavaOrando = this.jaOrou();
    this.carregando.set(true);

    this.jaOrou.set(!estavaOrando);
    this.totalOracoes.update((t) => (estavaOrando ? Math.max(0, t - 1) : t + 1));

    try {
      await this.pedidoService.alternarIntercessao(this.pedidoLocal().id);
    } catch (error) {
      console.error('Erro ao alternar oração', error);

      this.jaOrou.set(estavaOrando);
      this.totalOracoes.update((t) => (estavaOrando ? t + 1 : Math.max(0, t - 1)));
      this.notification.erro('Erro de comunicação ao registrar sua oração.');
    } finally {
      this.carregando.set(false);
    }
  }
}
