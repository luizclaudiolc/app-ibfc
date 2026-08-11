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
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, finalize, forkJoin, fromEvent, Subscription } from 'rxjs';

import { AvisoService } from '../../../../core/services/aviso.service';
import { EscalaService } from '../../../../core/services/escala.service';
import { MembroService } from '../../../../core/services/membro.service';
import { AuthService } from '../../../../core/services/auth.service';
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
} from '../../../../shared/models/consts';

import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollableCarouselComponent } from '../../../../shared/components/carrossel/scrollable-carousel.component';
import { EscalaCardComponent } from '../../../../shared/components/card-escala/escala-card.component';
import { MembroListItemComponent } from '../../../../shared/components/lista-membros/membro-list-item.component';
import { CardAvisoComponent } from '../../../../shared/components/card-aviso/card-aviso.component';
import { CardAniversarianteComponent } from '../../../../shared/components/card-aniversariante/card-aniversariante.component';

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

  nomeUsuario = this.authService.nomeUsuario$;
  emailUsuario = signal<string>(this.authService.obterUsuarioLogado().email || '');
  carregando = signal(true);

  avisos = signal<Aviso[]>([]);
  escalas = signal<Escala[]>([]);
  membrosRaw = signal<Membro[]>([]);
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

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.carregarTodosOsDados());
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    this.scrollSubscription?.unsubscribe();
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
      escalas: this.escalaService.buscarTodas(),
      membros: this.membroService.buscarTodos(),
    })
      .pipe(finalize(() => this.carregando.set(false)))
      .subscribe({
        next: (res) => {
          this.avisos.set(res.avisos);
          this.escalas.set(res.escalas);
          this.membrosRaw.set(res.membros);
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

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const limite = new Date(hoje);
    limite.setDate(hoje.getDate() + 30);

    return this.escalas()
      .filter((e) => {
        const partes = e.data_escala.split('-');
        const dataEscala = new Date(
          parseInt(partes[0], 10),
          parseInt(partes[1], 10) - 1,
          parseInt(partes[2], 10),
        );
        dataEscala.setHours(0, 0, 0, 0);

        return dataEscala >= hoje && dataEscala <= limite;
      })
      .filter(({ voluntarios }) => volTarget.some((v) => voluntarios.toLowerCase().includes(v)))
      .sort((a, b) => a.data_escala.localeCompare(b.data_escala));
  });

  membrosFiltrados = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    if (!busca) return this.membrosRaw();
    return this.membrosRaw().filter((m) =>
      `${m.nome} ${m.sobrenome} ${m.cargo} ${m.setor_responsavel}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(busca),
    );
  });

  aniversariantesDaSemana = computed(() => {
    const membros = this.membrosRaw();
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const daquiAte = new Date(hoje);
    daquiAte.setDate(hoje.getDate() + 7);
    daquiAte.setHours(23, 59, 59, 999);

    const anoAtual = hoje.getFullYear();

    return membros
      .filter((m) => {
        if (!m.data_nascimento || m.status === 'INATIVO') return false;

        const partes = m.data_nascimento.split('-');
        if (partes.length !== 3) return false;

        const mes = parseInt(partes[1], 10) - 1;
        const dia = parseInt(partes[2], 10);

        let dataAniversario = new Date(anoAtual, mes, dia);
        dataAniversario.setHours(0, 0, 0, 0);

        if (dataAniversario < hoje) {
          dataAniversario.setFullYear(anoAtual + 1);
        }

        return dataAniversario >= hoje && dataAniversario <= daquiAte;
      })
      .sort((a, b) => {
        const getProxNiver = (dataNasc: string) => {
          const partes = dataNasc.split('-');
          const mes = parseInt(partes[1], 10) - 1;
          const dia = parseInt(partes[2], 10);
          let d = new Date(anoAtual, mes, dia);
          d.setHours(0, 0, 0, 0);
          if (d < hoje) d.setFullYear(anoAtual + 1);
          return d.getTime();
        };
        return getProxNiver(a.data_nascimento!) - getProxNiver(b.data_nascimento!);
      });
  });

  ehHoje(dataNascimento: string): boolean {
    if (!dataNascimento) return false;
    const hoje = new Date();
    const partes = dataNascimento.split('-');

    return (
      parseInt(partes[1], 10) === hoje.getMonth() + 1 && parseInt(partes[2], 10) === hoje.getDate()
    );
  }

  abrirWhatsApp(telefone: string | undefined, nome: string, dataNascimento: string): void {
    if (!telefone) {
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

    const mensagem = `Olá ${nome}, parabéns pelo seu aniversário! É um prazer tê-lo(a) como parte da nossa Igreja. Que seu dia seja repleto de alegria e bênçãos!`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
