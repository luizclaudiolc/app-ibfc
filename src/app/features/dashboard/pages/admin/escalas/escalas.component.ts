import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { ENiveisAcesso } from '../../../../../shared/models/consts';
import { EscalaDialogComponent } from '../criar-escala-modal/escala-dialog.component';
import { EscalaService } from '../../../../../core/services/escala.service';

@Component({
  selector: 'app-escalas',
  standalone: true,
  imports: [CommonModule, MaterialModule, HeaderComponent, FooterComponent],
  templateUrl: './escalas.component.html',
})
export class EscalasComponent implements OnInit {
  nomeUsuario = signal<string>(localStorage.getItem('user_nome') || 'Irmão(ã)');
  fotoUsuario = signal<string>(localStorage.getItem('user_foto') || '');
  nivelUsuario = localStorage.getItem('user_nivel') || 'MEMBRO';
  setorUsuario = localStorage.getItem('user_setor');

  isAdmin = computed(() => this.nivelUsuario === ENiveisAcesso.Admin);
  podeGerenciarEscala = computed(() => this.isAdmin() || !!this.setorUsuario);

  dataAtual = signal(new Date());
  diasDoMes = signal<{ data: Date; escalas: any[]; isMesAtual: boolean; isHoje: boolean }[]>([]);
  escalasRaw = signal<any[]>([]);

  mesFormatado = computed(() => {
    return this.dataAtual().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  });

  private escalaService = inject(EscalaService);
  private dialog = inject(MatDialog);

  ngOnInit() {
    this.gerarCalendario(this.dataAtual());
    this.carregarEscalasMes(this.dataAtual());
  }

  gerarCalendario(dataBase: Date) {
    const ano = dataBase.getFullYear();
    const mes = dataBase.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const dias: any[] = [];
    const stringHoje = new Date().toDateString();

    const diaDaSemanaPrimeiro = primeiroDia.getDay();
    for (let i = diaDaSemanaPrimeiro - 1; i >= 0; i--) {
      const dataDia = new Date(ano, mes, -i);
      dias.push({
        data: dataDia,
        escalas: [],
        isMesAtual: false,
        isHoje: dataDia.toDateString() === stringHoje,
      });
    }

    for (let i = 1; i <= ultimoDia.getDate(); i++) {
      const dataDia = new Date(ano, mes, i);
      dias.push({
        data: dataDia,
        escalas: [],
        isMesAtual: true,
        isHoje: dataDia.toDateString() === stringHoje,
      });
    }
    this.diasDoMes.set(dias);
  }

  mudarMes(delta: number) {
    const novaData = new Date(
      this.dataAtual().getFullYear(),
      this.dataAtual().getMonth() + delta,
      1,
    );
    this.dataAtual.set(novaData);
    this.gerarCalendario(novaData);
    this.carregarEscalasMes(novaData);
  }

  carregarEscalasMes(data: Date) {
    this.escalaService.buscarTodas().subscribe({
      next: (escalasDoBanco) => {
        this.escalasRaw.set(escalasDoBanco);
        this.distribuirEscalasNosDias(escalasDoBanco);
      },
      error: (err) => {
        console.error('Erro ao buscar escalas do Supabase:', err);
      },
    });
  }

  distribuirEscalasNosDias(escalas: any[]) {
    const dias = this.diasDoMes().map((diaGrid) => {
      const dataStr = diaGrid.data.toISOString().split('T')[0];
      const escalasDoDia = escalas.filter((e) => e.data_escala === dataStr);
      return { ...diaGrid, escalas: escalasDoDia };
    });
    this.diasDoMes.set(dias);
  }

  abrirModalEscala(dia: Date, escalaExistente?: any) {
    if (!this.podeGerenciarEscala()) return;

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dia < hoje) {
      return;
    }

    const dialogRef = this.dialog.open(EscalaDialogComponent, {
      width: '90%',
      maxWidth: '450px',
      panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
      data: {
        data_escala: dia,
        escala: escalaExistente,
        isAdmin: this.isAdmin(),
        setorUsuario: this.setorUsuario,
      },
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado?.sucesso) {
        this.carregarEscalasMes(this.dataAtual());
      }
    });
  }
}
