import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { MaterialModule } from '../../../../../core/modules/material.module';
import { CepService, EnderecoViaCep } from '../../../../../core/services/busca-cep.service';
import { MembroService } from '../../../../../core/services/membro.service';
import { NotificationService } from '../../../../../core/services/notifications.service';
import { DialogLayoutComponent } from '../../../../../shared/components/layout-modal/dialog-layout.component';
import { GenericDialogComponent } from '../../../../../shared/components/modal-generico/modal-generico.component';
import {
  CARGOS_DISPONIVEIS,
  DEPARTAMENTOS_DISPONIVEIS,
  ESCOLARIDADE_MAP,
  ESTADO_CIVIL_MAP,
  GENERO_MAP,
  NivelAcesso,
  StatusMembro,
} from '../../../../../shared/models/consts';

@Component({
  selector: 'app-editar-membro-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MaterialModule,
    DialogLayoutComponent,
  ],
  templateUrl: './editar-membro-dialog.component.html',
})
export class EditarMembroDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<EditarMembroDialogComponent>);
  private membroService = inject(MembroService);
  private dialog = inject(MatDialog);
  private cepService = inject(CepService);
  private notification = inject(NotificationService);

  public data = inject(MAT_DIALOG_DATA);

  carregando = signal(false);
  buscandoCep = signal(false);
  fotoParaRemover = signal(false);

  cargosDisponiveis = CARGOS_DISPONIVEIS;
  departamentos = DEPARTAMENTOS_DISPONIVEIS;

  meuNivel = localStorage.getItem('user_nivel') as NivelAcesso;

  niveisAcesso = [
    { label: 'Administrador (Padrão)', value: 'ADMIN' satisfies NivelAcesso },
    { label: 'Básico', value: 'USER' satisfies NivelAcesso },
  ];

  statusOpcoes = [
    { label: 'Ativo', value: 'ATIVO' satisfies StatusMembro },
    { label: 'Inativo / Bloqueado', value: 'INATIVO' satisfies StatusMembro },
  ];

  opcoesGenero = Object.entries(GENERO_MAP).map(([value, label]) => ({ value: +value, label }));
  opcoesEstadoCivil = Object.entries(ESTADO_CIVIL_MAP).map(([value, label]) => ({
    value: +value,
    label,
  }));
  opcoesEscolaridade = Object.entries(ESCOLARIDADE_MAP).map(([value, label]) => ({
    value: +value,
    label,
  }));

  objEnderecoInicial: any = {};

  editForm: any;

  constructor() {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    if (this.meuNivel === 'ADMIN' && this.data.nivel_acesso === 'SUPER_ADMIN') {
      this.notification.erro('Sem permissão: Você não pode editar um Super Administrador.');
      this.dialogRef.close();
      return;
    }

    if (this.meuNivel === 'SUPER_ADMIN') {
      this.niveisAcesso.unshift({
        label: 'Super Admin (Intocável)',
        value: 'SUPER_ADMIN' satisfies NivelAcesso,
      });
    }

    if (this.data.endereco) {
      try {
        this.objEnderecoInicial = JSON.parse(this.data.endereco);
      } catch (e) {
        this.objEnderecoInicial = { logradouro: this.data.endereco };
      }
    }

    this.editForm = this.fb.nonNullable.group({
      email: [{ value: this.data.email, disabled: true }],
      nome: [this.data.nome, [Validators.required]],
      sobrenome: [this.data.sobrenome, [Validators.required]],
      telefone: [this.data.telefone, [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      data_nascimento: [this.data.data_nascimento, [Validators.required]],
      cargo: [this.data.cargo, [Validators.required]],
      setor_responsavel: [this.data.setor_responsavel || ''],
      nivel_acesso: [this.data.nivel_acesso, [Validators.required]],
      status: [this.data.status, [Validators.required]],

      genero: [
        this.data.genero !== undefined && this.data.genero !== null ? +this.data.genero : null,
      ],
      estado_civil: [
        this.data.estado_civil !== undefined && this.data.estado_civil !== null
          ? +this.data.estado_civil
          : null,
      ],
      nivel_escolaridade: [
        this.data.nivel_escolaridade !== undefined && this.data.nivel_escolaridade !== null
          ? +this.data.nivel_escolaridade
          : null,
      ],

      cep: [this.objEnderecoInicial.cep || ''],
      logradouro: [this.objEnderecoInicial.logradouro || ''],
      numero: [this.objEnderecoInicial.numero || ''],
      complemento: [this.objEnderecoInicial.complemento || ''],
      bairro: [this.objEnderecoInicial.bairro || ''],
      cidade: [this.objEnderecoInicial.cidade || ''],
      uf: [this.objEnderecoInicial.uf || ''],
    });
  }

  consultarCep() {
    const cep = this.editForm.get('cep')?.value?.replace(/\D/g, '');

    if (cep && cep.length === 8) {
      this.buscandoCep.set(true);

      this.cepService.buscarCep(cep).subscribe({
        next: (dados: EnderecoViaCep | null) => {
          this.buscandoCep.set(false);
          if (dados && !dados.erro) {
            this.editForm.patchValue({
              logradouro: dados.logradouro,
              bairro: dados.bairro,
              cidade: dados.localidade,
              uf: dados.uf,
            });
            document.getElementById('numero_endereco_admin')?.focus();
          } else {
            this.notification.aviso('CEP não encontrado.');
          }
        },
        error: () => {
          this.buscandoCep.set(false);
          this.notification.erro('Erro ao consultar o CEP.');
        },
      });
    }
  }

  marcarFotoParaRemocao(): void {
    this.fotoParaRemover.set(true);
  }

  desfazerRemocaoFoto(): void {
    this.fotoParaRemover.set(false);
  }

  salvar(): void {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    this.carregando.set(true);
    this.editForm.disable();

    const formValues = this.editForm.getRawValue();

    const objEndereco = {
      cep: formValues.cep,
      logradouro: formValues.logradouro,
      numero: formValues.numero,
      complemento: formValues.complemento,
      bairro: formValues.bairro,
      cidade: formValues.cidade,
      uf: formValues.uf,
    };
    const enderecoString =
      formValues.logradouro || formValues.cep ? JSON.stringify(objEndereco) : null;

    const dadosAtualizados = {
      ...this.data,
      nome: formValues.nome.trim(),
      sobrenome: formValues.sobrenome.trim(),
      telefone: formValues.telefone.replace(/\D/g, ''),
      data_nascimento: formValues.data_nascimento,
      cargo: formValues.cargo,
      setor_responsavel: formValues.setor_responsavel || null,
      nivel_acesso: formValues.nivel_acesso,
      status: formValues.status,

      genero: formValues.genero !== null ? +formValues.genero : null,
      estado_civil: formValues.estado_civil !== null ? +formValues.estado_civil : null,
      nivel_escolaridade:
        formValues.nivel_escolaridade !== null ? +formValues.nivel_escolaridade : null,
      endereco: enderecoString,

      remover_foto: this.fotoParaRemover(),
    };

    this.membroService.atualizarMembroAdmin(dadosAtualizados).subscribe({
      next: () => {
        if (dadosAtualizados.remover_foto) {
          dadosAtualizados.foto_url = null;
        }

        this.dialogRef.close({ sucesso: true, dadosAtualizados });
        this.notification.sucesso('Membro atualizado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao atualizar membro:', err);
        this.carregando.set(false);
        this.editForm.enable();

        this.dialog.open(GenericDialogComponent, {
          data: {
            titulo: 'Falha na Atualização',
            mensagem: 'Não foi possível atualizar os dados deste membro. Tente novamente.',
            textoConfirmar: 'Entendi',
            tipo: 'perigo',
            ocultarCancelar: true,
          },
          panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
          width: '90%',
          maxWidth: '400px',
        });
      },
    });
  }
}
