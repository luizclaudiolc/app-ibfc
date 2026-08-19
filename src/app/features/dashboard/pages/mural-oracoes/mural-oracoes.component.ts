import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, map } from 'rxjs';
import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { OracaoCardComponent } from '../../../../shared/components/oracao-card/oracao-card.component';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notifications.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { LIMITE_CARREGAMENTO_INICIAL } from '../../../../shared/models/consts';
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
export class MuralOracoesComponent implements OnInit {
  pedidos = signal<PedidoOracao[]>([]);
  carregando = signal<boolean>(true);
  salvando = signal<boolean>(false);

  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);

  private pedidoService = inject(PedidoOracaoService);
  private authService = inject(AuthService);
  private notification = inject(NotificationService);
  private location = inject(Location);
  private fb = inject(FormBuilder);

  oracaoForm = this.fb.nonNullable.group({
    descricao: ['', [Validators.required, Validators.maxLength(160)]],
  });

  buscaControl = new FormControl('', { nonNullable: true });

  termoBusca = toSignal(
    this.buscaControl.valueChanges.pipe(
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
    const lista = this.pedidos().filter((p) => !p.atendido);

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

  ngOnInit() {
    this.carregarTodosPedidos();
  }

  carregarTodosPedidos() {
    this.carregando.set(true);

    this.pedidoService.buscarTodosComMembro().subscribe({
      next: (dados) => {
        this.pedidos.set(dados);
        this.carregando.set(false);
      },
      error: () => {
        this.notification.erro('Erro ao carregar o mural de orações.');
        this.carregando.set(false);
      },
    });
  }

  async salvarPedidoOracao() {
    if (this.oracaoForm.invalid) return;

    const textoPedido = this.oracaoForm.getRawValue().descricao.trim();
    if (!textoPedido) return;

    this.salvando.set(true);

    try {
      const usuarioLogado = this.authService.obterUsuarioLogado();

      await this.pedidoService.criar(usuarioLogado.id, textoPedido);

      this.notification.sucesso('Seu pedido de oração foi publicado no mural!');

      this.oracaoForm.reset();
      this.carregarTodosPedidos();
    } catch (error) {
      console.error('Erro ao publicar oração', error);
      this.notification.erro('Erro inesperado ao publicar seu pedido.');
    } finally {
      this.salvando.set(false);
    }
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
