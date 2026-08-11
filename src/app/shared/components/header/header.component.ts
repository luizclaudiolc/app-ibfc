import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { MaterialModule } from '../../../core/modules/material.module';
import { Router } from '@angular/router';
import { GENERO_MAP } from '../../models/consts';

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
  userGenero = this.authService.userGenero$;

  nomeExibicao = computed(() => {
    const nomeCompleto = this.nomeUsuario()?.trim() || '';
    if (!nomeCompleto) return 'Usuário';

    const partes = nomeCompleto.split(' ').filter((p) => p.length > 0);

    if (partes.length === 1) return partes[0];

    const primeiro = partes.at(0);
    const ultimo = partes.at(-1);

    return `${primeiro} ${ultimo}`;
  });

  saudacao = computed(() => {
    const generoId = this.userGenero();

    const generoText = generoId != null ? GENERO_MAP[generoId] : null;

    if (generoText === 'Masculino') return 'Bem-vindo';
    if (generoText === 'Feminino') return 'Bem-vinda';

    return 'Bem-vindo(a)';
  });

  irParaperfil(): void {
    this.router.navigate(['dashboard/perfil']);
  }
}
