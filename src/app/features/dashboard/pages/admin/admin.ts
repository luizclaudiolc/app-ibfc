import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { MembroService } from '../../../../core/services/membro.service';
import { EditarMembroDialogComponent } from './editar-membro-modal/editar-membro-dialog.component';
import { Membro } from '../../../../shared/models/membro.model';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent implements OnInit {
  membrosRaw = signal<Membro[]>([]);
  termoBusca = signal<string>('');
  limiteExibicao = signal<number>(10);
  carregando = signal<boolean>(true);
  erroMembros = signal<string>('');

  private dialog = inject(MatDialog);
  private membroService = inject(MembroService);

  membrosFiltrados = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const lista = this.membrosRaw();

    let resultadoBusca = lista;

    if (busca) {
      resultadoBusca = lista.filter((membro) => {
        const nomeCompleto = `${membro.nome} ${membro.sobrenome}`
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        return (
          nomeCompleto.includes(busca) ||
          membro.email.toLowerCase().includes(busca) ||
          membro.setor_responsavel?.toLowerCase().includes(busca) ||
          membro.cargo?.toLowerCase().includes(busca)
        );
      });
    }

    return [...resultadoBusca].sort((a, b) => {
      if (a.status === 'ATIVO' && b.status === 'INATIVO') return -1;
      if (a.status === 'INATIVO' && b.status === 'ATIVO') return 1;
      return a.nome.localeCompare(b.nome);
    });
  });

  membrosExibidos = computed(() => {
    return this.membrosFiltrados().slice(0, this.limiteExibicao());
  });

  mostrarBotaoCarregarMais = computed(() => {
    return this.membrosFiltrados().length > this.limiteExibicao();
  });

  ngOnInit() {
    this.carregarMembros();
  }

  carregarMembros() {
    this.carregando.set(true);
    this.erroMembros.set('');

    this.membroService.buscarTodos(true).subscribe({
      next: (dados) => {
        this.membrosRaw.set(dados);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar membros no Admin:', err);
        this.erroMembros.set('Não foi possível carregar a lista de membros no momento.');
        this.carregando.set(false);
      },
    });
  }

  aoBuscarMembro(termo: string): void {
    this.termoBusca.set(termo);
    this.limiteExibicao.set(10);
  }

  carregarMaisMembros(): void {
    this.limiteExibicao.update((valorAtual) => valorAtual + 10);
  }

  abrirEdicaoMembro(membro: any) {
    const dialogRef = this.dialog.open(EditarMembroDialogComponent, {
      width: '90%',
      maxWidth: '500px',
      data: membro,
      panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado && resultado.sucesso) {
        const dadosAtualizados = resultado.dadosAtualizados;
        const listaAtual = this.membrosRaw();
        const index = listaAtual.findIndex((m) => m.id === dadosAtualizados.id);

        if (index !== -1) {
          listaAtual[index] = dadosAtualizados;
          this.membrosRaw.set([...listaAtual]);
        }
      }
    });
  }
}
