import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { NotificationService } from '../../../../core/services/notifications.service';
import { Estudo } from '../../../../shared/models/estudos.model';
import { EstudoService } from '../../../../core/services/estudos.service';
import { BotaoCarregarMaisComponent } from '../../../../shared/components/botao-carregar-mais/botao-carregar-mais.component';
import { LIMITE_CARREGAMENTO_INICIAL } from '../../../../shared/models/consts';

@Component({
  selector: 'app-estudos',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PageLayoutComponent,
    PageHeaderComponent,
    BotaoCarregarMaisComponent,
  ],
  templateUrl: './estudos.component.html',
})
export class EstudosComponent implements OnInit {
  estudosRaw = signal<Estudo[]>([]);
  carregando = signal<boolean>(true);

  termoBusca = signal<string>('');
  limiteExibicao = signal<number>(LIMITE_CARREGAMENTO_INICIAL);

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

  estudosExibidos = computed(() => {
    return this.estudosFiltrados().slice(0, this.limiteExibicao());
  });

  mostrarBotaoCarregarMais = computed(() => {
    return this.estudosFiltrados().length > this.limiteExibicao();
  });

  aoBuscarEstudo(termo: string): void {
    this.termoBusca.set(termo);
    this.limiteExibicao.set(LIMITE_CARREGAMENTO_INICIAL);
  }

  carregarMaisEstudos(): void {
    this.limiteExibicao.update((valorAtual) => valorAtual + LIMITE_CARREGAMENTO_INICIAL);
  }

  async baixarPdf(url: string, titulo: string): Promise<void> {
    try {
      this.notification.aviso('Preparando download do arquivo...', 2000);

      const response = await fetch(url);
      if (!response.ok) throw new Error('Falha ao baixar o arquivo.');

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;

      const nomeFormatado = titulo
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '_')
        .replace(/_+/g, '_');

      link.download = `${nomeFormatado}.pdf`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      this.notification.sucesso('Download concluído!');
    } catch (error) {
      console.error('Erro no download:', error);
      window.open(url, '_blank');
    }
  }
}
