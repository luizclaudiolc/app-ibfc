import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GenericDialogComponent } from '../../../../../shared/components/modal-generico/modal-generico.component';
import { NotificationService } from '../../../../../core/services/notifications.service';
import { EstudoFormDialogComponent } from './modal/estudo-form-dialog.component';
import { Estudo } from '../../../../../shared/models/estudos.model';
import { EstudoService } from '../../../../../core/services/estudos.service';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';
import { BotaoCarregarMaisComponent } from '../../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { LIMITE_CARREGAMENTO_INICIAL } from '../../../../../shared/models/consts';

@Component({
  selector: 'app-estudos-admin',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PageLayoutComponent,
    PageHeaderComponent,
    BotaoCarregarMaisComponent,
  ],
  templateUrl: './estudos-admin.component.html',
})
export class EstudosAdminComponent implements OnInit {
  estudos = signal<Estudo[]>([]);
  carregandoEstudos = signal<boolean>(true);
  carregandoUpload = signal<boolean>(false);

  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);

  private estudoService = inject(EstudoService);
  private dialog = inject(MatDialog);
  private notification = inject(NotificationService);

  estudosExibidos = computed(() => {
    return this.estudos().slice(0, this.limiteExibicao());
  });

  mostrarBotaoCarregarMais = computed(() => {
    return this.estudos().length > this.limiteExibicao();
  });

  ngOnInit() {
    this.carregarEstudos();
  }

  carregarEstudos() {
    this.carregandoEstudos.set(true);
    this.estudoService.buscarTodos().subscribe({
      next: (dados) => {
        this.estudos.set(dados);
        this.carregandoEstudos.set(false);
      },
      error: (err) => {
        console.error(err);
        this.notification.erro('Erro ao carregar a biblioteca de estudos.');
        this.carregandoEstudos.set(false);
      },
    });
  }

  carregarMaisEstudos(): void {
    this.limiteExibicao.update((valorAtual) => valorAtual + LIMITE_CARREGAMENTO_INICIAL);
  }

  formatarBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (file.type !== 'application/pdf') {
      this.notification.erro('O arquivo selecionado deve ser um PDF.');
      input.value = '';
      return;
    }

    const LIMITE_MB = 1.5;
    if (file.size > LIMITE_MB * 1024 * 1024) {
      this.dialog.open(GenericDialogComponent, {
        data: {
          titulo: 'Arquivo muito pesado',
          mensagem: `O PDF selecionado tem ${this.formatarBytes(file.size)}. Para economizar espaço no servidor, o limite é de ${LIMITE_MB}MB. Por favor, comprima seu PDF gratuitamente no site "ilovepdf.com" e tente novamente.`,
          textoConfirmar: 'Entendi',
          tipo: 'info',
          ocultarCancelar: true,
        },
        panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
        width: '90%',
        maxWidth: '400px',
      });

      input.value = '';
      return;
    }

    let arquivoBlindadoEmMemoria: Blob;
    try {
      this.notification.aviso('Carregando PDF...', 1000);
      const buffer = await file.arrayBuffer();
      arquivoBlindadoEmMemoria = new Blob([buffer], { type: 'application/pdf' });
    } catch (e) {
      console.error('Erro ao blindar arquivo', e);
      this.notification.erro('Erro ao processar arquivo no celular. Tente novamente.');
      input.value = '';
      return;
    }

    const dialogRef = this.dialog.open(EstudoFormDialogComponent, {
      width: '90%',
      maxWidth: '450px',
      panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
      data: {
        fileName: file.name,
        fileSize: this.formatarBytes(file.size),
      },
    });

    dialogRef.afterClosed().subscribe(async (dadosFormulario) => {
      if (!dadosFormulario) {
        input.value = '';
        return;
      }

      try {
        this.carregandoUpload.set(true);
        this.notification.aviso('Fazendo upload do documento...', 2000);

        const novoEstudo = await this.estudoService.criar(
          arquivoBlindadoEmMemoria,
          dadosFormulario.titulo,
          dadosFormulario.descricao,
        );

        this.estudos.update((atual) => [novoEstudo, ...atual]);
        this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
        this.notification.sucesso('Estudo publicado com sucesso!');
      } catch (error) {
        console.error('Erro no upload', error);
        this.notification.erro('Falha ao enviar o documento. Tente novamente.');
      } finally {
        this.carregandoUpload.set(false);
        input.value = '';
      }
    });
  }

  excluirEstudo(estudo: Estudo) {
    if (!estudo.id || !estudo.arquivo_url) return;

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Excluir Estudo',
        mensagem:
          'Tem certeza que deseja remover este material? Ele ficará indisponível para todos os membros.',
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
          this.estudos.update((atual) => atual.filter((a) => a.id !== estudo.id));

          await this.estudoService.excluir(estudo.id!, estudo.arquivo_url);
          this.notification.sucesso('Estudo removido com sucesso.');
        } catch (error) {
          console.error('Erro ao excluir', error);
          this.notification.erro('Erro ao excluir o estudo. Tente recarregar a página.');
          this.carregarEstudos();
        }
      }
    });
  }
}
