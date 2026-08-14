import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import imageCompression from 'browser-image-compression';

import { MaterialModule } from '../../../../core/modules/material.module';
import { AuthService } from '../../../../core/services/auth.service';
import { MembroService } from '../../../../core/services/membro.service';
import { NotificationService } from '../../../../core/services/notifications.service';
import { GenericDialogComponent } from '../../../../shared/components/modal-generico/modal-generico.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import {
  CARGOS_DISPONIVEIS,
  GENERO_MAP,
  ESTADO_CIVIL_MAP,
  ESCOLARIDADE_MAP,
} from '../../../../shared/models/consts';
import { UsuarioAtualizacao } from '../../../../shared/models/membro.model';
import { CepService } from '../../../../core/services/busca-cep.service';
import { PwaService } from '../../../../core/services/pwa.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageLayoutComponent, MaterialModule],
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  private membroService = inject(MembroService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);
  private authService = inject(AuthService);
  private notification = inject(NotificationService);
  private cepService = inject(CepService);
  public pwaService = inject(PwaService);

  carregando = signal<boolean>(false);
  carregandoDados = signal<boolean>(true);
  buscandoCep = signal<boolean>(false);

  previewFoto = signal<string | null>(this.authService.fotoUsuario$());
  cargosDisponiveis = CARGOS_DISPONIVEIS;

  opcoesGenero = Object.entries(GENERO_MAP).map(([value, label]) => ({
    value: +value,
    label,
  }));
  opcoesEstadoCivil = Object.entries(ESTADO_CIVIL_MAP).map(([value, label]) => ({
    value: +value,
    label,
  }));
  opcoesEscolaridade = Object.entries(ESCOLARIDADE_MAP).map(([value, label]) => ({
    value: +value,
    label,
  }));

  perfilForm = this.fb.nonNullable.group({
    nome: ['', [Validators.required]],
    sobrenome: ['', [Validators.required]],
    email: [{ value: '', disabled: true }],
    telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
    cargo: ['membro', [Validators.required]],
    data_nascimento: ['', [Validators.required]],

    genero: [null as number | null, [Validators.required]],
    estado_civil: [null as number | null, [Validators.required]],
    nivel_escolaridade: [null as number | null],

    cep: [''],
    logradouro: [''],
    numero: [''],
    complemento: [''],
    bairro: [''],
    cidade: [''],
    uf: [''],

    pedido_oracao: [''],
  });

  ngOnInit(): void {
    this.carregarDadosPerfil();
  }

  carregarDadosPerfil() {
    this.carregandoDados.set(true);

    this.membroService.buscarMeuPerfil().subscribe({
      next: (res) => {
        if (res) {
          let objEndereco: any = {};
          if (res.endereco) {
            try {
              objEndereco = JSON.parse(res.endereco);
            } catch (error) {
              objEndereco = { logradouro: res.endereco };
            }
          }

          this.perfilForm.patchValue({
            nome: res.nome || '',
            sobrenome: res.sobrenome || '',
            email: res.email || '',
            telefone: res.telefone || '',
            cargo: res.cargo || 'membro',
            data_nascimento: res.data_nascimento || '',

            genero: res.genero !== undefined && res.genero !== null ? Number(res.genero) : null,
            estado_civil:
              res.estado_civil !== undefined && res.estado_civil !== null
                ? Number(res.estado_civil)
                : null,
            nivel_escolaridade:
              res.nivel_escolaridade !== undefined && res.nivel_escolaridade !== null
                ? Number(res.nivel_escolaridade)
                : null,

            cep: objEndereco.cep || '',
            logradouro: objEndereco.logradouro || '',
            numero: objEndereco.numero || '',
            complemento: objEndereco.complemento || '',
            bairro: objEndereco.bairro || '',
            cidade: objEndereco.cidade || '',
            uf: objEndereco.uf || '',

            pedido_oracao: res.pedido_oracao || '',
          });
        }
        this.carregandoDados.set(false);
      },
      error: () => {
        this.notification.erro('Erro ao carregar dados do perfil.');
        this.carregandoDados.set(false);
      },
    });
  }

  consultarCep() {
    const cep = this.perfilForm.get('cep')?.value;

    if (cep && cep.replace(/\D/g, '').length === 8) {
      this.buscandoCep.set(true);

      this.cepService.buscarCep(cep).subscribe({
        next: (dados) => {
          this.buscandoCep.set(false);

          if (dados && !dados.erro) {
            this.perfilForm.patchValue({
              logradouro: dados.logradouro,
              bairro: dados.bairro,
              cidade: dados.localidade,
              uf: dados.uf,
            });

            document.getElementById('numero_endereco_perfil')?.focus();
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

  salvarAlteracoes(): void {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      return;
    }

    this.carregando.set(true);
    this.perfilForm.disable();

    const formValues = this.perfilForm.getRawValue();

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
      formValues.logradouro || formValues.cep ? JSON.stringify(objEndereco) : undefined;

    const dadosEnvio: UsuarioAtualizacao = {
      nome: formValues.nome,
      sobrenome: formValues.sobrenome,
      telefone: formValues.telefone,
      cargo: formValues.cargo,
      data_nascimento: formValues.data_nascimento,
      genero: formValues.genero !== null ? Number(formValues.genero) : undefined,
      estado_civil: formValues.estado_civil !== null ? Number(formValues.estado_civil) : undefined,
      nivel_escolaridade:
        formValues.nivel_escolaridade !== null ? Number(formValues.nivel_escolaridade) : undefined,
      endereco: enderecoString,
      pedido_oracao: formValues.pedido_oracao,
    };

    this.membroService.atualizarPerfil(dadosEnvio).subscribe({
      next: (res) => {
        this.carregando.set(false);
        this.perfilForm.enable();
        this.perfilForm.controls.email.disable();

        if (res.sucesso) {
          this.notification.sucesso('Perfil atualizado com sucesso!');
          if (dadosEnvio.nome && dadosEnvio.sobrenome) {
            this.authService.atualizarNomeGlobal(`${dadosEnvio.nome} ${dadosEnvio.sobrenome}`);
          }

          if (dadosEnvio.genero !== undefined) {
            this.authService.atualizarGeneroGlobal(dadosEnvio.genero);
          }
        } else {
          this.notification.erro(res.mensagem || 'Erro ao salvar.');
        }
      },
      error: () => {
        this.carregando.set(false);
        this.perfilForm.enable();
        this.perfilForm.controls.email.disable();
        this.notification.erro('Erro inesperado ao salvar alterações.');
      },
    });
  }

  async aoSelecionarFoto(event: any): Promise<void> {
    const arquivoOriginal = event.target.files[0];
    if (!arquivoOriginal) return;

    this.carregando.set(true);

    try {
      const opcoes = {
        maxSizeMB: 0.15,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
        initialQuality: 0.8,
      };

      const arquivoComprimido = await imageCompression(arquivoOriginal, opcoes);

      this.membroService.atualizarFotoPerfil(arquivoComprimido).subscribe({
        next: (res) => {
          this.carregando.set(false);
          if (res.sucesso && res.fotoUrl) {
            this.previewFoto.set(res.fotoUrl);
            this.authService.atualizarFotoGlobal(res.fotoUrl);

            this.notification.sucesso('Foto atualizada com sucesso!');
          } else {
            this.notification.erro(res.mensagem || 'Erro ao atualizar foto.');
          }
        },
        error: (err) => {
          this.carregando.set(false);
          console.error(err);
          this.notification.erro('Erro ao fazer upload da imagem.');
        },
      });
    } catch (error) {
      console.error('Erro na compressão:', error);
      this.carregando.set(false);
      this.notification.erro('Não foi possível processar a imagem. Tente outra.');
    }
  }

  removerFoto(): void {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Remover Foto',
        mensagem:
          'Tem certeza que deseja remover sua foto de perfil? Essa ação não pode ser desfeita.',
        textoConfirmar: 'Sim, remover',
        textoCancelar: 'Manter foto',
        tipo: 'perigo',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.carregando.set(true);
        this.membroService.removerFotoPerfil().subscribe({
          next: () => {
            this.previewFoto.set('');
            this.authService.atualizarFotoGlobal(null);
            this.carregando.set(false);

            this.notification.sucesso('Foto removida com sucesso!');
          },
          error: (err) => {
            this.carregando.set(false);
            this.notification.erro('Erro ao remover arquivo: ' + err.message);
          },
        });
      }
    });
  }

  limparPedidoOracao(): void {
    this.perfilForm.controls.pedido_oracao.setValue('');
    this.perfilForm.markAsDirty();
  }

  cancelar(): void {
    this.router.navigate(['dashboard/home']);
  }

  cliqueInstalar() {
    this.pwaService.instalarApp();
  }
}
