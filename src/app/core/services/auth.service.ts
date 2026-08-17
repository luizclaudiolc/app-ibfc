import { Injectable, inject, NgZone, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Membro, UsuarioCadastro, UsuarioLogado } from '../../shared/models/membro.model';
import { SupabaseService } from './supabase';
import { ECargos, ENiveisAcesso, EStatusMembro } from '../../shared/models/consts';
import { SessaoUsuario } from '../../shared/models/sessaoUsuario';

export interface RespostaLogin {
  sucesso: boolean;
  usuario?: UsuarioLogado;
  mensagem?: string;
}

const SESSION_KEY = 'app_user_session';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabaseService = inject(SupabaseService);
  private router = inject(Router);
  private ngZone = inject(NgZone);

  private sessaoInicial = this.getSessao();

  fotoUsuario$ = signal<string | null>(this.sessaoInicial?.fotoUrl || null);
  nomeUsuario$ = signal<string>(this.sessaoInicial?.nome || 'Irmão(ã)');
  userGenero$ = signal<number | null>(this.sessaoInicial?.genero ?? null);

  constructor() {
    this.iniciarObservadorDeSessao();
  }

  login(email: string, senha: string): Observable<RespostaLogin> {
    return from(this.executarLoginSupabase(email, senha));
  }

  cadastrar(membro: UsuarioCadastro): Observable<{ sucesso: boolean; mensagem: string }> {
    return from(this.executarCadastroSupabase(membro));
  }

  async logout(): Promise<void> {
    await this.supabaseService.supabase.auth.signOut();
    this.limparSessaoLocal();
    this.router.navigate(['/login']);
  }

  obterUsuarioLogado(): SessaoUsuario {
    const sessao = this.getSessao();

    return {
      email: sessao?.email || '',
      nome: sessao?.nome || '',
      nivel: sessao?.nivel || '',
      setor: sessao?.setor || null,
      fotoUrl: sessao?.fotoUrl || null,
      genero: sessao?.genero ?? null,
      status: sessao?.status || EStatusMembro.ATIVO,
    };
  }

  atualizarFotoGlobal(url: string | null): void {
    this.fotoUsuario$.set(url);
    this.atualizarPropriedadeSessao({ fotoUrl: url });
  }

  atualizarNomeGlobal(nome: string): void {
    this.nomeUsuario$.set(nome);
    this.atualizarPropriedadeSessao({ nome });
  }

  atualizarGeneroGlobal(genero: number | null): void {
    this.userGenero$.set(genero);
    this.atualizarPropriedadeSessao({ genero });
  }

  obterVersiculoEmCache() {
    const sessao = this.getSessao();
    return sessao?.versiculoCache || null;
  }

  salvarVersiculoEmCache(versiculoCache: {
    data: string;
    texto: string;
    referencia: string;
  }): void {
    this.atualizarPropriedadeSessao({ versiculoCache });
  }

  obterSemanaVotadaPulso(): string | null {
    const sessao = this.getSessao();
    return sessao?.pulsoSemanaVotada || null;
  }

  salvarSemanaVotadaPulso(semana: string): void {
    this.atualizarPropriedadeSessao({ pulsoSemanaVotada: semana });
  }

  obterAvisosConfirmados(): string[] {
    const sessao = this.getSessao();
    return sessao?.avisosConfirmados || [];
  }

  adicionarAvisoConfirmado(idAviso: string): void {
    const atuais = this.obterAvisosConfirmados();
    if (!atuais.includes(idAviso)) {
      atuais.push(idAviso);

      if (atuais.length > 100) {
        atuais.unshift();
      }

      this.atualizarPropriedadeSessao({ avisosConfirmados: atuais });
    }
  }

  removerAvisoConfirmado(idAviso: string): void {
    const atuais = this.obterAvisosConfirmados();
    const filtrados = atuais.filter((id) => id !== idAviso);
    this.atualizarPropriedadeSessao({ avisosConfirmados: filtrados });
  }

  obterOracoesRealizadas(): string[] {
    const sessao = this.getSessao();
    return sessao?.oracoesRealizadas || [];
  }

  adicionarOracaoRealizada(idMembro: string): void {
    const atuais = this.obterOracoesRealizadas();
    if (!atuais.includes(idMembro)) {
      atuais.push(idMembro);
      if (atuais.length > 200) {
        atuais.unshift();
      }
      this.atualizarPropriedadeSessao({ oracoesRealizadas: atuais });
    }
  }

  removerOracaoRealizada(idMembro: string): void {
    const atuais = this.obterOracoesRealizadas();
    const filtrados = atuais.filter((id) => id !== idMembro);
    this.atualizarPropriedadeSessao({ oracoesRealizadas: filtrados });
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
          status: EStatusMembro.PENDENTE,
          foto_url: urlDaFoto,

          genero: membro.genero || null,
          estado_civil: membro.estado_civil || null,
          nivel_escolaridade: membro.nivel_escolaridade || null,
          endereco: membro.endereco || null,
        },
      ]);

      if (insertError) throw new Error('Erro ao salvar os dados do perfil.');

      await this.supabaseService.supabase.auth.signOut();
      this.limparSessaoLocal();

      return { sucesso: true, mensagem: 'Cadastro realizado com sucesso!' };
    } catch (error: any) {
      let msg = error.message;
      if (msg.includes('already registered')) msg = 'Este e-mail já está cadastrado.';
      if (msg.includes('Password should be at least'))
        msg = 'A senha deve ter pelo menos 6 caracteres.';

      return { sucesso: false, mensagem: msg };
    }
  }

  private getSessao(): any {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }

  private atualizarPropriedadeSessao(dadosParciais: any): void {
    const sessaoAtual = this.getSessao() || {};
    const sessaoAtualizada = { ...sessaoAtual, ...dadosParciais };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessaoAtualizada));
  }

  private atualizarLocalStorage(perfil: Membro): void {
    const nomeCompleto = `${perfil.nome} ${perfil.sobrenome}`;
    let cachesRestaurados = {};

    const backupStr = localStorage.getItem('app_cache_backup');
    if (backupStr) {
      const todosBackups = JSON.parse(backupStr);

      if (todosBackups[perfil.email]) {
        cachesRestaurados = todosBackups[perfil.email];
      }
    }

    const sessaoData = {
      email: perfil.email,
      nome: nomeCompleto,
      nivel: perfil.nivel_acesso || ENiveisAcesso.User,
      setor: perfil.setor_responsavel || null,
      fotoUrl: perfil.foto_url || null,
      genero: perfil.genero ?? null,
      status: perfil.status,
      ...cachesRestaurados,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessaoData));

    this.nomeUsuario$.set(nomeCompleto);
    this.fotoUsuario$.set(perfil.foto_url || null);
    this.userGenero$.set(perfil.genero ?? null);
  }

  private limparSessaoLocal(): void {
    const sessaoAtual = this.getSessao();

    if (sessaoAtual && sessaoAtual.email) {
      const backupStr = localStorage.getItem('app_cache_backup');
      const todosBackups = backupStr ? JSON.parse(backupStr) : {};

      todosBackups[sessaoAtual.email] = {
        pulsoSemanaVotada: sessaoAtual.pulsoSemanaVotada,
        avisosConfirmados: sessaoAtual.avisosConfirmados,
        oracoesRealizadas: sessaoAtual.oracoesRealizadas,
        versiculoCache: sessaoAtual.versiculoCache,
      };

      localStorage.setItem('app_cache_backup', JSON.stringify(todosBackups));
    }

    localStorage.removeItem(SESSION_KEY);

    this.fotoUsuario$.set(null);
    this.nomeUsuario$.set('Irmão(ã)');
    this.userGenero$.set(null);
  }
}
