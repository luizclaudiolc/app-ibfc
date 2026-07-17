import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../../core/modules/material.module';
import { MembroService } from '../../../../core/services/membro.service';
import { AvisoService } from '../../../../core/services/aviso.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { SelecionarLiderDialogComponent } from './selecionar-lider-dialog/selecionar-lider-dialog';
import { EditarMembroDialogComponent } from './editar-membro-modal/editar-membro-dialog.component';
import { Membro } from '../../../../shared/models/membro.model';
import { Aviso } from '../../../../shared/models/aviso.model';

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

  avisos = signal<Aviso[]>([]);
  carregandoAvisos = signal<boolean>(true);
  carregandoUpload = signal<boolean>(false);

  private dialog = inject(MatDialog);
  private membroService = inject(MembroService);
  private avisoService = inject(AvisoService);

  membrosFiltrados = computed(() => {
    const busca = this.termoBusca()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const lista = this.membrosRaw();

    let resultadoBusca = lista;

    if (busca) {
      resultadoBusca = lista.filter((membro) => {
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
    }

    return [...resultadoBusca].sort((a, b) => {
      if (a.status === 'ATIVO' && b.status === 'INATIVO') return -1;
      if (a.status === 'INATIVO' && b.status === 'ATIVO') return 1;

      return a.nome.localeCompare(b.nome);
    });
  });

  ngOnInit() {
    this.carregarMembros();
    this.carregarAvisos();
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

  carregarAvisos() {
    this.carregandoAvisos.set(true);
    this.avisoService.buscarTodos().subscribe({
      next: (dados) => {
        this.avisos.set(dados);
        this.carregandoAvisos.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar avisos', err);
        this.carregandoAvisos.set(false);
      },
    });
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 5MB.');
      input.value = '';
      return;
    }

    try {
      this.carregandoUpload.set(true);
      const novoAviso = await this.avisoService.criar(file);

      this.avisos.update((atual) => [novoAviso, ...atual]);
    } catch (error) {
      console.error('Erro no upload', error);
      alert('Falha ao enviar a imagem. Tente novamente.');
    } finally {
      this.carregandoUpload.set(false);
      input.value = '';
    }
  }

  async excluirAviso(aviso: Aviso) {
    if (!aviso.id || !aviso.foto_url || !confirm('Tem certeza que deseja remover este banner?'))
      return;

    try {
      this.avisos.update((atual) => atual.filter((a) => a.id !== aviso.id));
      await this.avisoService.excluir(aviso.id, aviso.foto_url);
    } catch (error) {
      console.error('Erro ao excluir', error);
      alert('Erro ao excluir o banner.');
      this.carregarAvisos();
    }
  }
}
