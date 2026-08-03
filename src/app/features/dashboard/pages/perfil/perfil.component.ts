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
import { CARGOS_DISPONIVEIS } from '../../../../shared/models/consts';
import { UsuarioAtualizacao } from '../../../../shared/models/membro.model';

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
  private notification = inject(NotificationService); // INJEÇÃO DO SERVIÇO

  carregando = signal<boolean>(false);
  carregandoDados = signal<boolean>(true);

  // REMOVIDOS: mensagemSucesso e mensagemErro

  previewFoto = signal<string | null>(this.authService.fotoUsuario$());
  cargosDisponiveis = CARGOS_DISPONIVEIS;

  perfilForm = this.fb.nonNullable.group({
    nome: ['', [Validators.required]],
    sobrenome: ['', [Validators.required]],
    email: [{ value: '', disabled: true }],
    telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
    cargo: ['membro', [Validators.required]],
    data_nascimento: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.carregarDadosPerfil();
  }

  carregarDadosPerfil() {
    this.carregandoDados.set(true);

    this.membroService.buscarMeuPerfil().subscribe({
      next: (res) => {
        if (res) {
          this.perfilForm.patchValue({
            nome: res.nome || '',
            sobrenome: res.sobrenome || '',
            email: res.email || '',
            telefone: res.telefone || '',
            cargo: res.cargo || 'membro',
            data_nascimento: res.data_nascimento || '',
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

  salvarAlteracoes(): void {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      return;
    }

    this.carregando.set(true);
    this.perfilForm.disable();

    const formValues: UsuarioAtualizacao = this.perfilForm.getRawValue();

    this.membroService.atualizarPerfil(formValues).subscribe({
      next: (res) => {
        this.carregando.set(false);
        this.perfilForm.enable();
        this.perfilForm.controls.email.disable();

        if (res.sucesso) {
          this.notification.sucesso('Perfil atualizado com sucesso!');
          if (formValues.nome && formValues.sobrenome) {
            this.authService.atualizarNomeGlobal(`${formValues.nome} ${formValues.sobrenome}`);
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

  cancelar(): void {
    this.router.navigate(['dashboard/home']);
  }
}
