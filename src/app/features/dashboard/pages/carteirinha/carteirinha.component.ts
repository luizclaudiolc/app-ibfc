import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

import { MaterialModule } from '../../../../core/modules/material.module';
import { AuthService } from '../../../../core/services/auth.service';
import {
  DEPARTAMENTOS_DISPONIVEIS_MAP,
  MINISTERIOS_DISPONIVEIS,
} from '../../../../shared/models/consts';
import { SessaoUsuario } from '../../../../shared/models/sessaoUsuario';

@Component({
  selector: 'app-carteirinha',
  standalone: true,
  imports: [CommonModule, MaterialModule, QRCodeComponent],
  templateUrl: './carteirinha.component.html',
})
export class CarteirinhaComponent implements OnInit {
  private authService = inject(AuthService);
  private location = inject(Location);

  @ViewChild('carteirinhaCard') carteirinhaCard!: ElementRef<HTMLElement>;

  dadosMembro = signal<SessaoUsuario | null>(null);
  gerandoPdf = signal<boolean>(false);
  departamentos = DEPARTAMENTOS_DISPONIVEIS_MAP;

  ngOnInit() {
    const sessao = this.authService.obterUsuarioLogado();
    this.dadosMembro.set(sessao);
  }

  obterMinisteriosFormatados(): string[] {
    const ministeriosChaves = this.dadosMembro()?.ministerios || [];

    return ministeriosChaves.map((chave) => {
      const encontrado = MINISTERIOS_DISPONIVEIS.find((m) => m.value === chave);
      return encontrado ? encontrado.label : chave;
    });
  }

  obterDadosQrCode(): string {
    const membro = this.dadosMembro();
    if (!membro) return '';
    const baseUrl = window.location.origin;
    return `${baseUrl}/admin/validar?email=${encodeURIComponent(membro.email)}`;
  }

  async exportarPdf(): Promise<void> {
    if (!this.carteirinhaCard || this.gerandoPdf()) return;

    this.gerandoPdf.set(true);

    try {
      const elemento = this.carteirinhaCard.nativeElement;

      const dataUrl = await toPng(elemento, {
        pixelRatio: 3,
        fontEmbedCSS: '',
        cacheBust: true,
      });

      const larguraPx = elemento.offsetWidth;
      const alturaPx = elemento.offsetHeight;
      const proporcao = alturaPx / larguraPx;

      const larguraCrachaMm = 65;
      const alturaCrachaMm = larguraCrachaMm * proporcao;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const margemTopo = 20;
      const centroX = (210 - larguraCrachaMm) / 2;

      pdf.addImage(dataUrl, 'PNG', centroX, margemTopo, larguraCrachaMm, alturaCrachaMm);

      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.2);
      pdf.rect(centroX, margemTopo, larguraCrachaMm, alturaCrachaMm);

      const nomeArquivo = this.dadosMembro()?.nome
        ? `credencial-${this.dadosMembro()?.nome.toLowerCase().replace(/\s+/g, '-')}.pdf`
        : 'credencial-membro.pdf';

      pdf.save(nomeArquivo);
    } catch (error) {
      console.error('Erro ao gerar o PDF da credencial:', error);
    } finally {
      this.gerandoPdf.set(false);
    }
  }

  voltar() {
    this.location.back();
  }
}
