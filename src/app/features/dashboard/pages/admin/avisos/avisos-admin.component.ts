import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import imageCompression from 'browser-image-compression';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { AvisoService } from '../../../../../core/services/aviso.service';
import { GenericDialogComponent } from '../../../../../shared/components/modal-generico/modal-generico.component';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { Aviso } from '../../../../../shared/models/aviso.model';
import { NotificationService } from '../../../../../core/services/notifications.service';
import { AvisoFormDialogComponent } from './modal/aviso-form-dialog.component';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-avisos-admin',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent, PageHeaderComponent],
  templateUrl: './avisos-admin.component.html',
})
export class AvisosAdminComponent implements OnInit {
  avisos = signal<Aviso[]>([]);
  carregandoAvisos = signal<boolean>(true);
  carregandoUpload = signal<boolean>(false);

  private avisoService = inject(AvisoService);
  private dialog = inject(MatDialog);
  private notification = inject(NotificationService);

  ngOnInit() {
    this.verificarEExecutarLimpezaMensal();
    this.carregarAvisos();
  }

  carregarAvisos() {
    this.carregandoAvisos.set(true);
    this.avisoService.buscarTodos(false).subscribe({
      next: (dados) => {
        this.avisos.set(dados);
        this.carregandoAvisos.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar avisos', err);
        this.notification.erro('Não foi possível carregar os avisos.');
        this.carregandoAvisos.set(false);
      },
    });
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (file.size > 5 * 1024 * 1024) {
      this.notification.aviso('A imagem original deve ter no máximo 5MB.');
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const previewUrl = reader.result as string;

      const dialogRef = this.dialog.open(AvisoFormDialogComponent, {
        width: '90%',
        maxWidth: '450px',
        panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
        data: { previewUrl },
      });

      dialogRef.afterClosed().subscribe(async (dadosFormulario) => {
        if (!dadosFormulario) {
          input.value = '';
          return;
        }

        try {
          this.carregandoUpload.set(true);
          this.notification.aviso('Comprimindo e enviando imagem...', 2000);

          const opcoes = {
            maxSizeMB: 0.6,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            initialQuality: 0.85,
          };

          const arquivoComprimido = await imageCompression(file, opcoes);

          const novoAviso = await this.avisoService.criar(
            arquivoComprimido,
            dadosFormulario.data_evento,
            dadosFormulario.descricao,
          );

          this.avisos.update((atual) => [novoAviso, ...atual]);
          this.notification.sucesso('Novo banner de aviso publicado!');
        } catch (error) {
          console.error('Erro no upload ou compressão', error);
          this.notification.erro('Falha ao processar e enviar o banner. Tente novamente.');
        } finally {
          this.carregandoUpload.set(false);
          input.value = '';
        }
      });
    };

    reader.readAsDataURL(file);
  }

  excluirAviso(aviso: Aviso) {
    if (!aviso.id || !aviso.foto_url) return;

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Excluir Banner',
        mensagem:
          'Tem certeza que deseja remover este banner? Ele sumirá imediatamente da tela inicial da rede.',
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
          this.avisos.update((atual) => atual.filter((a) => a.id !== aviso.id));

          await this.avisoService.excluir(aviso.id!, aviso.foto_url);
          this.notification.sucesso('Banner removido com sucesso.');
        } catch (error) {
          console.error('Erro ao excluir', error);
          this.notification.erro('Erro ao excluir o banner no servidor. Tente recarregar.');
          this.carregarAvisos();
        }
      }
    });
  }

  async verificarEExecutarLimpezaMensal() {
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    if (diaAtual > 7) return;

    const chaveLocalStorage = `limpeza_avisos_${mesAtual}_${anoAtual}`;
    const limpezaJaExecutada = localStorage.getItem(chaveLocalStorage);

    if (limpezaJaExecutada) return;

    const resultado = await this.avisoService.limparAvisosPassados();

    if (resultado.sucesso) {
      localStorage.setItem(chaveLocalStorage, 'true');
      console.log('Rotina mensal de limpeza de avisos executada com sucesso.');
    }
  }
}
