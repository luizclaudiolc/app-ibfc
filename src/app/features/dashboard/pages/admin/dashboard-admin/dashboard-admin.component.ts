import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartConfiguration,
  ChartOptions,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import {
  DashboardData,
  EstatisticasService,
} from '../../../../../core/services/estatisticas.service';
import { PageHeaderComponent } from '../../../../../shared/components/page-header/page-header.component';
import { SkeletonCardComponent } from '../../../../../shared/components/app-skeleton-card/app-skeleton-card.component';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PageLayoutComponent,
    BaseChartDirective,
    PageHeaderComponent,
    SkeletonCardComponent,
  ],
  templateUrl: './dashboard-admin.component.html',
})
export class DashboardAdminComponent implements OnInit {
  private estatisticasService = inject(EstatisticasService);
  private router = inject(Router);

  carregando = signal(true);
  dados = signal<DashboardData | null>(null);

  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    elements: {
      arc: {
        borderWidth: 0,
        hoverOffset: 4,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { family: 'Inter', size: 11, weight: 'bold' },
        },
      },
      tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 },
    },
    layout: { padding: 0 },
  };

  chartDataGenero!: ChartConfiguration<'doughnut'>['data'];
  chartDataCivil!: ChartConfiguration<'doughnut'>['data'];
  chartDataMinisterios!: ChartConfiguration<'doughnut'>['data'];

  ngOnInit() {
    this.estatisticasService.obterEstatisticas().subscribe((res) => {
      this.dados.set(res);

      this.chartDataGenero = {
        labels: res.genero.labels,
        datasets: [
          {
            data: res.genero.data,
            backgroundColor: ['#3b82f6', '#ec4899'],
          },
        ],
      };

      this.chartDataCivil = {
        labels: res.estadoCivil.labels,
        datasets: [
          {
            data: res.estadoCivil.data,
            backgroundColor: ['#10b981', '#f59e0b', '#6366f1', '#64748b'],
          },
        ],
      };

      this.chartDataMinisterios = {
        labels: res.ministeriosCount.labels,
        datasets: [
          {
            data: res.ministeriosCount.data,
            backgroundColor: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'],
          },
        ],
      };

      this.carregando.set(false);
    });
  }

  irParaAdminMembros() {
    this.router.navigate(['/dashboard/admin']);
  }
}
