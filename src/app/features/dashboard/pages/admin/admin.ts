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
  ENiveisAcesso,
  LIMITE_CARREGAMENTO_INICIAL,
  MASTERS_SUPREMOS,
  MINISTERIOS_DISPONIVEIS,
  StatusMembro,
} from '../../../../shared/models/consts';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { FilhoService } from '../../../../core/services/filhos.service';
import {
  debounceTime,
  distinctUntilChanged,
  finalize,
  forkJoin,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { Filho } from '../../../../shared/models/filhos.model';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notifications.service';

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
  membrosLista = signal<Membro[]>([]);
  totalLista = signal(0);
  qtdPendentes = signal(0);
  qtdAtivos = signal(0);
  qtdInativos = signal(0);
  carregandoMais = signal(false);

  private busca$ = new Subject<string>();

  qtdTotal = computed(() => this.qtdPendentes() + this.qtdAtivos() + this.qtdInativos());

  membrosExibidos = computed(() => this.membrosLista());
  membrosFiltrados = computed(() => ({ length: this.totalLista() }));

  mostrarBotaoCarregarMais = computed(() => this.membrosLista().length < this.totalLista());

  termoBusca = signal<string>('');
  filtroStatus = signal<StatusMembro | 'TODOS'>('TODOS');
  carregando = signal<boolean>(true);
  erroMembros = signal<string>('');

  private dialog = inject(MatDialog);
  private membroService = inject(MembroService);
  private filhoService = inject(FilhoService);
  private authService = inject(AuthService);
  private notification = inject(NotificationService);

  usuarioLogado = this.authService.obterUsuarioLogado();

  mostrarFiltrosAvancados = signal<boolean>(false);
  filtroMinisterio = signal<string | 'TODOS'>('TODOS');
  ministeriosDisponiveis = MINISTERIOS_DISPONIVEIS;

  ngOnInit() {
    this.carregarContadores();
    this.carregarMembros();

    this.busca$.pipe(debounceTime(300), distinctUntilChanged()).subscribe((termo) => {
      this.termoBusca.set(termo);
      this.carregarMembros();
    });
  }

  ngOnDestroy() {
    this.busca$.complete();
  }

  carregarMembros(): void {
    this.carregando.set(true);
    this.erroMembros.set('');

    this.membroService
      .buscarPaginado({
        offset: 0,
        limite: LIMITE_CARREGAMENTO_INICIAL,
        busca: this.termoBusca(),
        ministerio: this.filtroMinisterio(),
        status: this.filtroStatus(),
        colunas: colunasAdminLista,
      })
      .pipe(
        switchMap((res) => {
          const ids = res.data.map((m) => m.id!).filter(Boolean);
          return forkJoin({
            pagina: of(res),
            filhos: this.filhoService.buscarPorMembros(ids),
          });
        }),
        finalize(() => this.carregando.set(false)),
      )
      .subscribe({
        next: ({ pagina, filhos }) => {
          this.membrosLista.set(this.anexarFilhos(pagina.data, filhos));
          this.totalLista.set(pagina.total);
        },
        error: (err) => {
          console.error('Erro ao buscar membros no Admin:', err);
          this.erroMembros.set('Não foi possível carregar a lista de membros no momento.');
        },
      });
  }

  private carregarContadores(): void {
    this.membroService.contarPorStatus().subscribe({
      next: ({ pendentes, ativos, inativos }) => {
        this.qtdPendentes.set(pendentes);
        this.qtdAtivos.set(ativos);
        this.qtdInativos.set(inativos);
      },
    });
  }

  private anexarFilhos(membros: Membro[], filhos: Filho[]): Membro[] {
    return membros.map((membro) => ({
      ...membro,
      filhos: filhos.filter(
        (f) => f.membro_id === membro.id || f.outro_responsavel_id === membro.id,
      ),
    }));
  }

  aoBuscarMembro(termo: string): void {
    this.busca$.next(termo);
  }

  definirFiltroStatus(status: StatusMembro | 'TODOS') {
    this.filtroStatus.set(status);
    this.carregarMembros();
  }

  carregarMaisMembros(): void {
    if (this.carregandoMais()) return;

    this.carregandoMais.set(true);
    this.membroService
      .buscarPaginado({
        offset: this.membrosLista().length,
        limite: LIMITE_CARREGAMENTO_INICIAL,
        busca: this.termoBusca(),
        ministerio: this.filtroMinisterio(),
        status: this.filtroStatus(),
        colunas: colunasAdminLista,
      })
      .pipe(
        switchMap((res) => {
          const ids = res.data.map((m) => m.id!).filter(Boolean);
          return forkJoin({
            pagina: of(res),
            filhos: this.filhoService.buscarPorMembros(ids),
          });
        }),
        finalize(() => this.carregandoMais.set(false)),
      )
      .subscribe({
        next: ({ pagina, filhos }) => {
          const novos = this.anexarFilhos(pagina.data, filhos);
          this.membrosLista.update((atual) => [...atual, ...novos]);
          this.totalLista.set(pagina.total);
        },
      });
  }

  definirFiltroMinisterio(ministerio: string | 'TODOS') {
    this.filtroMinisterio.set(ministerio);
    this.carregarMembros();
  }

  abrirEdicaoMembro(membro: Membro) {
    if (!membro.id) return;

    if (!this.podeEditarMembro(membro)) {
      this.notification.aviso('Permissão negada. Apenas Masters podem editar Super Admins.');
      return;
    }

    forkJoin({
      completo: this.membroService.buscarPorId(membro.id),
      filhos: this.filhoService.buscarPorMembro(membro.id),
    }).subscribe({
      next: ({ completo, filhos }) => {
        if (!completo) return;

        const dialogRef = this.dialog.open(EditarMembroDialogComponent, {
          width: '90%',
          maxWidth: '500px',
          data: { ...completo, filhos },
          panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
          disableClose: true,
        });

        dialogRef.afterClosed().subscribe((resultado) => {
          if (!resultado?.sucesso) return;

          const dados = resultado.dadosAtualizados;
          this.membrosLista.update((lista) =>
            lista.map((m) => (m.id === dados.id ? { ...m, ...dados } : m)),
          );
          this.carregarContadores();
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

  podeEditarMembro(membroAlvo: Membro): boolean {
    const meuId = this.usuarioLogado.id;
    const meuNivel = this.usuarioLogado.nivel;

    if (MASTERS_SUPREMOS.includes(meuId)) {
      return true;
    }

    if (membroAlvo.id === meuId) {
      return true;
    }

    if (
      (meuNivel === ENiveisAcesso.SuperAdmin || meuNivel === ENiveisAcesso.Admin) &&
      membroAlvo.nivel_acesso === ENiveisAcesso.SuperAdmin
    ) {
      return false;
    }

    return true;
  }
}
