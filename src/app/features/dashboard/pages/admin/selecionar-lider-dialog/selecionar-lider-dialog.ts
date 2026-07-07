import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { MembroService } from '../../../../../core/services/membro.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-selecionar-lider-dialog',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './selecionar-lider-dialog.html',
})
export class SelecionarLiderDialogComponent {
  setores = [
    { label: 'Ministério de Louvor', value: 'ministerio_louvor' },
    { label: 'Recepção', value: 'recepcao' },
    { label: 'Mídia', value: 'midia' },
    { label: 'Infantil', value: 'infantil' },
    { label: 'Jovens', value: 'jovens' },
    { label: 'Adultos', value: 'adultos' },
    { label: 'Casais', value: 'casais' },
    { label: 'Mulheres', value: 'mulheres' },
    { label: 'Homens', value: 'homens' },
    { label: 'Missões', value: 'missoes' },
  ];
  membrosAtivos: any[] = [];
  membrosFiltrados: any[] = [];
  membrosSelecionados: any[] = [];
  setorSelecionado: string = '';

  constructor(
    public dialogRef: MatDialogRef<SelecionarLiderDialogComponent>,
    private membroService: MembroService,
  ) {
    this.membroService.buscarTodos().subscribe((data) => {
      this.membrosAtivos = data.filter((m) => m.status === 'ATIVO');
      this.membrosFiltrados = [...this.membrosAtivos];
    });
  }

  filtrar(event: Event) {
    const valor = (event.target as HTMLInputElement).value.toLowerCase();
    this.membrosFiltrados = this.membrosAtivos.filter(
      (m) => m.nome.toLowerCase().includes(valor) && !this.membrosSelecionados.includes(m),
    );
  }

  selecionar(event: MatAutocompleteSelectedEvent) {
    const membro = event.option.value;
    if (!this.membrosSelecionados.find((m) => m.id === membro.id)) {
      this.membrosSelecionados.push(membro);
    }
  }

  remover(membro: any) {
    this.membrosSelecionados = this.membrosSelecionados.filter((m) => m.id !== membro.id);
  }

  confirmar() {
    this.membrosSelecionados.forEach((m) => {
      this.membroService.atualizarSetor(m.id, this.setorSelecionado).subscribe();
    });
    this.dialogRef.close(true);
  }
}
