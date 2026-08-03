import { inject, Injectable, NgZone, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Membro, UsuarioCadastro, UsuarioLogado } from '../../shared/models/membro.model';
import { SupabaseService } from './supabase';
import { ECargos, ENiveisAcesso, EStatusMembro } from '../../shared/models/consts';

export interface RespostaLogin {
  sucesso: boolean;
  usuario?: UsuarioLogado;
  mensagem?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabaseService = inject(SupabaseService);
  private router = inject(Router);
  private ngZone = inject(NgZone);

  fotoUsuario$ = signal<string | null>(localStorage.getItem('user_foto'));
  nomeUsuario$ = signal<string>(localStorage.getItem('user_nome') || 'Irmão(ã)');

  constructor() {
    this.iniciarObservadorDeSessao();
  }

  atualizarFotoGlobal(url: string | null): void {
    this.fotoUsuario$.set(url);
    if (url) {
      localStorage.setItem('user_foto', url);
    } else {
      localStorage.removeItem('user_foto');
    }
  }

  atualizarNomeGlobal(nome: string): void {
    this.nomeUsuario$.set(nome);
    localStorage.setItem('user_nome', nome);
  }

  private iniciarObservadorDeSessao() {
    this.supabaseService.supabase.auth.onAuthStateChange((event, session) => {
      this.ngZone.run(() => {
        if (event === 'SIGNED_OUT') {
          this.limparSessaoLocal();
          this.router.navigate(['/login']);
        } else if (event === 'TOKEN_REFRESHED') {
          const currentUrl = this.router.url;
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl]);
          });
        }
      });
    });
  }

  private limparSessaoLocal(): void {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_nome');
    localStorage.removeItem('user_nivel');
    localStorage.removeItem('user_setor');
    localStorage.removeItem('user_foto');

    this.fotoUsuario$.set(null);
    this.nomeUsuario$.set('Irmão(ã)');
  }

  login(email: string, senha: string): Observable<RespostaLogin> {
    return from(this.executarLoginSupabase(email, senha));
  }

  private async executarLoginSupabase(email: string, senha: string): Promise<RespostaLogin> {
    try {
      const { data: authData, error: authError } =
        await this.supabaseService.supabase.auth.signInWithPassword({
          email,
          password: senha,
        });

      if (authError) throw new Error('E-mail ou senha incorretos.');

      const { data: perfil, error: perfilError } = await this.supabaseService.supabase
        .from('membros')
        .select('*')
        .eq('id', authData.user!.id)
        .single();

      if (perfilError || !perfil) throw new Error('Perfil não encontrado.');

      if (perfil.status === EStatusMembro.INATIVO) {
        await this.supabaseService.supabase.auth.signOut();
        throw new Error('Sua conta está inativa. Entre em contato com a administração.');
      }

      this.atualizarLocalStorage(perfil);

      return { sucesso: true, usuario: perfil };
    } catch (error: any) {
      return { sucesso: false, mensagem: error.message };
    }
  }

  private atualizarLocalStorage(perfil: Membro): void {
    console.log({ perfil });

    localStorage.setItem('user_email', perfil.email);
    localStorage.setItem('user_nivel', perfil.nivel_acesso);

    if (perfil.setor_responsavel) {
      localStorage.setItem('user_setor', perfil.setor_responsavel);
    } else {
      localStorage.removeItem('user_setor');
    }

    this.atualizarNomeGlobal(`${perfil.nome} ${perfil.sobrenome}`);
    this.atualizarFotoGlobal(perfil.foto_url || null);
  }

  cadastrar(membro: UsuarioCadastro): Observable<{ sucesso: boolean; mensagem: string }> {
    return from(this.executarCadastroSupabase(membro));
  }

  private async executarCadastroSupabase(
    membro: UsuarioCadastro,
  ): Promise<{ sucesso: boolean; mensagem: string }> {
    try {
      const { data: authData, error: authError } = await this.supabaseService.supabase.auth.signUp({
        email: membro.email,
        password: membro.senha,
      });

      if (authError) throw new Error(authError.message);
      if (!authData.user) throw new Error('Erro ao gerar identificação do usuário.');

      let urlDaFoto = null;

      if (membro.foto) {
        const extensao = membro.foto.name.split('.').pop();
        const nomeArquivo = `${authData.user.id}-perfil.${extensao}`;

        const { error: uploadError } = await this.supabaseService.supabase.storage
          .from('fotos_membros')
          .upload(nomeArquivo, membro.foto, {
            cacheControl: '3600',
            upsert: true,
          });

        if (uploadError) {
          console.error('Erro ao subir foto:', uploadError);
        } else {
          const { data: urlData } = this.supabaseService.supabase.storage
            .from('fotos_membros')
            .getPublicUrl(nomeArquivo);

          urlDaFoto = urlData.publicUrl;
        }
      }

      const { error: insertError } = await this.supabaseService.supabase.from('membros').insert([
        {
          id: authData.user.id,
          nome: membro.nome,
          sobrenome: membro.sobrenome,
          email: membro.email,
          telefone: membro.telefone,
          data_nascimento: membro.dataNascimento || null,
          cargo: membro.cargo || ECargos.Membro,
          nivel_acesso: ENiveisAcesso.User,
          status: EStatusMembro.ATIVO,
          foto_url: urlDaFoto,
        },
      ]);

      if (insertError) throw new Error('Erro ao salvar os dados do perfil.');

      return { sucesso: true, mensagem: 'Cadastro realizado com sucesso!' };
    } catch (error: any) {
      let msg = error.message;
      if (msg.includes('already registered')) msg = 'Este e-mail já está cadastrado.';
      if (msg.includes('Password should be at least'))
        msg = 'A senha deve ter pelo menos 6 caracteres.';

      return { sucesso: false, mensagem: msg };
    }
  }

  async logout(): Promise<void> {
    await this.supabaseService.supabase.auth.signOut();
    this.limparSessaoLocal();
    this.router.navigate(['/login']);
  }
}
