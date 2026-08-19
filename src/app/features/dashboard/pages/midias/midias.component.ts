import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { Midia } from '../../../../shared/models/midia.model';
import { ENiveisAcesso, LIMITE_CARREGAMENTO_INICIAL } from '../../../../shared/models/consts';
import { MidiaService } from '../../../../core/services/midia.service';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notifications.service';
import { VideoPlayerModalComponent } from '../../../../shared/components/modal-player-video/video-player-modal.component';
import { MidiaFormDialogComponent } from '../../../../shared/components/midias/modal/midia-form-dialog.component';
import { GenericDialogComponent } from '../../../../shared/components/modal-generico/modal-generico.component';

@Component({
  selector: 'app-midias',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PageLayoutComponent,
    PageHeaderComponent,
    BotaoCarregarMaisComponent,
  ],
  templateUrl: './midias.component.html',
})
export class MidiasComponent implements OnInit {
  midiasRaw = signal<Midia[]>([]);
  carregando = signal<boolean>(true);
  carregandoSalvar = signal<boolean>(false);

  termoBusca = signal<string>('');
  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);

  private midiaService = inject(MidiaService);
  private authService = inject(AuthService);
  private notification = inject(NotificationService);
  private dialog = inject(MatDialog);

  ehAdminOuLiderMidia = computed(() => {
    const { nivel, setor } = this.authService.obterUsuarioLogado();

    const isAdmin = nivel === ENiveisAcesso.Admin || nivel === ENiveisAcesso.SuperAdmin;

    const isLider = setor && setor !== 'null' && setor !== 'undefined' && setor !== 'membro';
    const isLiderMidia = isLider && setor === 'midia';

    const podeAcessar = isAdmin || !!isLiderMidia;

    return podeAcessar;
  });

  ngOnInit() {
    this.carregarMidias();
  }

  carregarMidias() {
    this.carregando.set(true);
    this.midiaService.buscarTodas().subscribe({
      next: (dados) => {
        this.midiasRaw.set(dados);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error(err);
        this.notification.erro('Não foi possível carregar o hub de mídias.');
        this.carregando.set(false);
      },
    });
  }

  midiasFiltradas = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    if (!busca) return this.midiasRaw();

    return this.midiasRaw().filter((m) =>
      `${m.titulo} ${m.descricao || ''}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(busca),
    );
  });

  midiasExibidas = computed(() => {
    return this.midiasFiltradas().slice(0, this.limiteExibicao());
  });

  mostrarBotaoCarregarMais = computed(() => {
    return this.midiasFiltradas().length > this.limiteExibicao();
  });

  aoBuscar(termo: string): void {
    this.termoBusca.set(termo);
    this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
  }

  carregarMais(): void {
    this.limiteExibicao.update((v) => v + LIMITE_CARREGAMENTO_INICIAL);
  }

  abrirPlayer(midia: Midia): void {
    this.dialog.open(VideoPlayerModalComponent, {
      data: midia,
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '95%',
      maxWidth: '720px',
    });
  }

  abrirModalNovoVideo(): void {
    const dialogRef = this.dialog.open(MidiaFormDialogComponent, {
      width: '90%',
      maxWidth: '450px',
      panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
    });

    dialogRef.afterClosed().subscribe(async (dados) => {
      if (!dados) return;

      try {
        this.carregandoSalvar.set(true);
        this.notification.aviso('Publicando vídeo no hub...', 2000);

        const novaMidia = await this.midiaService.criar(
          dados.youtube_id,
          dados.titulo,
          dados.descricao,
          dados.thumbnail_url,
        );

        this.midiasRaw.update((atual) => [novaMidia, ...atual]);
        this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
        this.notification.sucesso('Vídeo publicado com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar vídeo', error);
        this.notification.erro('Falha ao publicar vídeo. Tente novamente.');
      } finally {
        this.carregandoSalvar.set(false);
      }
    });
  }

  excluirVideo(event: Event, midia: Midia): void {
    event.stopPropagation();

    if (!midia.id) return;

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Excluir Vídeo',
        mensagem:
          'Tem certeza que deseja remover este vídeo do hub? Esta ação não pode ser desfeita.',
        textoCancelar: 'Cancelar',
        textoConfirmar: 'Sim, remover',
        tipo: 'perigo',
      },
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
      width: '90%',
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(async (confirmado) => {
      if (confirmado) {
        try {
          this.midiasRaw.update((atual) => atual.filter((m) => m.id !== midia.id));
          await this.midiaService.excluir(midia.id!);
          this.notification.sucesso('Vídeo removido com sucesso.');
        } catch (error) {
          console.error('Erro ao excluir', error);
          this.notification.erro('Erro ao remover o vídeo.');
          this.carregarMidias();
        }
      }
    });
  }
}
