import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PwaService {
  private promptEvent: any;

  mostrarBotaoInstalar = signal<boolean>(false);
  mostrarInstrucoesIos = signal<boolean>(false);

  constructor() {
    this.iniciarLógicaPwa();
  }

  private iniciarLógicaPwa() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.promptEvent = e;
      this.mostrarBotaoInstalar.set(true);
    });

    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    const instrucoesDispensadas = localStorage.getItem('ios_pwa_dismissed') === 'true';

    if (isIos && !isStandalone && !instrucoesDispensadas) {
      this.mostrarInstrucoesIos.set(true);
    }
  }

  instalarApp() {
    if (this.promptEvent) {
      this.promptEvent.prompt();
      this.promptEvent.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          this.mostrarBotaoInstalar.set(false);
        }
        this.promptEvent = null;
      });
    }
  }

  dispensarInstrucoesIos() {
    localStorage.setItem('ios_pwa_dismissed', 'true');
    this.mostrarInstrucoesIos.set(false);
  }
}
