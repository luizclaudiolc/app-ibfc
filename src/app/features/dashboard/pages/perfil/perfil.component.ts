import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  MINISTERIOS_DISPONIVEIS,
} from '../../../../shared/models/consts';
import { Membro, UsuarioAtualizacao } from '../../../../shared/models/membro.model';
import { CepService } from '../../../../core/services/busca-cep.service';
import { FilhoService } from '../../../../core/services/filhos.service';
import { firstValueFrom } from 'rxjs';

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
  private filhoService = inject(FilhoService);

  carregando = signal<boolean>(false);
  carregandoDados = signal<boolean>(true);
  buscandoCep = signal<boolean>(false);
  carregandoFilhos = signal<boolean>(false);

  membrosDisponiveis = signal<Membro[]>([]);

  previewFoto = signal<string | null>(this.authService.fotoUsuario$());
  cargosDisponiveis = CARGOS_DISPONIVEIS;
  ministeriosDisponiveis = MINISTERIOS_DISPONIVEIS;

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
    ministerios: [[] as string[]],
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

    filhos: this.fb.array([]),
  });

  get filhosFormArray(): FormArray {
    return this.perfilForm.get('filhos') as FormArray;
  }

  ngOnInit(): void {
    this.carregarDadosPerfil();
    this.carregarMembrosParaSelecao();
  }

  carregarMembrosParaSelecao() {
    this.membroService.buscarTodos().subscribe({
      next: (membros) => {
        const usuarioLogado = this.authService.obterUsuarioLogado();

        const filtrados = membros.filter((m) => m.id !== usuarioLogado.id);
        this.membrosDisponiveis.set(filtrados);
      },
      error: (err) => console.error('Erro ao carregar membros para seleção', err),
    });
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
            ministerios: res.ministerios || [],
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
          });

          if (res.id) {
            this.carregarFilhosDoMembro(res.id);
          }
        }
        this.carregandoDados.set(false);
      },
      error: () => {
        this.notification.erro('Erro ao carregar dados do perfil.');
        this.carregandoDados.set(false);
      },
    });
  }

  carregarFilhosDoMembro(membroId: string) {
    this.carregandoFilhos.set(true);
    this.filhoService.buscarPorMembro(membroId).subscribe({
      next: (filhos) => {
        this.filhosFormArray.clear();
        filhos.forEach((filho) => {
          const ehOutroResponsavel = filho.outro_responsavel_id === membroId;
          const responsavelParaSelect = ehOutroResponsavel
            ? filho.membro_id
            : filho.outro_responsavel_id || null;

          this.filhosFormArray.push(
            this.fb.group({
              id: [filho.id],
              membro_id: [filho.membro_id],
              outro_responsavel_id: [responsavelParaSelect],
              nome: [filho.nome, [Validators.required]],
              data_nascimento: [filho.data_nascimento, [Validators.required]],
              informacoes_medicas: [filho.informacoes_medicas || ''],
            }),
          );
        });
        this.carregandoFilhos.set(false);
      },
      error: (err) => {
        console.error('Erro ao carregar filhos', err);
        this.carregandoFilhos.set(false);
      },
    });
  }

  adicionarFilhoForm(): void {
    const usuarioLogado = this.authService.obterUsuarioLogado();

    this.filhosFormArray.push(
      this.fb.group({
        id: [null],
        membro_id: [usuarioLogado.id],
        outro_responsavel_id: [null],
        nome: ['', [Validators.required]],
        data_nascimento: ['', [Validators.required]],
        informacoes_medicas: [''],
      }),
    );
  }

  removerFilhoForm(index: number): void {
    const controleFilho = this.filhosFormArray.at(index);
    const filhoId = controleFilho.get('id')?.value;

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Remover Dependente',
        mensagem: 'Tem certeza que deseja excluir os dados deste dependente?',
        textoConfirmar: 'Sim, remover',
        textoCancelar: 'Cancelar',
        tipo: 'perigo',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(async (confirmado) => {
      if (confirmado) {
        if (filhoId) {
          try {
            await this.filhoService.excluir(filhoId);
            this.filhosFormArray.removeAt(index);
            this.notification.sucesso('Dependente removido com sucesso.');
          } catch (error) {
            this.notification.erro('Erro ao excluir dependente no servidor.');
          }
        } else {
          this.filhosFormArray.removeAt(index);
        }
      }
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

  async salvarAlteracoes(): Promise<void> {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      this.notification.aviso('Por favor, revise os campos obrigatórios.');
      return;
    }

    this.carregando.set(true);
    this.perfilForm.disable();

    const formValues = this.perfilForm.getRawValue();
    const usuarioLogado = this.authService.obterUsuarioLogado();

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
      ministerios: formValues.ministerios,
      data_nascimento: formValues.data_nascimento,
      genero: formValues.genero !== null ? Number(formValues.genero) : undefined,
      estado_civil: formValues.estado_civil !== null ? Number(formValues.estado_civil) : undefined,
      nivel_escolaridade:
        formValues.nivel_escolaridade !== null ? Number(formValues.nivel_escolaridade) : undefined,
      endereco: enderecoString,
    };

    try {
      const res = await firstValueFrom(this.membroService.atualizarPerfil(dadosEnvio));

      if (usuarioLogado.id) {
        for (const f of formValues.filhos as any[]) {
          const membroPrincipalId = f.membro_id || usuarioLogado.id;

          let outroRespId = f.outro_responsavel_id || null;
          if (f.membro_id && f.membro_id !== usuarioLogado.id) {
            outroRespId = f.membro_id;
          }

          const payloadFilho = {
            membro_id: membroPrincipalId,
            outro_responsavel_id: outroRespId,
            nome: f.nome.trim(),
            data_nascimento: f.data_nascimento,
            informacoes_medicas: f.informacoes_medicas?.trim() || null,
          };

          if (f.id) {
            await this.filhoService.atualizar(f.id, payloadFilho);
          } else {
            await this.filhoService.criar(payloadFilho);
          }
        }
      }

      this.carregando.set(false);
      this.perfilForm.enable();
      this.perfilForm.controls.email.disable();

      if (res && res.sucesso) {
        this.notification.sucesso('Perfil e dependentes atualizados com sucesso!');
        if (dadosEnvio.nome && dadosEnvio.sobrenome) {
          this.authService.atualizarNomeGlobal(`${dadosEnvio.nome} ${dadosEnvio.sobrenome}`);
        }
      } else {
        this.notification.erro(res?.mensagem || 'Erro ao salvar.');
      }
    } catch (error) {
      console.error(error);
      this.carregando.set(false);
      this.perfilForm.enable();
      this.perfilForm.controls.email.disable();
      this.notification.erro('Erro inesperado ao salvar alterações.');
    }
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

  cancelar(): void {
    this.router.navigate(['dashboard/home']);
  }

  irParaCarteirinha(): void {
    this.router.navigate(['dashboard/carteirinha']);
  }

  sairDoApp() {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Sair do Aplicativo',
        mensagem: 'Deseja realmente encerrar sua sessão atual?',
        textoConfirmar: 'Sim, sair',
        textoCancelar: 'Cancelar',
        tipo: 'padrao',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.authService.logout();
      }
    });
  }

  solicitarExclusaoConta() {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Excluir Conta',
        mensagem:
          'Você tem certeza que deseja solicitar a exclusão da sua conta? Após a confirmação dos administradores, todos os seus dados, histórico e acessos serão apagados permanentemente.',
        textoConfirmar: 'Sim, solicitar exclusão',
        textoCancelar: 'Cancelar',
        tipo: 'perigo',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.carregando.set(true);

        this.authService.solicitarExclusaoConta().subscribe({
          next: (res: any) => {
            this.carregando.set(false);
            if (res.sucesso) {
              this.notification.sucesso(
                'Sua solicitação de exclusão foi enviada aos administradores.',
              );

              this.router.navigate(['/login']);
            } else {
              this.notification.erro(res.mensagem || 'Erro ao processar sua solicitação.');
            }
          },
          error: () => {
            this.carregando.set(false);
            this.notification.erro('Ocorreu um erro inesperado. Tente novamente mais tarde.');
          },
        });
      }
    });
  }
}
