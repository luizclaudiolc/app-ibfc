import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../../core/modules/material.module';
import {
  DEPARTAMENTOS_DISPONIVEIS,
  ENiveisAcesso,
  EVENTOS_MAP,
} from '../../../../../shared/models/consts';
import { EscalaDialogComponent } from '../criar-escala-modal/escala-dialog.component';
import { EscalaService } from '../../../../../core/services/escala.service';
import { Escala } from '../../../../../shared/models/escala.model';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { AuthService } from '../../../../../core/services/auth.service';
import { NotificationService } from '../../../../../core/services/notifications.service';

@Component({
  selector: 'app-escalas',
  standalone: true,
  imports: [CommonModule, MaterialModule, PageLayoutComponent],
  templateUrl: './escalas.component.html',
})
export class EscalasComponent implements OnInit {
  private readonly notificationService = inject(NotificationService);
  private authService = inject(AuthService);
  private escalaService = inject(EscalaService);
  private dialog = inject(MatDialog);

  nivelUsuario = this.authService.obterUsuarioLogado().nivel;

  getSetorValido(): string | null {
    const setor = this.authService.obterUsuarioLogado().setor;
    return setor === 'null' || setor === 'undefined' || !setor ? null : setor;
  }
  setorUsuario = this.getSetorValido();

  isAdmin = computed(
    () =>
      this.nivelUsuario === ENiveisAcesso.Admin || this.nivelUsuario === ENiveisAcesso.SuperAdmin,
  );

  podeEditar(escala?: Escala): boolean {
    if (this.isAdmin()) return true;
    if (!this.setorUsuario || this.setorUsuario === 'membro') return false;

    if (escala) {
      return escala.departamento === this.setorUsuario;
    }
    return true;
  }

  isPassado(data: Date): boolean {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return data < hoje;
  }

  dataAtual = signal(new Date());
  diasDoMes = signal<{ data: Date; escalas: Escala[]; isMesAtual: boolean; isHoje: boolean }[]>([]);
  escalasRaw = signal<Escala[]>([]);

  mesFormatado = computed(() => {
    return this.dataAtual().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  });

  ngOnInit() {
    this.gerarCalendario(this.dataAtual());
    this.carregarEscalasMes();
  }

  obterNomeDepartamento(valor: string): string {
    const depto = DEPARTAMENTOS_DISPONIVEIS.find((d) => d.value === valor);
    return depto ? depto.label : valor;
  }

  obterNomeEvento(valor: string): string {
    return EVENTOS_MAP[valor] || valor;
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
    this.carregarEscalasMes();
  }

  carregarEscalasMes() {
    this.escalaService.buscarTodas(false).subscribe({
      next: (escalasDoBanco) => {
        const escalasVisiveis = this.isAdmin()
          ? escalasDoBanco
          : this.setorUsuario
            ? escalasDoBanco.filter(({ departamento }) => departamento === this.setorUsuario)
            : [];

        this.escalasRaw.set(escalasVisiveis);
        this.distribuirEscalasNosDias(escalasVisiveis);
      },
      error: (err) => {
        this.notificationService.erro('Erro ao carregar escalas. Por favor, tente novamente.');
        console.error('Erro ao carregar escalas', err);
      },
    });
  }

  distribuirEscalasNosDias(escalas: Escala[]) {
    const dias = this.diasDoMes().map((diaGrid) => {
      const dataStr = diaGrid.data.toISOString().split('T')[0];
      const escalasDoDia = escalas.filter((e) => e.data_escala === dataStr);
      return { ...diaGrid, escalas: escalasDoDia };
    });
    this.diasDoMes.set(dias);
  }

  abrirModalEscala(dia: Date, escalaExistente?: Escala) {
    const passado = this.isPassado(dia);
    const temPermissaoEdicao = this.podeEditar(escalaExistente);

    const modoLeitura = passado || !temPermissaoEdicao;

    if (modoLeitura && !escalaExistente && !passado) {
      return;
    }

    const dataStr = dia.toISOString().split('T')[0];
    const escalasDoDia = this.escalasRaw().filter((e) => e.data_escala === dataStr);

    const dialogRef = this.dialog.open(EscalaDialogComponent, {
      width: '90%',
      maxWidth: '450px',
      panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
      data: {
        data_escala: dia,
        escala: escalaExistente,
        escalas: escalasDoDia,
        isAdmin: this.isAdmin(),
        setorUsuario: this.setorUsuario,
        isReadOnly: modoLeitura,
      },
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado?.sucesso) {
        this.carregarEscalasMes();
      }
    });
  }
}
