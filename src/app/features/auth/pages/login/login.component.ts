import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { MaterialModule } from '../../../../core/modules/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  // 1. Trocamos FormsModule por ReactiveFormsModule
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  carregando = signal(false);
  mensagemErro = signal('');

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  // 2. Criação do formulário reativo tipado
  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });

  submeterLogin(): void {
    // 3. Validação de segurança: se o form for inválido, marca tudo para exibir os erros e para a função
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.carregando.set(true);

    // 4. Extrai os valores direto do form com segurança de tipo
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
