import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../core/modules/material.module';
import { Membro } from '../../models/membro.model';
import { MembroService } from '../../../core/services/membro.service';
import { NotificationService } from '../../../core/services/notifications.service';

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

  ngOnInit() {
    this.membroLocal.set(this.membroInput());
    this.verificarStatusOracaoLocal();
  }

  private verificarStatusOracaoLocal(): void {
    const oracoesSalvas = JSON.parse(localStorage.getItem('oracoes_realizadas') || '[]');
    const id = this.membroLocal().id!;
    const totalBanco = this.membroLocal().total_oracoes || 0;

    if (totalBanco === 0) {
      const novaLista = oracoesSalvas.filter((savedId: string) => savedId !== id);
      localStorage.setItem('oracoes_realizadas', JSON.stringify(novaLista));
      this.jaOrou.set(false);
      return;
    }

    if (oracoesSalvas.includes(id)) {
      this.jaOrou.set(true);
    }
  }

  private salvarOracaoLocal(): void {
    const id = this.membroLocal().id!;
    const oracoesSalvas = JSON.parse(localStorage.getItem('oracoes_realizadas') || '[]');
    if (!oracoesSalvas.includes(id)) {
      oracoesSalvas.push(id);
      localStorage.setItem('oracoes_realizadas', JSON.stringify(oracoesSalvas));
    }
  }

  private removerOracaoLocal(): void {
    const id = this.membroLocal().id!;
    const oracoesSalvas = JSON.parse(localStorage.getItem('oracoes_realizadas') || '[]');
    const novaLista = oracoesSalvas.filter((savedId: string) => savedId !== id);
    localStorage.setItem('oracoes_realizadas', JSON.stringify(novaLista));
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
