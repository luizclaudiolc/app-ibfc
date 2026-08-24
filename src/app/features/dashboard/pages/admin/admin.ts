import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { colunasAdminLista, MembroService } from '../../../../core/services/membro.service';
import { EditarMembroDialogComponent } from './editar-membro-modal/editar-membro-dialog.component';
import { Membro } from '../../../../shared/models/membro.model';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import {
  LIMITE_CARREGAMENTO_INICIAL,
  MINISTERIOS_DISPONIVEIS,
  StatusMembro,
} from '../../../../shared/models/consts';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { FilhoService } from '../../../../core/services/filhos.service';
import { forkJoin } from 'rxjs';

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
  private filhoService = inject(FilhoService);

  qtdPendentes = computed(() => this.membrosRaw().filter((m) => m.status === 'PENDENTE').length);
  qtdAtivos = computed(() => this.membrosRaw().filter((m) => m.status === 'ATIVO').length);
  qtdInativos = computed(() => this.membrosRaw().filter((m) => m.status === 'INATIVO').length);

  mostrarFiltrosAvancados = signal<boolean>(false);
  filtroMinisterio = signal<string | 'TODOS'>('TODOS');
  ministeriosDisponiveis = MINISTERIOS_DISPONIVEIS;

  membrosFiltrados = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const statusAtual = this.filtroStatus();
    const ministerioAtual = this.filtroMinisterio();

    let lista = this.membrosRaw();

    if (statusAtual !== 'TODOS') {
      lista = lista.filter((m) => m.status === statusAtual);
    }

    if (ministerioAtual !== 'TODOS') {
      lista = lista.filter((m) => m.ministerios?.includes(ministerioAtual));
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
      if (pA !== pB) return pA - pB;
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

    forkJoin({
      membros: this.membroService.buscarTodos(true, colunasAdminLista),
      filhos: this.filhoService.buscarTodosAdmin(),
    }).subscribe({
      next: ({ membros, filhos }) => {
        const membrosComFilhos = membros.map((membro) => {
          const filhosDesteMembro = filhos.filter(
            (f) => f.membro_id === membro.id || f.outro_responsavel_id === membro.id,
          );
          return { ...membro, filhos: filhosDesteMembro };
        });

        this.membrosRaw.set(membrosComFilhos);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar membros e filhos no Admin:', err);
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

  definirFiltroMinisterio(ministerio: string | 'TODOS') {
    this.filtroMinisterio.set(ministerio);
    this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
  }

  abrirEdicaoMembro(membro: Membro) {
    if (!membro.id) return;

    this.membroService.buscarPorId(membro.id).subscribe({
      next: (completo) => {
        if (!completo) return;

        const dialogRef = this.dialog.open(EditarMembroDialogComponent, {
          width: '90%',
          maxWidth: '500px',
          data: { ...completo, filhos: membro.filhos },
          panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
          disableClose: true,
        });

        dialogRef.afterClosed().subscribe((resultado) => {
          if (resultado?.sucesso) {
            const dadosAtualizados = resultado.dadosAtualizados;
            const listaAtual = this.membrosRaw();
            const index = listaAtual.findIndex((m) => m.id === dadosAtualizados.id);
            if (index !== -1) {
              listaAtual[index] = { ...listaAtual[index], ...dadosAtualizados };
              this.membrosRaw.set([...listaAtual]);
            }
          }
        });
      },
      error: () => this.erroMembros.set('Não foi possível abrir o cadastro deste membro.'),
    });
  }

  calcularIdade(dataNascimento: string | undefined): string {
    if (!dataNascimento) return '';

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return `${idade} ano${idade !== 1 ? 's' : ''}`;
  }
}
