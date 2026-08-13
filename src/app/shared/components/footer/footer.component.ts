import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ENiveisAcesso } from '../../models/consts';
import { MaterialModule } from '../../../core/modules/material.module';
import { AuthService } from '../../../core/services/auth.service';
import { GenericDialogComponent } from '../modal-generico/modal-generico.component';

interface FooterItem {
  label: string;
  icon: string;
  route: string;
  exact?: boolean;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MaterialModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);

  visibleItems = signal<FooterItem[]>([]);
  overflowItems = signal<FooterItem[]>([]);

  menuAberto = signal<boolean>(false);

  ngOnInit(): void {
    const { nivel, setor } = this.authService.obterUsuarioLogado();

    const isAdmin = nivel === ENiveisAcesso.Admin || nivel === ENiveisAcesso.SuperAdmin;

    const isLider = setor && setor !== 'null' && setor !== 'undefined' && setor !== 'membro';
    const isLiderMidia = isLider && setor === 'midia';

    const podeAcessarEscalas = isAdmin || !!isLider;
    const podeAcessarAvisos = isAdmin || !!isLiderMidia;

    const allItems: FooterItem[] = [
      { label: 'Início', icon: 'home', route: '/dashboard/home', exact: true },
      { label: 'Estudos', icon: 'menu_book', route: '/dashboard/estudos' },
      { label: 'Orações', icon: 'volunteer_activism', route: '/dashboard/mural-oracoes' },
    ];

    if (podeAcessarEscalas) {
      allItems.push({ label: 'Escalas', icon: 'calendar_month', route: '/dashboard/escala' });
    }

    if (podeAcessarAvisos) {
      allItems.push({ label: 'Avisos', icon: 'campaign', route: '/dashboard/avisos' });
    }

    allItems.push({ label: 'Perfil', icon: 'person', route: '/dashboard/perfil' });

    if (isAdmin) {
      allItems.push({
        label: 'Estatísticas',
        icon: 'analytics',
        route: '/dashboard/analytics',
      });
      allItems.push({
        label: 'Membros',
        icon: 'manage_accounts',
        route: '/dashboard/admin',
      });
      allItems.push({
        label: 'Ger. Estudos',
        icon: 'library_books',
        route: '/dashboard/admin/estudos',
      });
    }

    this.visibleItems.set(allItems.slice(0, 3));
    this.overflowItems.set(allItems.slice(3));
  }

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
}
