import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../../core/modules/material.module';
import { AvisoService } from '../../../../core/services/aviso.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { Aviso } from '../../../../shared/models/aviso.model';

@Component({
  selector: 'app-avisos-admin',
  standalone: true,
  imports: [CommonModule, MaterialModule, HeaderComponent, FooterComponent],
  templateUrl: './avisos-admin.component.html',
})
export class AvisosAdminComponent implements OnInit {
  nomeUsuario = signal<string>(localStorage.getItem('user_nome') || 'Líder');
  fotoUsuario = signal<string>(localStorage.getItem('user_foto') || '');

  avisos = signal<Aviso[]>([]);
  carregandoAvisos = signal<boolean>(true);
  carregandoUpload = signal<boolean>(false);

  private avisoService = inject(AvisoService);

  ngOnInit() {
    this.carregarAvisos();
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
