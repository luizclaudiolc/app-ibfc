import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import imageCompression from 'browser-image-compression';

import { MembroService } from '../../../../core/services/membro.service';
import { MaterialModule } from '../../../../core/modules/material.module';
import { GenericDialogComponent } from '../../../../shared/modal-generico/modal-generico.component';
import { UsuarioAtualizacao } from '../../../../shared/models/membro.model';
import { CARGOS_DISPONIVEIS } from '../../../../shared/models/consts';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageLayoutComponent, MaterialModule],
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  carregando = signal<boolean>(false);
  carregandoDados = signal<boolean>(true);
  mensagemSucesso = signal<string>('');
  mensagemErro = signal<string>('');
  previewFoto = signal<string>(localStorage.getItem('user_foto') || '');

  private membroService = inject(MembroService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);

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
        this.mensagemErro.set('Erro ao carregar dados do perfil.');
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
    this.mensagemSucesso.set('');
    this.mensagemErro.set('');

    const formValues: UsuarioAtualizacao = this.perfilForm.getRawValue();

    this.membroService.atualizarPerfil(formValues).subscribe({
      next: (res) => {
        this.carregando.set(false);
        this.perfilForm.enable();
        this.perfilForm.controls.email.disable();

        if (res.sucesso) {
          this.mensagemSucesso.set('Perfil atualizado com sucesso!');

          if (formValues.nome) {
            localStorage.setItem('user_nome', formValues.nome);
          }
        } else {
          this.mensagemErro.set(res.mensagem || 'Erro ao salvar.');
        }
      },
      error: () => {
        this.carregando.set(false);
        this.perfilForm.enable();
        this.perfilForm.controls.email.disable();
        this.mensagemErro.set('Erro inesperado ao salvar alterações.');
      },
    });
  }

  async aoSelecionarFoto(event: any): Promise<void> {
    const arquivoOriginal = event.target.files[0];
    if (!arquivoOriginal) return;

    this.carregando.set(true);
    this.mensagemErro.set('');
    this.mensagemSucesso.set('');

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
            localStorage.setItem('user_foto', res.fotoUrl);
            this.mensagemSucesso.set('Foto atualizada com sucesso!');
          } else {
            this.mensagemErro.set(res.mensagem || 'Erro ao atualizar foto.');
          }
        },
        error: (err) => {
          this.carregando.set(false);
          console.error(err);
          this.mensagemErro.set('Erro ao fazer upload da imagem.');
        },
      });
    } catch (error) {
      console.error('Erro na compressão:', error);
      this.carregando.set(false);
      this.mensagemErro.set('Não foi possível processar a imagem. Tente outra.');
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
            localStorage.removeItem('user_foto');
            this.carregando.set(false);
            this.mensagemSucesso.set('Foto removida com sucesso!');
          },
          error: (err) => {
            this.carregando.set(false);
            this.mensagemErro.set('Erro ao remover arquivo: ' + err.message);
          },
        });
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['dashboard/home']);
  }
}
