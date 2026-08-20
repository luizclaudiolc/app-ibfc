import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { PlanoLeituraService } from '../../../../core/services/plano-leitura.service';
import { ItemPlanoLeitura, PlanoLeitura } from '../../../../shared/models/plano-leitura.const';
import { LeituraBiblicaDialogComponent } from '../../../../shared/components/leitura-biblica-dialog/leitura-biblica-dialog.component';

@Component({
  selector: 'app-plano-leitura',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent, PageHeaderComponent],
  templateUrl: './plano-leitura.component.html',
})
export class PlanoLeituraComponent implements OnInit {
  private planoService = inject(PlanoLeituraService);
  private dialog = inject(MatDialog);

  carregando = signal<boolean>(true);

  planos = signal<PlanoLeitura[]>([]);
  planoSelecionado = signal<PlanoLeitura | null>(null);

  progressoGeral = signal<Record<string, number[]>>({});

  progressoDoPlanoAtual = computed(() => {
    const plano = this.planoSelecionado();
    if (!plano) return [];
    return this.progressoGeral()[plano.id] || [];
  });

  porcentagemConclusao = computed(() => {
    const plano = this.planoSelecionado();
    if (!plano || plano.dias.length === 0) return 0;
    const lidos = this.progressoDoPlanoAtual().length;
    return Math.round((lidos / plano.dias.length) * 100);
  });

  proximoDiaPendente = computed(() => {
    const plano = this.planoSelecionado();
    if (!plano) return null;
    const lidos = this.progressoDoPlanoAtual();
    const pendentes = plano.dias.filter((item) => !lidos.includes(item.dia));
    return pendentes.length > 0 ? pendentes[0].dia : null;
  });

  ngOnInit() {
    const listaPlanos = this.planoService.obterPlanos();
    this.planos.set(listaPlanos);
    if (listaPlanos.length > 0) {
      this.planoSelecionado.set(listaPlanos[0]);
    }
    this.carregarProgresso();
  }

  carregarProgresso() {
    this.carregando.set(true);
    this.planoService.obterProgressoUsuario().subscribe({
      next: (progressoObj) => {
        this.progressoGeral.set(progressoObj || {});
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar progresso', err);
        this.carregando.set(false);
      },
    });
  }

  selecionarPlano(plano: PlanoLeitura) {
    this.planoSelecionado.set(plano);
  }

  diaJaLido(dia: number): boolean {
    return this.progressoDoPlanoAtual().includes(dia);
  }

  abrirLeitura(item: ItemPlanoLeitura) {
    const plano = this.planoSelecionado();
    if (!plano) return;

    const dialogRef = this.dialog.open(LeituraBiblicaDialogComponent, {
      data: {
        planoId: plano.id,
        dia: item.dia,
        referencia: item.referencia,
        titulo: item.titulo,
        progressoAtualGeral: this.progressoGeral(),
      },
      panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
      width: '90%',
      maxWidth: '500px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((foiConcluido) => {
      if (foiConcluido) {
        this.carregarProgresso();
      }
    });
  }
}
