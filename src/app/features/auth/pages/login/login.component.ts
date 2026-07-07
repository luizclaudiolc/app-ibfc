import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = signal('');
  senha = signal('');
  carregando = signal(false);
  mensagemErro = signal('');

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  submeterLogin(): void {
    if (!this.email() || !this.senha()) return;

    this.carregando.set(true);

    this.authService.login(this.email().trim(), this.senha()).subscribe({
      next: (resposta) => {
        if (resposta.sucesso) {
          this.router.navigateByUrl('/dashboard/home');
        } else {
          this.mensagemErro.set(resposta.mensagem || 'Falha na autenticação.');
        }
        this.carregando.set(false);
      },
    });
  }
}
