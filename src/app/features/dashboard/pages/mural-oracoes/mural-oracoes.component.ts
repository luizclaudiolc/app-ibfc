import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, map } from 'rxjs';
import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { OracaoCardComponent } from '../../../../shared/components/oracao-card/oracao-card.component';
import { MembroService } from '../../../../core/services/membro.service';
import { Membro } from '../../../../shared/models/membro.model';
import { NotificationService } from '../../../../core/services/notifications.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { LIMITE_CARREGAMENTO_INICIAL } from '../../../../shared/models/consts';

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
  pedidos = signal<Membro[]>([]);
  carregando = signal<boolean>(true);
  salvando = signal<boolean>(false);

  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);

  private membroService = inject(MembroService);
  private notification = inject(NotificationService);
  private location = inject(Location);
  private fb = inject(FormBuilder);

  oracaoForm = this.fb.nonNullable.group({
    pedido_oracao: [''],
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

  pedidosFiltrados = computed(() => {
    const termo = this.termoBusca();
    const lista = this.pedidos();

    if (!termo) return lista;

    return lista.filter((membro) => {
      const nomeCompleto = `${membro.nome || ''} ${membro.sobrenome || ''}`.toLowerCase();
      const pedido = (membro.pedido_oracao || '').toLowerCase();

      return nomeCompleto.includes(termo) || pedido.includes(termo);
    });
  });

  pedidosExibidos = computed(() => {
    return this.pedidosFiltrados().slice(0, this.limiteExibicao());
  });

  mostrarBotaoCarregarMais = computed(() => {
    return this.pedidosFiltrados().length > this.limiteExibicao();
  });

  ngOnInit() {
    this.carregarDadosIniciais();
  }

  carregarDadosIniciais() {
    this.carregarPedidos();
    this.carregarMeuPedidoExistente();
  }

  carregarPedidos() {
    this.membroService.buscarPedidosOracao().subscribe({
      next: (dados) => {
        this.pedidos.set(dados);
        this.carregando.set(false);
      },
      error: () => {
        this.notification.erro('Erro ao carregar o mural.');
        this.carregando.set(false);
      },
    });
  }

  carregarMeuPedidoExistente() {
    this.membroService.buscarMeuPerfil().subscribe({
      next: (res) => {
        if (res && res.pedido_oracao) {
          this.oracaoForm.patchValue({ pedido_oracao: res.pedido_oracao });
        }
      },
    });
  }

  salvarPedidoOracao() {
    const textoPedido = this.oracaoForm.getRawValue().pedido_oracao;
    this.salvando.set(true);

    this.membroService.atualizarPerfil({ pedido_oracao: textoPedido }).subscribe({
      next: (res) => {
        this.salvando.set(false);
        if (res.sucesso) {
          this.notification.sucesso('Pedido de oração publicado no mural!');

          this.pedidos.set([]);
          this.carregarPedidos();
        } else {
          this.notification.erro(res.mensagem || 'Erro ao publicar pedido.');
        }
      },
      error: () => {
        this.salvando.set(false);
        this.notification.erro('Erro inesperado ao salvar pedido.');
      },
    });
  }

  limparPedido() {
    this.oracaoForm.controls.pedido_oracao.setValue('');
    this.salvarPedidoOracao();
  }

  carregarMaisPedidos(): void {
    this.limiteExibicao.update((valorAtual) => valorAtual + LIMITE_CARREGAMENTO_INICIAL);
  }

  voltar(): void {
    this.location.back();
  }
}
