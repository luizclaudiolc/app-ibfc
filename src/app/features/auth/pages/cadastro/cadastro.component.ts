import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { MaterialModule } from '../../../../core/modules/material.module';
import { timer } from 'rxjs';
import { UsuarioCadastro } from '../../../../shared/models/membro.model';
import { CARGOS_DISPONIVEIS } from '../../../../shared/models/consts';
import { NotificationService } from '../../../../core/services/notifications.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  carregando = signal<boolean>(false);
  esconderSenha = signal(true);
  esconderConfirmarSenha = signal(true);

  previewFoto = signal<string>('');
  arquivoFotoSelecionado: File | null = null;

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private notification = inject(NotificationService);

  cargosDisponiveis = CARGOS_DISPONIVEIS;

  cadastroForm = this.fb.nonNullable.group(
    {
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      cargo: ['membro', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
    },
    { validators: this.validarSenhasIguais },
  );

  validarSenhasIguais(control: AbstractControl): ValidationErrors | null {
    const senha = control.get('senha')?.value;
    const confirmarSenha = control.get('confirmarSenha')?.value;
    const confirmarCtrl = control.get('confirmarSenha');

    if (senha !== confirmarSenha && confirmarCtrl) {
      confirmarCtrl.setErrors({ ...confirmarCtrl.errors, senhasDiferentes: true });
      return { senhasDiferentes: true };
    }

    if (senha === confirmarSenha && confirmarCtrl?.hasError('senhasDiferentes')) {
      const erros = { ...confirmarCtrl.errors };
      delete erros['senhasDiferentes'];
      confirmarCtrl.setErrors(Object.keys(erros).length > 0 ? erros : null);
    }

    return null;
  }

  aoSelecionarFoto(event: any): void {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    if (arquivo.size > 2 * 1024 * 1024) {
      this.notification.aviso('A imagem selecionada deve ter no máximo 2MB.');
      return;
    }

    this.arquivoFotoSelecionado = arquivo;
    const reader = new FileReader();
    reader.onload = () => {
      this.previewFoto.set(reader.result as string);
    };
    reader.readAsDataURL(arquivo);
  }

  submeterCadastro(): void {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      this.notification.aviso('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    this.carregando.set(true);
    this.cadastroForm.disable();

    const formValues = this.cadastroForm.getRawValue();

    const dadosEnvio: UsuarioCadastro = {
      nome: formValues.nome.trim(),
      sobrenome: formValues.sobrenome.trim(),
      email: formValues.email.trim().toLowerCase(),
      senha: formValues.senha,
      telefone: formValues.telefone.replace(/\D/g, ''),
      dataNascimento: formValues.dataNascimento,
      cargo: formValues.cargo,
      foto: this.arquivoFotoSelecionado,
    };

    this.authService.cadastrar(dadosEnvio).subscribe({
      next: (res) => {
        if (res.sucesso) {
          this.notification.sucesso(
            'Cadastro realizado com sucesso! Redirecionando para o login...',
          );
          timer(2500).subscribe(() => {
            this.router.navigate(['/login']);
          });
        } else {
          this.notification.erro(res.mensagem || 'Erro ao realizar cadastro.');
          this.carregando.set(false);
          this.cadastroForm.enable();
        }
      },
      error: (err) => {
        console.error('Erro de cadastro:', err);
        this.notification.erro('Erro ao processar o cadastro. Tente novamente mais tarde.');
        this.carregando.set(false);
        this.cadastroForm.enable();
      },
    });
  }
}
