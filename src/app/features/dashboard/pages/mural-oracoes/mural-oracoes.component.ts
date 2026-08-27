import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { OracaoCardComponent } from '../../../../shared/components/oracao-card/oracao-card.component';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notifications.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { GenericDialogComponent } from '../../../../shared/components/modal-generico/modal-generico.component';
import { EditarPedidoDialogComponent } from '../../../../shared/components/editar-oracao/editar-pedido-dialog.component';
import { ENiveisAcesso, LIMITE_CARREGAMENTO_INICIAL } from '../../../../shared/models/consts';
import { PedidoOracao, PedidoOracaoService } from '../../../../core/services/pedido-oracao.service';

@Component({
  selector: 'app-mural-oracoes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PageLayoutComponent,
    OracaoCardComponent,
    PageHeaderComponent,
    BotaoCarregarMaisComponent,
  ],
  templateUrl: './mural-oracoes.component.html',
})
export class MuralOracoesComponent implements OnInit, OnDestroy {
  pedidos = signal<PedidoOracao[]>([]);
  carregando = signal<boolean>(true);
  salvando = signal<boolean>(false);
  processandoOracao = signal<Record<string, boolean>>({});

  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);
  filtroTipo = signal<'TODOS' | 'MEUS'>('TODOS');

  presentes = signal(1);
  toastOracao = signal<string | null>(null);
  eSuperAdmin = signal<boolean>(false);

  private pedidoService = inject(PedidoOracaoService);
  private authService = inject(AuthService);
  private notification = inject(NotificationService);
  private location = inject(Location);
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);

  usuarioLogadoId: string;

  private pararRealtime?: () => void;
  private ultimoToastEm = 0;
  private toastTimer?: ReturnType<typeof setTimeout>;

  private destroy$ = new Subject<void>();

  oracaoForm = this.fb.nonNullable.group({
    descricao: ['', [Validators.required, Validators.maxLength(160)]],
  });

  buscaControl = new FormControl('', { nonNullable: true });

  termoBusca = toSignal(
    this.buscaControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(150),
      map((termo) => {
        this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
        return termo.trim().toLowerCase();
      }),
    ),
    { initialValue: '' },
  );

  pedidosAtivosFiltrados = computed(() => {
    const termo = this.termoBusca();
    const tipo = this.filtroTipo();
    let lista = this.pedidos().filter((p) => !p.atendido);

    if (tipo === 'MEUS') {
      lista = lista.filter((p) => p.membro_id === this.usuarioLogadoId);
    }

    if (!termo) return lista;

    return lista.filter((pedido) => {
      const nomeCompleto =
        `${pedido.membro?.nome || ''} ${pedido.membro?.sobrenome || ''}`.toLowerCase();
      const descricao = (pedido.descricao || '').toLowerCase();

      return nomeCompleto.includes(termo) || descricao.includes(termo);
    });
  });

  pedidosAtendidosRecentes = computed(() => {
    return this.pedidos()
      .filter((p) => p.atendido)
      .sort(
        (a, b) =>
          new Date(b.updated_at || b.created_at).getTime() -
          new Date(a.updated_at || a.created_at).getTime(),
      )
      .slice(0, 3);
  });

  pedidosAtendidos = computed(() => {
    return this.pedidos()
      .filter((p) => p.atendido)
      .sort(
        (a, b) =>
          new Date(b.updated_at || b.created_at).getTime() -
          new Date(a.updated_at || a.created_at).getTime(),
      );
  });

  pedidosExibidos = computed(() => {
    return this.pedidosAtivosFiltrados().slice(0, this.limiteExibicao());
  });

  mostrarBotaoCarregarMais = computed(() => {
    return this.pedidosAtivosFiltrados().length > this.limiteExibicao();
  });

  constructor() {
    this.usuarioLogadoId = this.authService.obterUsuarioLogado().id;
  }

  ngOnInit() {
    this.carregarTodosPedidos();

    const { id, nome, nivel } = this.authService.obterUsuarioLogado();
    const meuNome = (nome || 'Irmão').split(' ')[0];

    if (nivel === ENiveisAcesso.SuperAdmin) {
      this.eSuperAdmin.set(true);
    }

    this.pararRealtime = this.pedidoService.ouvirMural({
      meuId: id,
      meuNome,
      onPresenca: (qtd) => this.presentes.set(qtd),
      onEvento: (tipo, row) => this.aplicarEventoRealtime(tipo, row),
    });
  }

  ngOnDestroy() {
    clearTimeout(this.toastTimer);

    this.pararRealtime?.();

    this.destroy$.next();
    this.destroy$.complete();
  }

  private aplicarEventoRealtime(tipo: 'INSERT' | 'UPDATE' | 'DELETE', row: PedidoOracao): void {
    if (tipo === 'INSERT') {
      if (this.pedidos().some((p) => p.id === row.id)) return;

      this.pedidoService
        .buscarPorId(row.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe((completo) => {
          if (completo) this.pedidos.update((lista) => [completo, ...lista]);
        });
      return;
    }

    if (tipo === 'UPDATE') {
      const anterior = this.pedidos().find((p) => p.id === row.id);
      const antes = anterior?.intercessores ?? [];
      const depois = row.intercessores ?? [];
      const novos = depois.filter((id) => !antes.includes(id));

      this.pedidos.update((lista) =>
        lista.map((p) => (p.id === row.id ? { ...p, ...row, membro: p.membro } : p)),
      );

      const quemOrou = novos.find((id) => id !== this.usuarioLogadoId);

      if (quemOrou) {
        const nome = this.pedidoService.nomePresente(quemOrou) ?? 'Alguém';
        this.mostrarToastOracao(`${nome} está orando agora`);
      }
      return;
    }

    if (tipo === 'DELETE') {
      this.pedidos.update((lista) => lista.filter((p) => p.id !== row.id));
    }
  }

  private mostrarToastOracao(texto: string): void {
    const agora = Date.now();
    if (agora - this.ultimoToastEm < 3000) return;
    this.ultimoToastEm = agora;

    this.toastOracao.set(texto);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastOracao.set(null), 2500);
  }

  carregarTodosPedidos() {
    this.carregando.set(true);

    this.pedidoService
      .buscarParaMural()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ({ ativos, atendidos }) => {
          this.pedidos.set([...ativos, ...atendidos]);
          this.carregando.set(false);
        },
        error: () => {
          this.notification.erro('Erro ao carregar o mural de orações.');
          this.carregando.set(false);
        },
      });
  }

  setFiltroTipo(tipo: 'TODOS' | 'MEUS'): void {
    this.filtroTipo.set(tipo);
    this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
  }

  async salvarPedidoOracao() {
    if (this.oracaoForm.invalid) return;

    const textoPedido = this.oracaoForm.getRawValue().descricao.trim();
    if (!textoPedido) return;

    this.salvando.set(true);

    try {
      const pedidoCriado = await this.pedidoService.criar(this.usuarioLogadoId, textoPedido);

      this.notification.sucesso('Seu pedido de oração foi publicado no mural!');
      this.oracaoForm.reset();

      const usuarioAtual = this.authService.obterUsuarioLogado();
      this.pedidos.update((lista) => [
        {
          ...pedidoCriado,
          membro: {
            nome: usuarioAtual.nome.split(' ')[0],
            sobrenome: usuarioAtual.nome.split(' ')[1] || '',
            foto_url: this.authService.fotoUsuario$(),
          },
        },
        ...lista,
      ]);
    } catch (error) {
      console.error('Erro ao publicar oração', error);
      this.notification.erro('Erro inesperado ao publicar seu pedido.');
    } finally {
      this.salvando.set(false);
    }
  }

  editarPedido(pedido: PedidoOracao): void {
    const dialogRef = this.dialog.open(EditarPedidoDialogComponent, {
      data: { descricao: pedido.descricao },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '450px',
    });

    dialogRef.afterClosed().subscribe(async (novoTexto: string) => {
      if (novoTexto && novoTexto !== pedido.descricao) {
        this.processandoOracao.update((p) => ({ ...p, [pedido.id]: true }));

        try {
          const atualizado = await this.pedidoService.atualizar(pedido.id, novoTexto);
          this.notification.sucesso('Motivo de oração atualizado com sucesso!');

          this.pedidos.update((lista) =>
            lista.map((p) =>
              p.id === pedido.id
                ? {
                    ...p,
                    descricao: atualizado.descricao,
                    updated_at: atualizado.updated_at,
                    membro: p.membro ? { ...p.membro } : undefined,
                  }
                : p,
            ),
          );
        } catch (error) {
          console.error('Erro ao atualizar pedido', error);
          this.notification.erro('Não foi possível atualizar o pedido.');
        } finally {
          this.processandoOracao.update((p) => ({ ...p, [pedido.id]: false }));
        }
      }
    });
  }

  excluirPedido(pedido: PedidoOracao): void {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Excluir Pedido',
        mensagem: 'Tem certeza que deseja excluir permanentemente este motivo de oração?',
        textoConfirmar: 'Sim, excluir',
        textoCancelar: 'Cancelar',
        tipo: 'perigo',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(async (confirmado) => {
      if (confirmado) {
        try {
          await this.pedidoService.excluir(pedido.id);
          this.notification.sucesso('Pedido de oração excluído com sucesso.');
          this.pedidos.update((lista) => lista.filter((p) => p.id !== pedido.id));
        } catch (error) {
          console.error('Erro ao excluir pedido', error);
          this.notification.erro('Erro ao excluir o pedido no servidor.');
        }
      }
    });
  }

  limparTexto() {
    this.oracaoForm.reset();
  }

  carregarMaisPedidos(): void {
    this.limiteExibicao.update((valorAtual) => valorAtual + LIMITE_CARREGAMENTO_INICIAL);
  }

  voltar(): void {
    this.location.back();
  }
}
