import {
  Component,
  OnInit,
  signal,
  computed,
  inject,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, forkJoin, finalize, fromEvent, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { AvisoService } from '../../../../core/services/aviso.service';
import { EscalaService } from '../../../../core/services/escala.service';
import { MembroService } from '../../../../core/services/membro.service';
import { Aviso } from '../../../../shared/models/aviso.model';
import { Escala } from '../../../../shared/models/escala.model';
import { Membro } from '../../../../shared/models/membro.model';

import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ImagePreviewDialogComponent } from '../../../../shared/components/img-preview/image-preview-dialog.component';
import { MaterialModule } from '../../../../core/modules/material.module';

import {
  CARGOS_DISPONIVEIS_MAP,
  DEPARTAMENTOS_DISPONIVEIS_MAP,
  EVENTOS_MAP,
} from '../../../../shared/models/consts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly avisoService = inject(AvisoService);
  private readonly escalaService = inject(EscalaService);
  private readonly membroService = inject(MembroService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);

  nomeUsuario = signal<string>(localStorage.getItem('user_nome') || 'Irmão(ã)');
  emailUsuario = signal<string>(localStorage.getItem('user_email') || '');
  fotoUsuario = signal<string>(localStorage.getItem('user_foto') || '');
  carregando = signal(true);

  avisos = signal<Aviso[]>([]);
  escalas = signal<Escala[]>([]);
  membrosRaw = signal<Membro[]>([]);
  termoBusca = signal('');
  currentBirthdayIndex = signal<number>(0);

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
      width: '100%',
      height: '100%',
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

  escalaPessoal = computed(() => {
    const volTarget = [this.nomeUsuario(), this.emailUsuario()].map((s) => s.toLowerCase());
    return this.escalas()
      .filter((e) => e.data_escala >= new Date().toISOString().split('T')[0])
      .sort((a, b) => a.data_escala.localeCompare(b.data_escala))
      .find((e) => volTarget.some((v) => e.voluntarios.toLowerCase().includes(v)));
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

  aniversariantesDoMes = computed(() => {
    const membros = this.membrosRaw();
    const mesAtual = new Date().getMonth() + 1;

    return membros
      .filter((m) => {
        if (!m.data_nascimento || m.status === 'INATIVO') return false;

        const partesData = m.data_nascimento.split('-');
        if (partesData.length !== 3) return false;

        const mesNascimento = parseInt(partesData[1], 10);
        return mesNascimento === mesAtual;
      })
      .sort((a, b) => {
        const diaA = parseInt(a.data_nascimento.split('-')[2], 10);
        const diaB = parseInt(b.data_nascimento.split('-')[2], 10);
        return diaA - diaB;
      });
  });

  abrirWhatsApp(telefone: string | undefined, nome: string): void {
    if (!telefone) {
      alert('Este membro não possui um número de telefone cadastrado.');
      return;
    }

    let numeroLimpo = telefone.replace(/\D/g, '');

    if (numeroLimpo.length === 11) {
      numeroLimpo = `55${numeroLimpo}`;
    }

    const mensagem = encodeURIComponent(
      `A paz do Senhor, ${nome}! Passando para te desejar um feliz aniversário! 🎉 Deus abençoe muito a sua vida!`,
    );
    window.open(`https://wa.me/${numeroLimpo}?text=${mensagem}`, '_blank');
  }

  onBirthdayScroll(event: Event): void {
    const container = event.target as HTMLElement;

    if (!container || container.children.length === 0) return;

    const cardWidth = container.children[0].clientWidth + 16;
    const scrollLeft = container.scrollLeft;

    this.currentBirthdayIndex.set(Math.round(scrollLeft / cardWidth));
  }
}
