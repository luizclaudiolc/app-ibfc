import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { MaterialModule } from '../../../core/modules/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  nomeUsuario = this.authService.nomeUsuario$;
  fotoUsuario = this.authService.fotoUsuario$;

  irParaperfil(): void {
    this.router.navigate(['dashboard/perfil']);
  }
}
