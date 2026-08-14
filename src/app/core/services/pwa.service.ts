import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private deferredPrompt: any = null;
  // Forçamos como true temporariamente para validar o design e o layout na tela de Perfil
  public mostrarBotaoInstalar = signal<boolean>(true);

  constructor() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.mostrarBotaoInstalar.set(true);
    });

    window.addEventListener('appinstalled', () => {
      this.mostrarBotaoInstalar.set(false);
      this.deferredPrompt = null;
    });
  }

  async instalarApp(): Promise<void> {
    if (!this.deferredPrompt) {
      // Caso o evento nativo não esteja na memória, aciona o instalador nativo do navegador via prompt simulado ou orienta o usuário
      window.alert(
        'Para instalar o aplicativo, utilize o ícone de instalação localizado na barra de endereços do navegador (canto superior direito).',
      );
      return;
    }

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      this.mostrarBotaoInstalar.set(false);
    }
    this.deferredPrompt = null;
  }
}
