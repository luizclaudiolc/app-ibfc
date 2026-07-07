import { Component, input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  nomeUsuario = input<string>('Irmão(ã)');
  fotoUsuario = input<string | null>(null);

  constructor(private authService: AuthService) {}

  efetuarLogout(): void {
    if (confirm('Deseja realmente sair do aplicativo?')) {
      this.authService.logout();
    }
  }
}
