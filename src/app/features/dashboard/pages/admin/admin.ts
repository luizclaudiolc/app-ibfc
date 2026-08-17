import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { MembroService } from '../../../../core/services/membro.service';
import { EditarMembroDialogComponent } from './editar-membro-modal/editar-membro-dialog.component';
import { Membro } from '../../../../shared/models/membro.model';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { LIMITE_CARREGAMENTO_INICIAL, StatusMembro } from '../../../../shared/models/consts';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PageLayoutComponent,
    PageHeaderComponent,
    BotaoCarregarMaisComponent,
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent implements OnInit {
  membrosRaw = signal<Membro[]>([]);
  termoBusca = signal<string>('');
  filtroStatus = signal<StatusMembro | 'TODOS'>('TODOS');
  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);
  carregando = signal<boolean>(true);
  erroMembros = signal<string>('');

  private dialog = inject(MatDialog);
  private membroService = inject(MembroService);

  qtdPendentes = computed(() => this.membrosRaw().filter((m) => m.status === 'PENDENTE').length);
  qtdAtivos = computed(() => this.membrosRaw().filter((m) => m.status === 'ATIVO').length);
  qtdInativos = computed(() => this.membrosRaw().filter((m) => m.status === 'INATIVO').length);

  membrosFiltrados = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const statusAtual = this.filtroStatus();
    let lista = this.membrosRaw();

    if (statusAtual !== 'TODOS') {
      lista = lista.filter((m) => m.status === statusAtual);
    }

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
      const prioridade = { PENDENTE: 1, ATIVO: 2, INATIVO: 3 };

      const pA = prioridade[a.status as keyof typeof prioridade] || 99;
      const pB = prioridade[b.status as keyof typeof prioridade] || 99;

      if (pA !== pB) {
        return pA - pB;
      }

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
    this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
  }

  definirFiltroStatus(status: StatusMembro | 'TODOS') {
    this.filtroStatus.set(status);
    this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
  }

  carregarMaisMembros(): void {
    this.limiteExibicao.update((valorAtual) => valorAtual + LIMITE_CARREGAMENTO_INICIAL);
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
