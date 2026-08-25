import { inject, Injectable, NgZone } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UpdateService {
  private swUpdate = inject(SwUpdate);
  private ngZone = inject(NgZone);

  iniciarObservadorDeAtualizacoes(): void {
    if (!this.swUpdate.isEnabled) return;

    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(() => {
        window.location.reload();
      });

    this.verificarAtualizacao();

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.verificarAtualizacao();
      }
    });

    window.addEventListener('focus', () => {
      this.verificarAtualizacao();
    });
  }

  private verificarAtualizacao(): void {
    this.ngZone.run(() => {
      this.swUpdate
        .checkForUpdate()
        .then((temAtualizacao) => {
          if (temAtualizacao) {
            console.log('Nova versão encontrada! Baixando...');
          }
        })
        .catch((err) => console.error('Erro ao checar atualização:', err));
    });
  }
}
