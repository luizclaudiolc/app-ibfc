import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  carregando = signal<boolean>(false);
  mensagemErro = signal<string>('');
  mensagemSucesso = signal<string>('');

  previewFoto = signal<string>('');
  arquivoFotoSelecionado: File | null = null;

  formCadastro = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    telefone: '',
    dataNascimento: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  aoSelecionarFoto(event: any): void {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    if (arquivo.size > 2 * 1024 * 1024) {
      this.mensagemErro.set('A imagem deve ter no máximo 2MB.');
      return;
    }

    this.mensagemErro.set('');
    this.arquivoFotoSelecionado = arquivo;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewFoto.set(reader.result as string);
    };
    reader.readAsDataURL(arquivo);
  }

  submeterCadastro(): void {
    const f = this.formCadastro;
    this.carregando.set(true);
    this.mensagemErro.set('');

    if (!f.nome || !f.sobrenome || !f.email || !f.senha) {
      this.mensagemErro.set('Preencha todos os campos obrigatórios.');
      this.carregando.set(false);
      return;
    }

    const dataSupabase = f.dataNascimento ? f.dataNascimento : '';

    const dadosEnvio = {
      nome: f.nome.trim(),
      sobrenome: f.sobrenome.trim(),
      email: f.email.trim().toLowerCase(),
      senha: f.senha,
      telefone: f.telefone.replace(/\D/g, ''),
      aniversario: dataSupabase,
      foto: this.arquivoFotoSelecionado,
    };

    this.authService.cadastrar(dadosEnvio).subscribe({
      next: (res) => {
        if (res.sucesso) {
          this.mensagemSucesso.set('Cadastro realizado com sucesso! Redirecionando...');
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2500);
        } else {
          this.mensagemErro.set(res.mensagem || 'Erro ao realizar cadastro.');
          this.carregando.set(false);
        }
      },
      error: (err) => {
        this.mensagemErro.set('Erro ao processar o cadastro. Tente novamente.');
        this.carregando.set(false);
        console.error(err);
      },
    });
  }
}
