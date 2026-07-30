import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../../core/modules/material.module';
import { AvisoService } from '../../../../core/services/aviso.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { Aviso } from '../../../../shared/models/aviso.model';
import imageCompression from 'browser-image-compression';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../../../../shared/modal-generico/modal-generico.component';

@Component({
  selector: 'app-avisos-admin',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent],
  templateUrl: './avisos-admin.component.html',
})
export class AvisosAdminComponent implements OnInit {
  avisos = signal<Aviso[]>([]);
  carregandoAvisos = signal<boolean>(true);
  carregandoUpload = signal<boolean>(false);

  private avisoService = inject(AvisoService);
  private dialog = inject(MatDialog);

  ngOnInit() {
    this.carregarAvisos();
  }

  carregarAvisos() {
    this.carregandoAvisos.set(true);
    this.avisoService.buscarTodos().subscribe({
      next: (dados) => {
        this.avisos.set(dados);
        this.carregandoAvisos.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar avisos', err);
        this.carregandoAvisos.set(false);
      },
    });
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (file.size > 5 * 1024 * 1024) {
      this.dialog.open(GenericDialogComponent, {
        data: {
          titulo: 'Arquivo muito grande',
          mensagem: 'A imagem original deve ter no máximo 5MB para otimização do sistema.',
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

    try {
      this.carregandoUpload.set(true);

      const opcoes = {
        maxSizeMB: 0.4,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: 0.85,
      };

      const arquivoComprimido = await imageCompression(file, opcoes);

      const novoAviso = await this.avisoService.criar(arquivoComprimido);
      this.avisos.update((atual) => [novoAviso, ...atual]);
    } catch (error) {
      console.error('Erro no upload ou compressão', error);

      this.dialog.open(GenericDialogComponent, {
        data: {
          titulo: 'Falha no Envio',
          mensagem: 'Não foi possível processar e enviar a imagem. Tente novamente mais tarde.',
          textoConfirmar: 'Entendi',
          tipo: 'perigo',
          ocultarCancelar: true,
        },
        panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
        width: '90%',
        maxWidth: '400px',
      });
    } finally {
      this.carregandoUpload.set(false);
      input.value = '';
    }
  }

  excluirAviso(aviso: Aviso) {
    if (!aviso.id || !aviso.foto_url) return;

    const avisoId = aviso.id;
    const avisoFotoUrl = aviso.foto_url;

    const dialogRef = this.dialog.open(GenericDialogComponent, {
      data: {
        titulo: 'Excluir Aviso',
        mensagem:
          'Tem certeza que deseja remover este banner? Essa ação não pode ser desfeita e ele sumirá para todos os membros.',
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
          this.avisos.update((atual) => atual.filter((a) => a.id !== avisoId));
          await this.avisoService.excluir(avisoId, avisoFotoUrl);
        } catch (error) {
          console.error('Erro ao excluir', error);

          this.dialog.open(GenericDialogComponent, {
            data: {
              titulo: 'Erro na Exclusão',
              mensagem: 'Não foi possível excluir o banner. Verifique sua conexão.',
              textoConfirmar: 'Entendi',
              tipo: 'perigo',
              ocultarCancelar: true,
            },
            panelClass: ['!p-0', '!bg-transparent', '!shadow-none'],
            width: '90%',
            maxWidth: '400px',
          });
          this.carregarAvisos();
        }
      }
    });
  }
}
