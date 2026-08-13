import { Component, input, output, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aviso } from '../../models/aviso.model';
import { MaterialModule } from '../../../core/modules/material.module';
import { AvisoService } from '../../../core/services/aviso.service';
import { NotificationService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-aviso-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './card-aviso.component.html',
})
export class CardAvisoComponent implements OnInit {
  aviso = input.required<Aviso>();
  ampliar = output<void>();

  avisoLocal = signal<Aviso>({} as Aviso);
  jaConfirmou = signal<boolean>(false);
  carregando = signal<boolean>(false);

  private avisoService = inject(AvisoService);
  private notification = inject(NotificationService);

  ngOnInit() {
    this.avisoLocal.set(this.aviso());
    this.verificarStatusLocal();
  }

  private verificarStatusLocal(): void {
    const leiturasSalvas = JSON.parse(localStorage.getItem('avisos_confirmados') || '[]');
    const id = this.avisoLocal().id;

    if (leiturasSalvas.includes(id)) {
      this.jaConfirmou.set(true);
    }
  }

  private salvarLocal(): void {
    const id = this.avisoLocal().id;
    const leiturasSalvas = JSON.parse(localStorage.getItem('avisos_confirmados') || '[]');
    if (!leiturasSalvas.includes(id)) {
      leiturasSalvas.push(id);
      localStorage.setItem('avisos_confirmados', JSON.stringify(leiturasSalvas));
    }
  }

  confirmarLeitura(): void {
    if (this.jaConfirmou() || this.carregando()) return;

    this.carregando.set(true);
    this.jaConfirmou.set(true);
    this.salvarLocal();

    const totalAtual = this.avisoLocal().total_confirmacoes || 0;
    this.avisoLocal.update((a) => ({ ...a, total_confirmacoes: totalAtual + 1 }));

    this.avisoService.confirmarLeitura(this.avisoLocal().id!).subscribe({
      next: (res) => {
        this.carregando.set(false);
        if (res.sucesso) {
          this.notification.sucesso('Confirmação registrada. Deus abençoe!');
        } else {
          this.reverter(totalAtual);
          this.notification.erro('Não foi possível registrar.');
        }
      },
      error: () => {
        this.carregando.set(false);
        this.reverter(totalAtual);
        this.notification.erro('Erro de comunicação.');
      },
    });
  }

  private reverter(totalAnterior: number): void {
    this.jaConfirmou.set(false);
    const leiturasSalvas = JSON.parse(localStorage.getItem('avisos_confirmados') || '[]');
    const novaLista = leiturasSalvas.filter((id: string) => id !== this.avisoLocal().id);
    localStorage.setItem('avisos_confirmados', JSON.stringify(novaLista));
    this.avisoLocal.update((a) => ({ ...a, total_confirmacoes: totalAnterior }));
  }
}
