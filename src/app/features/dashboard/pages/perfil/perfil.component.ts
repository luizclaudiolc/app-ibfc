import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MembroService } from '../../../../core/services/membro.service';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  carregando = signal<boolean>(false);
  carregandoDados = signal<boolean>(true);
  mensagemSucesso = signal<string>('');
  mensagemErro = signal<string>('');
  previewFoto = signal<string>(localStorage.getItem('user_foto') || '');

  formPerfil = {
    nome: '',
    sobrenome: '',
    telefone: '',
    data_nascimento: '',
  };

  constructor(
    private membroService: MembroService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.carregarDadosPerfil();
  }

  async carregarDadosPerfil() {
    this.carregandoDados.set(true);

    this.membroService.buscarMeuPerfil().subscribe({
      next: (res) => {
        if (res) {
          this.formPerfil = {
            nome: res.nome || '',
            sobrenome: res.sobrenome || '',
            telefone: res.telefone || '',
            data_nascimento: res.data_nascimento || '',
          };
        }
        this.carregandoDados.set(false);
      },
    });
  }

  salvarAlteracoes(): void {
    this.carregando.set(true);
    this.mensagemSucesso.set('');
    this.mensagemErro.set('');

    this.membroService.atualizarPerfil(this.formPerfil).subscribe({
      next: (res) => {
        this.carregando.set(false);
        if (res.sucesso) {
          this.mensagemSucesso.set('Perfil atualizado com sucesso!');
        } else {
          this.mensagemErro.set(res.mensagem || 'Erro ao salvar.');
        }
      },
    });
  }

  aoSelecionarFoto(event: any): void {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    this.carregando.set(true);
    this.membroService.atualizarFotoPerfil(arquivo).subscribe({
      next: (res) => {
        this.carregando.set(false);
        if (res.sucesso && res.fotoUrl) {
          this.previewFoto.set(res.fotoUrl);
          localStorage.setItem('user_foto', res.fotoUrl);
          this.mensagemSucesso.set('Foto atualizada!');
        }
      },
    });
  }

  cancelar(): void {
    this.router.navigate(['dashboard/home']);
  }
}
