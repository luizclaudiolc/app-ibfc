import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MembroService } from '../../../../core/services/membro.service';
import { Membro } from '../../../../shared/models/membro.model';
import { MaterialModule } from '../../../../core/modules/material.module';
import {
  DEPARTAMENTOS_DISPONIVEIS_MAP,
  GRADIENTES_PASTEIS,
  MINISTERIOS_DISPONIVEIS,
  LIMITE_CARREGAMENTO_INICIAL,
} from '../../../../shared/models/consts';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewDialogComponent } from '../../../../shared/components/img-preview/image-preview-dialog.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { NotificationService } from '../../../../core/services/notifications.service';
import { AuthService } from '../../../../core/services/auth.service';
import { PedidoOracao, PedidoOracaoService } from '../../../../core/services/pedido-oracao.service';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { GenericDialogComponent } from '../../../../shared/components/modal-generico/modal-generico.component';
import { EditarPedidoDialogComponent } from '../../../../shared/components/editar-oracao/editar-pedido-dialog.component';
import { PlanoLeituraService } from '../../../../core/services/plano-leitura.service';
import { PLANOS_LEITURA } from '../../../../shared/models/plano-leitura.const';

@Component({
  selector: 'app-membro-perfil',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent, BotaoCarregarMaisComponent],
  templateUrl: './perfil-membro.component.html',
})
export class PerfilMembroComponent implements OnInit {
  membro = signal<Membro | null>(null);
  carregando = signal<boolean>(true);
  erro = signal<boolean>(false);

  todosPedidosOracao = signal<PedidoOracao[]>([]);
  processandoOracao = signal<Record<string, boolean>>({});
  meuId: string;
  totalIntercessoesFeitas = signal<number>(0);

  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);

  pedidosAtivos = computed(() => {
    return this.todosPedidosOracao().filter((p) => !p.atendido);
  });

  pedidosExibidos = computed(() => {
    return this.pedidosAtivos().slice(0, this.limiteExibicao());
  });

  mostrarBotaoCarregarMais = computed(() => {
    return this.pedidosAtivos().length > this.limiteExibicao();
  });

  pedidosAtendidos = computed(() => {
    return this.todosPedidosOracao()
      .filter((p) => p.atendido)
      .sort(
        (a, b) =>
          new Date(b.updated_at || b.created_at).getTime() -
          new Date(a.updated_at || a.created_at).getTime(),
      );
  });

  isMeuPerfil = computed(() => {
    return this.membro()?.id === this.meuId;
  });

  corFundoCard = signal<string>('');
  ministeriosDisponiveis = MINISTERIOS_DISPONIVEIS;

  private route = inject(ActivatedRoute);
  private membroService = inject(MembroService);
  private pedidoService = inject(PedidoOracaoService);
  private location = inject(Location);
  private dialog = inject(MatDialog);
  private notification = inject(NotificationService);
  private authService = inject(AuthService);
  planoLeitura = inject(PlanoLeituraService);

  departamentos = DEPARTAMENTOS_DISPONIVEIS_MAP;
  gradientesPasteis = GRADIENTES_PASTEIS;
  planosDisponiveis = PLANOS_LEITURA;

  planosAgrupados = computed(() => {
    const progressoGeral = this.membro()?.progresso_leitura || {};

    const todos = this.planosDisponiveis.map((plano) => {
      const diasLidos = progressoGeral[plano.id] || [];
      return {
        ...plano,
        porcentagem: Math.round((diasLidos.length / plano.dias.length) * 100),
        concluido: diasLidos.length >= plano.dias.length,
      };
    });

    return {
      emAndamento: todos.filter((p) => !p.concluido && p.porcentagem > 0),
      concluidos: todos.filter((p) => p.concluido),
    };
  });

  constructor() {
    this.meuId = this.authService.obterUsuarioLogado().id;
  }

  ngOnInit(): void {
    const indexAleatorio = Math.floor(Math.random() * this.gradientesPasteis.length);
    this.corFundoCard.set(this.gradientesPasteis[indexAleatorio]);

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.buscarMembro(id);
    } else {
      this.erro.set(true);
      this.carregando.set(false);
    }
  }

  buscarMembro(id: string): void {
    this.membroService.buscarPorId(id).subscribe({
      next: (dados) => {
        if (dados) {
          this.membro.set(dados);
          this.carregarPedidosDoMembro(id);
        } else {
          this.erro.set(true);
          this.carregando.set(false);
        }
      },
      error: () => {
        this.erro.set(true);
        this.carregando.set(false);
      },
    });
  }

  carregarPedidosDoMembro(membroId: string): void {
    this.pedidoService.buscarMeusPedidos(membroId).subscribe({
      next: (pedidos) => {
        this.todosPedidosOracao.set(pedidos);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao carregar orações:', err);
        this.carregando.set(false);
      },
    });

    this.pedidoService
      .buscarTotalIntercessoes(membroId)
      .then((total) => {
        this.totalIntercessoesFeitas.set(total);
      })
      .catch((err) => console.error('Erro ao buscar total de intercessões', err));
  }

  carregarMaisPedidos(): void {
    this.limiteExibicao.update((valorAtual) => valorAtual + LIMITE_CARREGAMENTO_INICIAL);
  }

  async marcarComoAtendido(pedido: PedidoOracao): Promise<void> {
    if (this.processandoOracao()[pedido.id]) return;

    this.processandoOracao.update((p) => ({ ...p, [pedido.id]: true }));

    try {
      await this.pedidoService.marcarComoAtendido(pedido.id);
      this.notification.sucesso('Deus é fiel! Motivo movido para testemunhos.');

      this.todosPedidosOracao.update((pedidos) =>
        pedidos.map((p) =>
          p.id === pedido.id ? { ...p, atendido: true, updated_at: new Date().toISOString() } : p,
        ),
      );
    } catch (error) {
      console.error('Erro ao marcar oração como atendida', error);
      this.notification.erro('Erro ao atualizar o status do pedido.');
    } finally {
      this.processandoOracao.update((p) => ({ ...p, [pedido.id]: false }));
    }
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
          this.todosPedidosOracao.update((pedidos) => pedidos.filter((p) => p.id !== pedido.id));
        } catch (error) {
          console.error('Erro ao excluir pedido', error);
          this.notification.erro('Erro ao excluir o pedido no servidor.');
        }
      }
    });
  }

  jaOrou(pedido: PedidoOracao): boolean {
    return (pedido.intercessores || []).includes(this.meuId);
  }

  async alternarOracao(pedido: PedidoOracao): Promise<void> {
    if (this.processandoOracao()[pedido.id]) return;

    this.processandoOracao.update((p) => ({ ...p, [pedido.id]: true }));
    const orando = this.jaOrou(pedido);

    this.todosPedidosOracao.update((pedidos) =>
      pedidos.map((p) => {
        if (p.id === pedido.id) {
          const novosIntercessores = orando
            ? p.intercessores.filter((id) => id !== this.meuId)
            : [...(p.intercessores || []), this.meuId];
          return { ...p, intercessores: novosIntercessores };
        }
        return p;
      }),
    );

    try {
      await this.pedidoService.alternarIntercessao(pedido.id);
    } catch (error) {
      console.error('Erro ao alternar oração:', error);

      this.todosPedidosOracao.update((pedidos) =>
        pedidos.map((p) => {
          if (p.id === pedido.id) {
            const revertido = orando
              ? [...(p.intercessores || []), this.meuId]
              : p.intercessores.filter((id) => id !== this.meuId);
            return { ...p, intercessores: revertido };
          }
          return p;
        }),
      );
      this.notification.erro('Erro de comunicação ao registrar sua oração.');
    } finally {
      this.processandoOracao.update((p) => ({ ...p, [pedido.id]: false }));
    }
  }

  voltar(): void {
    this.location.back();
  }

  formatarTelefone(tel: string): string {
    if (!tel) return '';
    return tel.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  }

  formatarDataHumanizada(dataStr: string | undefined): string {
    if (!dataStr) return 'Não informado';
    const partes = dataStr.split('-');
    if (partes.length !== 3) return dataStr;
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    return `${parseInt(partes[2], 10)} de ${meses[parseInt(partes[1], 10) - 1]}`;
  }

  abrirFoto(url: any, nome: string): void {
    if (!url) return;
    this.dialog.open(ImagePreviewDialogComponent, {
      data: { url, nome },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      maxWidth: '100vw',
      maxHeight: '100vh',
    });
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
          await this.pedidoService.atualizar(pedido.id, novoTexto);
          this.notification.sucesso('Motivo de oração atualizado com sucesso!');

          this.todosPedidosOracao.update((lista) =>
            lista.map((p) =>
              p.id === pedido.id
                ? { ...p, descricao: novoTexto, updated_at: new Date().toISOString() }
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

  obterNomesMinisterios(valores: string[] | undefined): string {
    if (!valores || valores.length === 0) return '';
    return valores
      .map((val) => this.ministeriosDisponiveis.find((m) => m.value === val)?.label || val)
      .join(', ');
  }
}
