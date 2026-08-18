import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { MaterialModule } from '../../../../core/modules/material.module';
import { AuthService } from '../../../../core/services/auth.service';
import { SessaoUsuario } from '../../../../shared/models/sessaoUsuario';
import {
  DEPARTAMENTOS_DISPONIVEIS_MAP,
  MINISTERIOS_DISPONIVEIS,
} from '../../../../shared/models/consts';

@Component({
  selector: 'app-carteirinha',
  standalone: true,
  imports: [CommonModule, MaterialModule, QRCodeComponent],
  templateUrl: './carteirinha.component.html',
})
export class CarteirinhaComponent implements OnInit {
  private authService = inject(AuthService);
  private location = inject(Location);

  dadosMembro = signal<SessaoUsuario | null>(null);
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

  voltar() {
    this.location.back();
  }
}
