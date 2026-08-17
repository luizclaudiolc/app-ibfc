import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { timer } from 'rxjs';
import { MaterialModule } from '../../../../core/modules/material.module';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notifications.service';
import {
  CARGOS_DISPONIVEIS,
  ESCOLARIDADE_MAP,
  ESTADO_CIVIL_MAP,
  GENERO_MAP,
  MINISTERIOS_DISPONIVEIS,
} from '../../../../shared/models/consts';
import { UsuarioCadastro } from '../../../../shared/models/membro.model';
import { CepService } from '../../../../core/services/busca-cep.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  carregando = signal<boolean>(false);
  buscandoCep = signal<boolean>(false);
  esconderSenha = signal(true);
  esconderConfirmarSenha = signal(true);

  etapaAtual = signal<number>(1);
  totalEtapas = 3;

  previewFoto = signal<string>('');
  arquivoFotoSelecionado: File | null = null;

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private notification = inject(NotificationService);
  private buscacepService = inject(CepService);

  cargosDisponiveis = CARGOS_DISPONIVEIS;
  ministeriosDisponiveis = MINISTERIOS_DISPONIVEIS;

  opcoesGenero = Object.entries(GENERO_MAP).map(([value, label]) => ({ value: +value, label }));
  opcoesEstadoCivil = Object.entries(ESTADO_CIVIL_MAP).map(([value, label]) => ({
    value: +value,
    label,
  }));
  opcoesEscolaridade = Object.entries(ESCOLARIDADE_MAP).map(([value, label]) => ({
    value: +value,
    label,
  }));

  cadastroForm = this.fb.nonNullable.group(
    {
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      cargo: ['membro', [Validators.required]],
      ministerios: [[] as string[]],
      dataNascimento: ['', [Validators.required]],

      genero: [null as number | null, [Validators.required]],
      estadoCivil: [null as number | null, [Validators.required]],
      escolaridade: [null as number | null],

      cep: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      uf: [''],

      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
    },
    { validators: this.validarSenhasIguais },
  );

  private camposPorEtapa: Record<number, string[]> = {
    1: ['nome', 'sobrenome', 'dataNascimento', 'genero'],
    2: [
      'email',
      'telefone',
      'estadoCivil',
      'escolaridade',
      'cep',
      'logradouro',
      'numero',
      'cidade',
      'uf',
    ],
    3: ['cargo', 'ministerios', 'senha', 'confirmarSenha'],
  };

  consultarCep() {
    const cep = this.cadastroForm.get('cep')?.value?.replace(/\D/g, '');

    if (cep && cep.length === 8) {
      this.buscandoCep.set(true);

      this.buscacepService.buscarCep(cep).subscribe({
        next: (dados) => {
          this.buscandoCep.set(false);

          if (dados && !dados.erro) {
            this.cadastroForm.patchValue({
              logradouro: dados.logradouro,
              bairro: dados.bairro,
              cidade: dados.localidade,
              uf: dados.uf,
            });

            document.getElementById('numero_endereco')?.focus();
          } else {
            this.notification.aviso('CEP não encontrado. Verifique o número digitado.');
          }
        },
        error: () => {
          this.buscandoCep.set(false);
          this.notification.erro('Erro ao consultar o CEP. Preencha manualmente.');
        },
      });
    }
  }

  avancarEtapa(): void {
    const camposDaEtapa = this.camposPorEtapa[this.etapaAtual()];
    let etapaValida = true;

    camposDaEtapa.forEach((campo) => {
      const controle = this.cadastroForm.get(campo);
      if (controle?.invalid) {
        controle.markAsTouched();
        etapaValida = false;
      }
    });

    if (etapaValida && this.etapaAtual() < this.totalEtapas) {
      this.etapaAtual.update((e) => e + 1);
    } else if (!etapaValida) {
      this.notification.aviso('Preencha os campos obrigatórios desta etapa para continuar.');
    }
  }

  voltarEtapa(): void {
    if (this.etapaAtual() > 1) {
      this.etapaAtual.update((e) => e - 1);
    }
  }

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
      this.notification.aviso('Por favor, revise os campos obrigatórios.');
      return;
    }

    this.carregando.set(true);
    this.cadastroForm.disable();

    const formValues = this.cadastroForm.getRawValue();

    const objetoEndereco = {
      cep: formValues.cep,
      logradouro: formValues.logradouro,
      numero: formValues.numero,
      complemento: formValues.complemento,
      bairro: formValues.bairro,
      cidade: formValues.cidade,
      uf: formValues.uf,
    };

    const enderecoString =
      formValues.logradouro || formValues.cep ? JSON.stringify(objetoEndereco) : undefined;

    const dadosEnvio: UsuarioCadastro = {
      nome: formValues.nome.trim(),
      sobrenome: formValues.sobrenome.trim(),
      email: formValues.email.trim().toLowerCase(),
      senha: formValues.senha,
      telefone: formValues.telefone.replace(/\D/g, ''),
      dataNascimento: formValues.dataNascimento,
      cargo: formValues.cargo,
      ministerios: formValues.ministerios,
      foto: this.arquivoFotoSelecionado,

      genero: formValues.genero ? +formValues.genero : undefined,
      estado_civil: formValues.estadoCivil ? +formValues.estadoCivil : undefined,
      nivel_escolaridade: formValues.escolaridade ? +formValues.escolaridade : undefined,

      endereco: enderecoString,
    };

    this.authService.cadastrar(dadosEnvio).subscribe({
      next: (res) => {
        if (res.sucesso) {
          this.notification.sucesso(
            'Cadastro realizado com sucesso! Redirecionando para o login...',
          );
          timer(2500).subscribe(() => this.router.navigate(['/login']));
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
