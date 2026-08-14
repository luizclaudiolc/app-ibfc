import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private deferredPrompt: any = null;
  // Começa falso e só fica true quando o navegador disparar o evento real de PWA
  public mostrarBotaoInstalar = signal<boolean>(false);

  constructor() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      // Impede o banner padrão do navegador
      e.preventDefault();
      // Salva o evento real capturado pelo ambiente de produção (GitHub Pages)
      this.deferredPrompt = e;
      // Exibe o nosso botão customizado na tela de perfil
      this.mostrarBotaoInstalar.set(true);
    });

    window.addEventListener('appinstalled', () => {
      this.mostrarBotaoInstalar.set(false);
      this.deferredPrompt = null;
    });
  }

  async instalarApp(): Promise<void> {
    if (!this.deferredPrompt) return;

    // Dispara o prompt nativo de instalação do celular/computador sem cair em alertas
    this.deferredPrompt.prompt();

    const { outcome } = await this.deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      this.mostrarBotaoInstalar.set(false);
    }

    this.deferredPrompt = null;
  }
}
