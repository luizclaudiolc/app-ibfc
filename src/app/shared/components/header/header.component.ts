import { Component, inject, input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { MaterialModule } from '../../../core/modules/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  nomeUsuario = input<string>('Irmão(ã)');
  fotoUsuario = input<string | null>(null);

  private authService = inject(AuthService);
  private router = inject(Router);

  efetuarLogout(): void {
    if (confirm('Deseja realmente sair do aplicativo?')) {
      this.authService.logout();
    }
  }

  irParaperfil(): void {
    this.router.navigate(['dashboard/perfil']);
  }
}
