import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { MembroService } from '../../../../core/services/membro.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { SelecionarLiderDialogComponent } from './selecionar-lider-dialog/selecionar-lider-dialog';
import { EditarMembroDialogComponent } from './editar-membro-modal/editar-membro-dialog.component';
import { Membro } from '../../../../shared/models/membro.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MaterialModule, HeaderComponent, FooterComponent],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent implements OnInit {
  nomeUsuario = signal<string>(localStorage.getItem('user_nome') || 'Admin');
  fotoUsuario = signal<string>(localStorage.getItem('user_foto') || '');

  membrosRaw = signal<Membro[]>([]);
  termoBusca = signal<string>('');

  carregando = signal<boolean>(true);
  erroMembros = signal<string>('');

  private dialog = inject(MatDialog);
  private membroService = inject(MembroService);

  membrosFiltrados = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const lista = this.membrosRaw();

    if (!busca) return lista;

    return lista.filter((membro) => {
      const nomeCompleto = `${membro.nome} ${membro.sobrenome}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      const email = membro.email.toLowerCase();
      const setor = membro.setor_responsavel?.toLowerCase();
      const cargo = membro.cargo?.toLowerCase();

      return (
        nomeCompleto.includes(busca) ||
        email.includes(busca) ||
        setor?.includes(busca) ||
        cargo?.includes(busca)
      );
    });
  });

  ngOnInit() {
    this.carregarMembros();
  }

  carregarMembros() {
    this.carregando.set(true);
    this.erroMembros.set('');

    this.membroService.buscarTodos(true).subscribe({
      next: (dados) => {
        this.membrosRaw.set(dados);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar membros no Admin:', err);
        this.erroMembros.set('Não foi possível carregar a lista de membros no momento.');
        this.carregando.set(false);
      },
    });
  }

  abrirModalLideranca() {
    this.dialog.open(SelecionarLiderDialogComponent, {
      width: '400px',
    });
  }

  abrirEdicaoMembro(membro: any) {
    const dialogRef = this.dialog.open(EditarMembroDialogComponent, {
      width: '90%',
      maxWidth: '500px',
      data: membro,
      panelClass: ['!p-0', '!rounded-3xl', '!overflow-hidden'],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado && resultado.sucesso) {
        const dadosAtualizados = resultado.dadosAtualizados;

        const listaAtual = this.membrosRaw();
        const index = listaAtual.findIndex((m) => m.id === dadosAtualizados.id);

        if (index !== -1) {
          listaAtual[index] = dadosAtualizados;
          this.membrosRaw.set([...listaAtual]);
        }
      }
    });
  }
}
