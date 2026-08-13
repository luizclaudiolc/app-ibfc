import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { OracaoCardComponent } from '../../../../shared/components/oracao-card/oracao-card.component';
import { MembroService } from '../../../../core/services/membro.service';
import { Membro } from '../../../../shared/models/membro.model';
import { NotificationService } from '../../../../core/services/notifications.service';

@Component({
  selector: 'app-mural-oracoes',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent, OracaoCardComponent],
  templateUrl: './mural-oracoes.component.html',
})
export class MuralOracoesComponent implements OnInit {
  pedidos = signal<Membro[]>([]);
  carregando = signal<boolean>(true);

  private membroService = inject(MembroService);
  private notification = inject(NotificationService);
  private location = inject(Location);

  ngOnInit() {
    this.carregarPedidos();
  }

  carregarPedidos() {
    this.membroService.buscarPedidosOracao().subscribe({
      next: (dados) => {
        this.pedidos.set(dados);
        this.carregando.set(false);
      },
      error: () => {
        this.notification.erro('Erro ao carregar o mural.');
        this.carregando.set(false);
      },
    });
  }

  voltar(): void {
    this.location.back();
  }
}
