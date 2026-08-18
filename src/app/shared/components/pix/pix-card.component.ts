import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';
import { NotificationService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-pix-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './pix-card.component.html',
})
export class PixCardComponent {
  private notification = inject(NotificationService);

  copiado = signal<boolean>(false);

  async copiarChavePix(chave: string) {
    try {
      await navigator.clipboard.writeText(chave);
      this.copiado.set(true);
      this.notification.sucesso('Chave PIX copiada com sucesso!');

      setTimeout(() => {
        this.copiado.set(false);
      }, 3000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      this.notification.erro('Não foi possível copiar a chave. Tente selecionar manualmente.');
    }
  }
}
