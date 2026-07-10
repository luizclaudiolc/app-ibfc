import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MembroService } from '../../../../core/services/membro.service';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../../core/modules/material.module';
import { UsuarioAtualizacao } from '../../../../shared/models/membro.model';
import { CARGOS_DISPONIVEIS } from '../../../../shared/models/consts';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/modal-generico/modal-generico.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent, MaterialModule],
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

  aoSelecionarFoto(event: any): void {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    this.carregando.set(true);
    this.membroService.atualizarFotoPerfil(arquivo).subscribe({
      next: (res) => {
        this.carregando.set(false);
        if (res.sucesso && res.fotoUrl) {
          this.previewFoto.set(res.fotoUrl);
          localStorage.setItem('user_foto', res.fotoUrl);
          this.mensagemSucesso.set('Foto atualizada!');
        } else {
          this.mensagemErro.set(res.mensagem || 'Erro ao atualizar foto.');
        }
      },
    });
  }

  removerFoto(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Remover Foto',
        mensagem:
          'Tem certeza que deseja remover sua foto de perfil? Essa ação não pode ser desfeita.',
        textoConfirmar: 'Sim, remover',
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
