import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../core/modules/material.module';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notifications.service';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  templateUrl: './recuperar-senha.component.html',
})
export class RecuperarSenhaComponent {
  carregando = signal(false);

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private notification = inject(NotificationService);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  enviarLink() {
    if (this.form.invalid) return;

    this.carregando.set(true);
    const { email } = this.form.getRawValue();

    this.authService.recuperarSenha(email.trim()).subscribe({
      next: (res) => {
        this.carregando.set(false);
        if (res.sucesso) {
          this.notification.sucesso(res.mensagem);
          this.form.reset();
        } else {
          this.notification.erro(res.mensagem);
        }
      },
      error: () => {
        this.carregando.set(false);
        this.notification.erro('Ocorreu um erro inesperado.');
      },
    });
  }
}
