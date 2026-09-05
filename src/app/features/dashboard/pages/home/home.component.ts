import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  finalize,
  forkJoin,
  fromEvent,
  Subject,
  Subscription,
} from 'rxjs';

import { AuthService } from '../../../../core/services/auth.service';
import { AvisoService } from '../../../../core/services/aviso.service';
import { EscalaService } from '../../../../core/services/escala.service';
import { colunasHome, MembroService } from '../../../../core/services/membro.service';
import { Aviso } from '../../../../shared/models/aviso.model';
import { Escala } from '../../../../shared/models/escala.model';
import { Membro } from '../../../../shared/models/membro.model';

import { MaterialModule } from '../../../../core/modules/material.module';
import { ImagePreviewDialogComponent } from '../../../../shared/components/img-preview/image-preview-dialog.component';
import { GenericDialogComponent } from '../../../../shared/components/modal-generico/modal-generico.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';

import {
  CARGOS_DISPONIVEIS_MAP,
  DEPARTAMENTOS_DISPONIVEIS_MAP,
  EVENTOS_MAP,
  GENERO_MAP,
  LIMITE_CARREGAMENTO_INICIAL,
  MINISTERIOS_DISPONIVEIS,
} from '../../../../shared/models/consts';

import { DevocionalService, VersiculoDia } from '../../../../core/services/devocional.service';
import { NotificationService } from '../../../../core/services/notifications.service';
import { PwaService } from '../../../../core/services/pwa.service';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { CardAniversarianteComponent } from '../../../../shared/components/card-aniversariante/card-aniversariante.component';
import { CardAvisoComponent } from '../../../../shared/components/card-aviso/card-aviso.component';
import { EscalaCardComponent } from '../../../../shared/components/card-escala/escala-card.component';
import { VersiculoCardComponent } from '../../../../shared/components/card-versiculo/card-versiculo.component';
import { ScrollableCarouselComponent } from '../../../../shared/components/carrossel/scrollable-carousel.component';
import { MembroListItemComponent } from '../../../../shared/components/lista-membros/membro-list-item.component';
import { PixCardComponent } from '../../../../shared/components/pix/pix-card.component';
import { PulsoCardComponent } from '../../../../shared/components/pulso-card/pulso-card.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SkeletonCardComponent } from '../../../../shared/components/app-skeleton-card/app-skeleton-card.component';
import { LoadingSpinnerComponent } from '../../../../shared/components/app-loading-spinner/app-loading-spinner.component';
import { EmptyStateComponent } from '../../../../shared/components/app-empty-state/app-empty-state.component';
import { OnboardingService } from '../../../../core/services/onboarding.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PageLayoutComponent,
    SectionHeaderComponent,
    ScrollableCarouselComponent,
    EscalaCardComponent,
    CardAniversarianteComponent,
    CardAvisoComponent,
    MembroListItemComponent,
    VersiculoCardComponent,
    PulsoCardComponent,
    BotaoCarregarMaisComponent,
    PixCardComponent,
    EmptyStateComponent,
    LoadingSpinnerComponent,
    SkeletonCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly avisoService = inject(AvisoService);
  private readonly escalaService = inject(EscalaService);
  private readonly membroService = inject(MembroService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly authService = inject(AuthService);
  private readonly devocionalService = inject(DevocionalService);
  private readonly notification = inject(NotificationService);
  public readonly pwaService = inject(PwaService);
  private readonly onboarding = inject(OnboardingService);

  nomeUsuario = this.authService.nomeUsuario$;
  emailUsuario = signal<string>(this.authService.obterUsuarioLogado().email || '');
  carregando = signal(true);

  avisos = signal<Aviso[]>([]);
  escalas = signal<Escala[]>([]);
  versiculoDiario = signal<VersiculoDia | null>(null);

  aniversariantes = signal<Membro[]>([]);
  membrosLista = signal<Membro[]>([]);
  totalMembros = signal(0);
  carregandoMais = signal(false);

  private busca$ = new Subject<string>();

  mostrarFiltrosAvancados = signal<boolean>(false);
  filtroMinisterio = signal<string | 'TODOS'>('TODOS');
  ministeriosDisponiveis = MINISTERIOS_DISPONIVEIS;

  termoBusca = signal('');

  currentIndex = signal(0);

  @ViewChild('carousel') carousel!: ElementRef;

  private autoScrollTimeout?: ReturnType<typeof setTimeout>;
  private scrollSubscription?: Subscription;

  departamentos = DEPARTAMENTOS_DISPONIVEIS_MAP;
  cargosDisponiveis = CARGOS_DISPONIVEIS_MAP;
  eventosMap = EVENTOS_MAP;

  ngOnInit(): void {
    this.carregarTodosOsDados();
    this.setupScrollSync();
    this.startAutoScroll();
    void this.onboarding.executarSeNecessario();

    this.busca$.pipe(debounceTime(300), distinctUntilChanged()).subscribe((termo) => {
      this.termoBusca.set(termo);
      this.recarregarListaMembros();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    this.scrollSubscription?.unsubscribe();
    this.busca$.complete();
  }

  private setupScrollSync(): void {
    setTimeout(() => {
      if (!this.carousel) return;
      this.scrollSubscription = fromEvent(this.carousel.nativeElement, 'scroll').subscribe(() => {
        const container = this.carousel.nativeElement as HTMLElement;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth * 0.9;
        this.currentIndex.set(Math.round(scrollLeft / cardWidth));
      });
    }, 500);
  }

  carregarTodosOsDados(): void {
    this.carregando.set(true);
    forkJoin({
      avisos: this.avisoService.buscarTodos(),
      escalas: this.escalaService.buscarProximosDias(30),
      aniversariantes: this.membroService.buscarAniversariantes(7),
      membros: this.membroService.buscarPaginado({
        offset: 0,
        limite: LIMITE_CARREGAMENTO_INICIAL,
        busca: this.termoBusca(),
        ministerio: this.filtroMinisterio(),
      }),
      versiculo: this.devocionalService.obterVersiculoDoDia(),
    })
      .pipe(finalize(() => this.carregando.set(false)))
      .subscribe({
        next: (res) => {
          this.avisos.set(res.avisos);
          this.escalas.set(res.escalas);
          this.aniversariantes.set(res.aniversariantes);
          this.membrosLista.set(res.membros.data);
          this.totalMembros.set(res.membros.total);
          this.versiculoDiario.set(res.versiculo);
        },
        error: (err) => console.error('Erro ao carregar dados', err),
      });
  }

  abrirFoto(url: string, nome: string): void {
    this.dialog.open(ImagePreviewDialogComponent, {
      data: { url, nome },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '90%',
      height: '90%',
    });
  }

  private startAutoScroll(): void {
    const play = () => {
      if (!this.carousel) return;

      const container = this.carousel.nativeElement as HTMLElement;
      const cards = Array.from(container.children) as HTMLElement[];
      const total = cards.length;

      if (total > 1) {
        const nextIndex = (this.currentIndex() + 1) % total;
        const cardWidth = cards[0].offsetWidth + 16;
        const scrollPos = nextIndex * cardWidth;

        container.scrollTo({
          left: scrollPos,
          behavior: 'smooth',
        });

        this.currentIndex.set(nextIndex);
      }

      this.autoScrollTimeout = setTimeout(play, 6000);
    };

    this.autoScrollTimeout = setTimeout(play, 6000);
  }

  stopAutoScroll(): void {
    clearTimeout(this.autoScrollTimeout);
  }

  restartAutoScroll(): void {
    this.stopAutoScroll();
    this.autoScrollTimeout = setTimeout(() => this.startAutoScroll(), 10000);
  }

  escalasPessoais = computed(() => {
    const volTarget = [this.nomeUsuario(), this.emailUsuario()].map((s) => s.toLowerCase());

    return this.escalas()
      .filter(({ voluntarios }) => volTarget.some((v) => voluntarios.toLowerCase().includes(v)))
      .sort((a, b) => a.data_escala.localeCompare(b.data_escala));
  });

  aoBuscarMembro(termo: string): void {
    this.busca$.next(termo);
  }

  definirFiltroMinisterio(ministerio: string | 'TODOS') {
    this.filtroMinisterio.set(ministerio);
    this.recarregarListaMembros();
  }

  private recarregarListaMembros(): void {
    this.membroService
      .buscarPaginado({
        offset: 0,
        limite: LIMITE_CARREGAMENTO_INICIAL,
        busca: this.termoBusca(),
        ministerio: this.filtroMinisterio(),
      })
      .subscribe({
        next: (res) => {
          this.membrosLista.set(res.data);
          this.totalMembros.set(res.total);
        },
      });
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
      })
      .pipe(finalize(() => this.carregandoMais.set(false)))
      .subscribe({
        next: (res) => {
          this.membrosLista.update((atual) => [...atual, ...res.data]);
          this.totalMembros.set(res.total);
        },
      });
  }

  membrosExibidos = computed(() => this.membrosLista());

  membrosFiltrados = computed(() => ({ length: this.totalMembros() }));

  mostrarBotaoCarregarMais = computed(() => this.membrosLista().length < this.totalMembros());

  aniversariantesDaSemana = computed(() => this.aniversariantes());

  ehHoje(dataNascimento: string): boolean {
    if (!dataNascimento) return false;
    const hoje = new Date();
    const partes = dataNascimento.split('-');

    return (
      parseInt(partes[1], 10) === hoje.getMonth() + 1 && parseInt(partes[2], 10) === hoje.getDate()
    );
  }

  abrirWhatsApp(aniversariante: Membro): void {
    if (!aniversariante.telefone) {
      this.dialog.open(GenericDialogComponent, {
        data: {
          titulo: 'Sem Contato',
          mensagem: 'Não encontramos o número de WhatsApp cadastrado para este membro.',
          textoConfirmar: 'Entendi',
          tipo: 'info',
          ocultarCancelar: true,
        },
        panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
        width: '90%',
        maxWidth: '400px',
      });
      return;
    }

    const generoId = aniversariante.genero;
    const generoText = generoId != null ? GENERO_MAP[generoId] : null;

    let pronome = 'tê-lo(a)';
    if (generoText === 'Masculino') pronome = 'tê-lo';
    if (generoText === 'Feminino') pronome = 'tê-la';

    const mensagem = `Olá ${aniversariante.nome}, parabéns pelo seu aniversário! É um prazer ${pronome} como parte da nossa Igreja. Que seu dia seja repleto de alegria e bênçãos de nosso Senhor!`;
    const url = `https://wa.me/55${aniversariante.telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  }

  solicitarTrocaEscala(escala: Escala): void {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Solicitar Substituição',
        mensagem:
          'Tem certeza que não poderá comparecer? O líder do departamento será notificado para encontrar um substituto.',
        textoConfirmar: 'Sim, avisar líder',
        textoCancelar: 'Cancelar',
        tipo: 'perigo',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        const nome = this.nomeUsuario() || '';

        const pedidosAtuais = escala.pedidos_substituicao
          ? escala.pedidos_substituicao.split(',').map((p) => p.trim())
          : [];

        if (!pedidosAtuais.includes(nome)) {
          pedidosAtuais.push(nome);
        }

        const payloadAtualizado = {
          ...escala,
          pedidos_substituicao: pedidosAtuais.join(', '),
        };

        this.escalaService.salvar(payloadAtualizado).subscribe({
          next: (escalaAtualizada) => {
            this.notification.sucesso('Líder notificado com sucesso!');

            const listaEscalas = this.escalas();
            const index = listaEscalas.findIndex((e) => e.id === escala.id);

            if (index !== -1) {
              const novaLista = [...listaEscalas];
              novaLista[index] = escalaAtualizada;
              this.escalas.set(novaLista);
            }
          },
          error: (err) => {
            console.error('Erro ao solicitar troca', err);
            this.notification.erro('Ocorreu um erro ao notificar o líder. Tente novamente.');
          },
        });
      }
    });
  }

  obterNomeDepartamento(valor: string): string {
    return this.departamentos[valor] || valor;
  }
}
