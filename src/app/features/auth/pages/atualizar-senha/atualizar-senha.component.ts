import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../../core/modules/material.module';
import { SupabaseService } from '../../../../core/services/supabase';
import { NotificationService } from '../../../../core/services/notifications.service';

@Component({
  selector: 'app-atualizar-senha',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './atualizar-senha.component.html',
})
export class AtualizarSenhaComponent {
  carregando = signal(false);
  esconderSenha = signal(true);

  private fb = inject(FormBuilder);
  private supabaseService = inject(SupabaseService);
  private notification = inject(NotificationService);
  private router = inject(Router);

  form = this.fb.nonNullable.group({
    novaSenha: ['', [Validators.required, Validators.minLength(6)]],
  });

  async salvarNovaSenha() {
    if (this.form.invalid) return;

    this.carregando.set(true);
    const { novaSenha } = this.form.getRawValue();

    try {
      const { error } = await this.supabaseService.supabase.auth.updateUser({
        password: novaSenha,
      });

      if (error) throw error;

      this.notification.sucesso('Senha alterada com sucesso! Faça login com a nova senha.');
      await this.supabaseService.supabase.auth.signOut();
      this.router.navigate(['/login']);
    } catch (err: any) {
      console.error(err);
      this.notification.erro(err.message || 'Erro ao atualizar a senha.');
      this.carregando.set(false);
    }
  }
}
