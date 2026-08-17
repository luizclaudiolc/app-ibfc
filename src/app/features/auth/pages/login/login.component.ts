import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { MaterialModule } from '../../../../core/modules/material.module';
import { NotificationService } from '../../../../core/services/notifications.service';
import { GENERO_MAP } from '../../../../shared/models/consts';
import { PwaService } from '../../../../core/services/pwa.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  carregando = signal<boolean>(false);
  esconderSenha = signal(true);

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private notification = inject(NotificationService);
  public pwaService = inject(PwaService);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });

  submeterLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.carregando.set(true);
    const { email, senha } = this.loginForm.getRawValue();

    this.authService.login(email.trim(), senha).subscribe({
      next: (res) => {
        if (res.sucesso) {
          const generoId = this.authService.obterUsuarioLogado().genero;
          const generoText = generoId != null ? GENERO_MAP[generoId] : null;
          const saudacao =
            generoText === 'Masculino'
              ? 'Bem-vindo!'
              : generoText === 'Feminino'
                ? 'Bem-vinda!'
                : 'Bem-vindo(a)!';

          this.notification.sucesso(`Login realizado com sucesso! ${saudacao}`);
          this.router.navigate(['/dashboard/home']);
        } else {
          this.carregando.set(false);
          this.notification.erro(res.mensagem || 'E-mail ou senha inválidos.');
        }
      },
      error: (err) => {
        console.error('Erro de login:', err);
        this.carregando.set(false);
        this.notification.erro('Ocorreu um erro ao tentar entrar. Tente novamente.');
      },
    });
  }
}
