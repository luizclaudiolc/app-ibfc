import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { MaterialModule } from '../../../core/modules/material.module';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../../modal-generico/modal-generico.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  nomeUsuario = this.authService.nomeUsuario$;
  fotoUsuario = this.authService.fotoUsuario$;

  efetuarLogout(): void {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Sair do Aplicativo',
        mensagem: 'Deseja realmente encerrar sua sessão atual?',
        textoConfirmar: 'Sim, sair',
        textoCancelar: 'Cancelar',
        tipo: 'padrao',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.authService.logout();
      }
    });
  }

  irParaperfil(): void {
    this.router.navigate(['dashboard/perfil']);
  }
}
