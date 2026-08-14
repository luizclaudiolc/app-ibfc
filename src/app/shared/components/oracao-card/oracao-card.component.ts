import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../core/modules/material.module';
import { Membro } from '../../models/membro.model';
import { MembroService } from '../../../core/services/membro.service';
import { NotificationService } from '../../../core/services/notifications.service';
import { AuthService } from '../../../core/services/auth.service'; // <-- Importado aqui

@Component({
  selector: 'app-oracao-card',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './oracao-card.component.html',
})
export class OracaoCardComponent implements OnInit {
  membroInput = input.required<Membro>();

  membroLocal = signal<Membro>({} as Membro);
  jaOrou = signal<boolean>(false);
  carregando = signal<boolean>(false);

  private membroService = inject(MembroService);
  private notification = inject(NotificationService);
  private authService = inject(AuthService); // <-- Injetado aqui

  ngOnInit() {
    this.membroLocal.set(this.membroInput());
    this.verificarStatusOracaoLocal();
  }

  private verificarStatusOracaoLocal(): void {
    const oracoesSalvas = this.authService.obterOracoesRealizadas();
    const id = this.membroLocal().id!;
    const totalBanco = this.membroLocal().total_oracoes || 0;

    if (totalBanco === 0) {
      this.authService.removerOracaoRealizada(id);
      this.jaOrou.set(false);
      return;
    }

    if (oracoesSalvas.includes(id)) {
      this.jaOrou.set(true);
    }
  }

  private salvarOracaoLocal(): void {
    this.authService.adicionarOracaoRealizada(this.membroLocal().id!);
  }

  private removerOracaoLocal(): void {
    this.authService.removerOracaoRealizada(this.membroLocal().id!);
  }

  orarPorMembro(): void {
    if (this.jaOrou() || this.carregando()) return;

    this.carregando.set(true);
    this.jaOrou.set(true);
    this.salvarOracaoLocal();

    const totalAtual = this.membroLocal().total_oracoes || 0;
    this.membroLocal.update((m) => ({ ...m, total_oracoes: totalAtual + 1 }));

    this.membroService.incrementarOracao(this.membroLocal().id!).subscribe({
      next: (res) => {
        this.carregando.set(false);
        if (!res.sucesso) {
          this.reverterOracao(totalAtual);
          this.notification.erro('Falha ao registrar oração.');
        }
      },
      error: () => {
        this.carregando.set(false);
        this.reverterOracao(totalAtual);
        this.notification.erro('Erro de comunicação.');
      },
    });
  }

  private reverterOracao(totalAnterior: number): void {
    this.jaOrou.set(false);
    this.removerOracaoLocal();
    this.membroLocal.update((m) => ({ ...m, total_oracoes: totalAnterior }));
  }
}
