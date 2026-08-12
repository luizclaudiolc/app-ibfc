import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MembroService } from '../../../../core/services/membro.service';
import { Membro } from '../../../../shared/models/membro.model';
import { MaterialModule } from '../../../../core/modules/material.module';
import {
  DEPARTAMENTOS_DISPONIVEIS_MAP,
  GRADIENTES_PASTEIS,
} from '../../../../shared/models/consts';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewDialogComponent } from '../../../../shared/components/img-preview/image-preview-dialog.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';

@Component({
  selector: 'app-membro-perfil',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent],
  templateUrl: './perfil-membro.component.html',
})
export class PerfilMembroComponent implements OnInit {
  membro = signal<Membro | null>(null);
  carregando = signal<boolean>(true);
  erro = signal<boolean>(false);

  corFundoCard = signal<string>('');

  private route = inject(ActivatedRoute);
  private membroService = inject(MembroService);
  private location = inject(Location);
  private dialog = inject(MatDialog);

  departamentos = DEPARTAMENTOS_DISPONIVEIS_MAP;
  gradientesPasteis = GRADIENTES_PASTEIS;

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
        } else {
          this.erro.set(true);
        }
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set(true);
        this.carregando.set(false);
      },
    });
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
    const dia = parseInt(partes[2], 10);
    const mes = parseInt(partes[1], 10) - 1;

    return `${dia} de ${meses[mes]}`;
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
}
