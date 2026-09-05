import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { GenericDialogComponent } from '../../shared/components/modal-generico/modal-generico.component';
import { Membro } from '../../shared/models/membro.model';
import { MembroService } from './membro.service';
import { NotificationService } from './notifications.service';
import { WebPushService } from './web-push.service';

const FLAG_POS_LOGIN = 'ibfc_pos_login';

@Injectable({ providedIn: 'root' })
export class OnboardingService {
  private dialog = inject(MatDialog);
  private router = inject(Router);
  private webPush = inject(WebPushService);
  private membroService = inject(MembroService);
  private notification = inject(NotificationService);

  marcarPosLogin(): void {
    sessionStorage.setItem(FLAG_POS_LOGIN, '1');
  }

  async executarSeNecessario(): Promise<void> {
    if (sessionStorage.getItem(FLAG_POS_LOGIN) !== '1') return;
    sessionStorage.removeItem(FLAG_POS_LOGIN);

    await new Promise((r) => setTimeout(r, 600));
    await this.webPush.sincronizarEstado();

    if (this.webPush.suportado() && !this.webPush.ativado()) {
      const querAtivar = await this.confirmar(
        'Ative as notificações',
        'Receba avisos, escalas e pedidos de oração da igreja neste aparelho.',
        'Ativar agora',
        'Agora não',
      );

      if (querAtivar) {
        const res = await this.webPush.ativar();
        if (res.sucesso) {
          this.notification.sucesso('Notificações ativadas neste aparelho.');
        } else {
          this.notification.erro(res.mensagem || 'Não foi possível ativar as notificações.');
        }
      }
    }

    const perfil = await firstValueFrom(this.membroService.buscarMeuPerfil());
    if (this.perfilIncompleto(perfil)) {
      const querCompletar = await this.confirmar(
        'Complete seu cadastro',
        'Faltam alguns dados no seu perfil, como foto ou endereço. Um perfil completo ajuda os irmãos a te reconhecerem.',
        'Completar agora',
        'Agora não',
      );

      if (querCompletar) {
        await this.router.navigate(['/dashboard/perfil']);
      }
    }
  }

  private perfilIncompleto(perfil: Membro | null): boolean {
    if (!perfil) return false;
    const semFoto = !perfil.foto_url;
    const semEndereco = !perfil.endereco || perfil.endereco === '{}';
    const semEscolaridade = perfil.nivel_escolaridade == null;
    return semFoto || semEndereco || semEscolaridade;
  }

  private confirmar(
    titulo: string,
    mensagem: string,
    textoConfirmar: string,
    textoCancelar: string,
  ): Promise<boolean> {
    const ref = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo,
        mensagem,
        textoConfirmar,
        textoCancelar,
        tipo: 'padrao',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
      disableClose: true,
    });

    return firstValueFrom(ref.afterClosed()).then((valor) => !!valor);
  }
}
