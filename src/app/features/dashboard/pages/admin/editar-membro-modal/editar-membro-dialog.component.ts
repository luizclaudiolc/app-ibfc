import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import {
  CARGOS_DISPONIVEIS,
  DEPARTAMENTOS_DISPONIVEIS,
  NivelAcesso,
  StatusMembro,
} from '../../../../../shared/models/consts';
import { MembroService } from '../../../../../core/services/membro.service';

@Component({
  selector: 'app-editar-membro-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MaterialModule],
  templateUrl: './editar-membro-dialog.component.html',
})
export class EditarMembroDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<EditarMembroDialogComponent>);
  private membroService = inject(MembroService);

  public data = inject(MAT_DIALOG_DATA);

  carregando = signal(false);

  fotoParaRemover = signal(false);

  cargosDisponiveis = CARGOS_DISPONIVEIS;
  departamentos = DEPARTAMENTOS_DISPONIVEIS;

  niveisAcesso = [
    { label: 'Administrador (Acesso Total)', value: 'ADMIN' as NivelAcesso },
    { label: 'Membro Comum', value: 'MEMBRO' as NivelAcesso },
  ];

  statusOpcoes = [
    { label: 'Ativo', value: 'ATIVO' as StatusMembro },
    { label: 'Inativo / Bloqueado', value: 'INATIVO' as StatusMembro },
  ];

  editForm = this.fb.nonNullable.group({
    email: [{ value: this.data.email, disabled: true }],
    nome: [this.data.nome, [Validators.required]],
    sobrenome: [this.data.sobrenome, [Validators.required]],
    telefone: [this.data.telefone, [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
    data_nascimento: [this.data.data_nascimento, [Validators.required]],
    cargo: [this.data.cargo, [Validators.required]],
    setor_responsavel: [this.data.setor_responsavel || ''],
    nivel_acesso: [this.data.nivel_acesso, [Validators.required]],
    status: [this.data.status, [Validators.required]],
  });

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
      remover_foto: this.fotoParaRemover(),
    };

    this.membroService.atualizarMembroAdmin(dadosAtualizados).subscribe({
      next: () => {
        if (dadosAtualizados.remover_foto) {
          dadosAtualizados.foto_url = null;
        }

        this.dialogRef.close({ sucesso: true, dadosAtualizados });
      },
      error: (err) => {
        console.error('Erro ao atualizar membro:', err);

        this.carregando.set(false);
        this.editForm.enable();

        alert('Ocorreu um erro ao atualizar o membro.');
      },
    });
  }
}
