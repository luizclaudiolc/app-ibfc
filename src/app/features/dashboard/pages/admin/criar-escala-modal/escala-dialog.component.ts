import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import {
  DEPARTAMENTOS_DISPONIVEIS,
  EVENTOS_OPCOES,
  EVENTOS_MAP,
} from '../../../../../shared/models/consts';
import { CommonModule, DatePipe } from '@angular/common';
import { colunasSeletor, MembroService } from '../../../../../core/services/membro.service';
import { Membro } from '../../../../../shared/models/membro.model';
import { EscalaService } from '../../../../../core/services/escala.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { GenericDialogComponent } from '../../../../../shared/components/modal-generico/modal-generico.component';
import { DialogLayoutComponent } from '../../../../../shared/components/layout-modal/dialog-layout.component';

@Component({
  selector: 'app-escala-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, DatePipe, CommonModule, DialogLayoutComponent],
  templateUrl: './escala-dialog.component.html',
})
export class EscalaDialogComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<EscalaDialogComponent>);
  fb = inject(FormBuilder);
  membroService = inject(MembroService);
  private escalaService = inject(EscalaService);
  private dialog = inject(MatDialog);

  carregandoEnvio = false;
  membrosAtivos = signal<Membro[]>([]);
  membrosFiltrados = signal<Membro[]>([]);

  eventosMap = EVENTOS_MAP;
  eventosPreDefinidos = EVENTOS_OPCOES;

  departamentosPermitidos = this.data.isAdmin
    ? DEPARTAMENTOS_DISPONIVEIS
    : DEPARTAMENTOS_DISPONIVEIS.filter((d) => d.value === this.data.setorUsuario);

  form = this.fb.group({
    data_escala: [this.data.data_escala.toISOString().split('T')[0]],
    departamento: [
      {
        value: this.data.escala?.departamento || (this.data.isAdmin ? '' : this.data.setorUsuario),
        disabled: !this.data.isAdmin,
      },
      Validators.required,
    ],
    evento: [this.data.escala?.evento || '', Validators.required],
    voluntarios: [[] as string[], Validators.required],
  });

  ngOnInit() {
    if (this.data.escala?.voluntarios) {
      this.form.controls.voluntarios.setValue(
        this.data.escala.voluntarios.split(',').map((n: string) => n.trim()),
      );
    }
    this.membroService.buscarTodos(false, colunasSeletor).subscribe((membros) => {
      this.membrosAtivos.set(membros);
      this.membrosFiltrados.set(membros);
    });
  }

  obterNomeDepartamento(valor: string): string {
    const depto = DEPARTAMENTOS_DISPONIVEIS.find((d) => d.value === valor);
    return depto ? depto.label : valor;
  }

  filtrarMembros(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    this.membrosFiltrados.set(
      this.membrosAtivos().filter((m) =>
        (m.nome + ' ' + m.sobrenome).toLowerCase().includes(input),
      ),
    );
  }

  adicionarVoluntario(event: MatAutocompleteSelectedEvent): void {
    const nome = event.option.value;
    const atuais = this.form.controls.voluntarios.value || [];
    if (!atuais.includes(nome)) this.form.controls.voluntarios.setValue([...atuais, nome]);

    const inputElement = document.querySelector('input[matChipInputFor]') as HTMLInputElement;
    if (inputElement) inputElement.value = '';

    this.membrosFiltrados.set(this.membrosAtivos());
  }

  removerVoluntario(nome: string): void {
    this.form.controls.voluntarios.setValue(
      (this.form.controls.voluntarios.value || []).filter((v) => v !== nome),
    );
  }

  salvar() {
    if (this.form.invalid) return;
    this.carregandoEnvio = true;
    const formValues = this.form.getRawValue();

    const voluntariosFinais = formValues.voluntarios as string[];

    let pedidosAtualizados: string | null = null;

    if (this.data.escala?.pedidos_substituicao) {
      const pedidosAntigos = this.data.escala.pedidos_substituicao
        .split(',')
        .map((p: string) => p.trim());

      const pedidosRestantes = pedidosAntigos.filter((nome: string) =>
        voluntariosFinais.includes(nome),
      );

      if (pedidosRestantes.length > 0) {
        pedidosAtualizados = pedidosRestantes.join(', ');
      }
    }

    const dadosParaSalvar: any = {
      ...formValues,
      voluntarios: voluntariosFinais.join(', '),
      pedidos_substituicao: pedidosAtualizados,
    };

    if (this.data.escala?.id) {
      dadosParaSalvar.id = this.data.escala.id;
    }

    this.escalaService.salvar(dadosParaSalvar).subscribe({
      next: () => this.dialogRef.close({ sucesso: true }),
      error: (err) => {
        console.error('Erro ao salvar escala:', err);
        this.carregandoEnvio = false;
        this.dialog.open(GenericDialogComponent, {
          data: {
            titulo: 'Falha ao Salvar',
            mensagem: 'Não foi possível salvar a escala. Verifique sua conexão e permissões.',
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

  excluir() {
    if (!this.data.escala?.id) return;
    const dialogConfirmRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Excluir Escala',
        mensagem:
          'Tem certeza que deseja remover esta escala? Essa ação apagará a data para todos os voluntários envolvidos.',
        textoCancelar: 'Cancelar',
        textoConfirmar: 'Sim, excluir',
        tipo: 'perigo',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogConfirmRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.carregandoEnvio = true;
        this.escalaService.excluir(this.data.escala.id).subscribe({
          next: () => this.dialogRef.close({ sucesso: true, excluido: true }),
          error: (err) => {
            console.error('Erro ao excluir escala:', err);
            this.carregandoEnvio = false;
            this.dialog.open(GenericDialogComponent, {
              data: {
                titulo: 'Erro na Exclusão',
                mensagem: 'Não foi possível excluir a escala. Tente novamente mais tarde.',
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
    });
  }
}
