import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../core/modules/material.module';
import { PulsoService } from '../../../core/services/pulso.service';
import { NotificationService } from '../../../core/services/notifications.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subject, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-pulso-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './pulso-card.component.html',
})
export class PulsoCardComponent implements OnInit {
  jaVotou = signal<boolean>(false);
  carregando = signal<boolean>(false);
  visivel = signal<boolean>(true);
  destroy$ = new Subject<void>();

  private pulsoService = inject(PulsoService);
  private notification = inject(NotificationService);
  private authService = inject(AuthService);

  ngOnInit() {
    const semanaAtual = this.pulsoService.getSemanaAtual();

    const semanaVotadaNoCache = this.authService.obterSemanaVotadaPulso();

    if (semanaVotadaNoCache === semanaAtual) {
      this.visivel.set(false);
    }
  }

  votar(status: number) {
    if (this.carregando() || this.jaVotou()) return;

    this.carregando.set(true);
    const semanaAtual = this.pulsoService.getSemanaAtual();

    this.pulsoService.registrarCheckin(status).subscribe({
      next: (res) => {
        this.carregando.set(false);
        if (res.sucesso) {
          this.authService.salvarSemanaVotadaPulso(semanaAtual);

          this.jaVotou.set(true);

          timer(4000)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(() => {
              this.visivel.set(false);
            });
        } else {
          this.notification.erro(res.mensagem || 'Erro ao registrar resposta.');
        }
      },
      error: () => {
        this.carregando.set(false);
        this.notification.erro('Erro de comunicação.');
      },
    });
  }
}
