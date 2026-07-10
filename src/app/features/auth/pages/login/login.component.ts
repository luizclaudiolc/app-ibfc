import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { MaterialModule } from '../../../../core/modules/material.module';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  carregando = signal(false);
  mensagemErro = signal('');
  esconderSenha = signal(true);

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

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
      next: (resposta) => {
        if (resposta.sucesso) {
          this.router.navigateByUrl('/dashboard/home');
        } else {
          this.mensagemErro.set(resposta.mensagem || 'Falha na autenticação.');
        }
        this.carregando.set(false);
      },
      error: () => {
        this.mensagemErro.set('Ocorreu um erro no servidor. Tente novamente.');
        this.carregando.set(false);
      },
    });
  }
}
