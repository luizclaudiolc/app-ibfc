import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { NotificationService } from '../../../../core/services/notifications.service';
import { Estudo } from '../../../../shared/models/estudos.model';
import { EstudoService } from '../../../../core/services/estudos.service';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent],
  templateUrl: './estudos.component.html',
})
export class EstudosComponent implements OnInit {
  estudosRaw = signal<Estudo[]>([]);
  carregando = signal<boolean>(true);
  termoBusca = signal('');

  private estudoService = inject(EstudoService);
  private notification = inject(NotificationService);

  ngOnInit() {
    this.carregarEstudos();
  }

  carregarEstudos() {
    this.carregando.set(true);
    this.estudoService.buscarTodos().subscribe({
      next: (dados) => {
        this.estudosRaw.set(dados);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error(err);
        this.notification.erro('Não foi possível carregar a biblioteca de estudos.');
        this.carregando.set(false);
      },
    });
  }

  estudosFiltrados = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    if (!busca) return this.estudosRaw();

    return this.estudosRaw().filter((e) =>
      `${e.titulo} ${e.descricao || ''}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(busca),
    );
  });
}
