import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, from, map, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { EStatusMembro, StatusMembro } from '../../shared/models/consts';
import {
  Membro,
  MembroAtualizacaoAdmin,
  UsuarioAtualizacao,
} from '../../shared/models/membro.model';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase';

export const colunasHome =
  'id, nome, sobrenome, email, foto_url, data_nascimento, status, telefone, cargo, setor_responsavel, ministerios, genero';

export const colunasSeletor = 'id, nome, sobrenome';

export const colunasAdminLista =
  'id, nome, sobrenome, email, foto_url, status, cargo, setor_responsavel, ministerios, nivel_acesso';

export const colunasMeuPerfil =
  'id, nome, sobrenome, email, telefone, cargo, ministerios, data_nascimento, genero, estado_civil, nivel_escolaridade, endereco, foto_url, status';

@Injectable({ providedIn: 'root' })
export class MembroService {
  private supabaseService = inject(SupabaseService);
  private readonly authService = inject(AuthService);

  private cacheMeuPerfil$: Observable<Membro> | null = null;
  private cacheTodosMembros = new Map<string, Observable<Membro[]>>();
  private cachePaginado = new Map<string, Observable<{ data: Membro[]; total: number }>>();
  private cacheAniversariantes = new Map<number, Observable<Membro[]>>();
  private cacheMembroPorId = new Map<string, Observable<Membro | null>>();

  constructor() {
    this.supabaseService.supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        this.limparCache();
      }
    });
  }

  limparCache(): void {
    this.cacheMeuPerfil$ = null;
    this.cacheTodosMembros.clear();
    this.cachePaginado.clear();
    this.cacheAniversariantes.clear();
    this.cacheMembroPorId.clear();
  }

  buscarTodos(todosStatus = false, colunas = colunasHome): Observable<Membro[]> {
    const cacheKey = `${todosStatus}-${colunas}`;

    if (this.cacheTodosMembros.has(cacheKey)) {
      return this.cacheTodosMembros.get(cacheKey)!;
    }

    const promise = this.supabaseService.supabase
      .from('membros')
      .select(colunas)
      .order('nome', { ascending: true });

    if (!todosStatus) {
      promise.eq('status', EStatusMembro.ATIVO);
    }

    const request$ = from(promise).pipe(
      map((res) => (res.data ?? []) as unknown as Membro[]),
      shareReplay(1),
    );

    this.cacheTodosMembros.set(cacheKey, request$);
    return request$;
  }

  buscarAniversariantes(dias = 7): Observable<Membro[]> {
    if (this.cacheAniversariantes.has(dias)) {
      return this.cacheAniversariantes.get(dias)!;
    }

    const request$ = from(
      this.supabaseService.supabase.rpc('aniversariantes_proximos', { dias }),
    ).pipe(
      map((res) => (res.data ?? []) as Membro[]),
      shareReplay(1),
    );

    this.cacheAniversariantes.set(dias, request$);
    return request$;
  }

  buscarPaginado(opts: {
    offset: number;
    limite?: number;
    busca?: string;
    ministerio?: string;
    status?: StatusMembro | 'TODOS';
    colunas?: string;
  }): Observable<{ data: Membro[]; total: number }> {
    const limite = opts.limite ?? 10;
    const busca = (opts.busca ?? '').trim().replace(/[,()]/g, '');
    const colunas = opts.colunas ?? colunasHome;

    let query = this.supabaseService.supabase
      .from('membros')
      .select(colunas, { count: 'exact' })
      .order('nome', { ascending: true })
      .range(opts.offset, opts.offset + limite - 1);

    if (opts.status && opts.status !== 'TODOS') {
      query = query.eq('status', opts.status);
    } else if (opts.status !== 'TODOS') {
      query = query.eq('status', EStatusMembro.ATIVO);
    }

    if (opts.ministerio && opts.ministerio !== 'TODOS') {
      query = query.contains('ministerios', [opts.ministerio]);
    }

    if (busca) {
      query = query.or(
        `nome.ilike.%${busca}%,sobrenome.ilike.%${busca}%,email.ilike.%${busca}%,cargo.ilike.%${busca}%,setor_responsavel.ilike.%${busca}%`,
      );
    }

    return from(query).pipe(
      map((res) => ({
        data: (res.data ?? []) as unknown as Membro[],
        total: res.count ?? 0,
      })),
    );
  }

  contarPorStatus(): Observable<{
    pendentes: number;
    ativos: number;
    inativos: number;
  }> {
    const count = (status: EStatusMembro) =>
      from(
        this.supabaseService.supabase
          .from('membros')
          .select('id', { count: 'exact', head: true })
          .eq('status', status),
      ).pipe(map((r) => r.count ?? 0));

    return forkJoin({
      pendentes: count(EStatusMembro.PENDENTE),
      ativos: count(EStatusMembro.ATIVO),
      inativos: count(EStatusMembro.INATIVO),
    });
  }

  buscarPorId(id: string): Observable<Membro | null> {
    if (this.cacheMembroPorId.has(id)) {
      return this.cacheMembroPorId.get(id)!;
    }

    const request$ = from(
      this.supabaseService.supabase
        .from('membros')
        .select(
          'id, nome, sobrenome, email, telefone, cargo, ministerios, data_nascimento, genero, estado_civil, nivel_escolaridade, endereco, foto_url, status, nivel_acesso, setor_responsavel, motivo_inativacao',
        )
        .eq('id', id)
        .single(),
    ).pipe(
      map((res) => res.data as Membro),
      catchError((erro) => {
        console.error('Erro ao buscar membro por ID:', erro);
        return of(null);
      }),
      shareReplay(1),
    );

    this.cacheMembroPorId.set(id, request$);
    return request$;
  }

  buscarMeuPerfil(): Observable<Membro> {
    if (this.cacheMeuPerfil$) {
      return this.cacheMeuPerfil$;
    }

    const meuId = this.authService.obterUsuarioLogado().id;

    this.cacheMeuPerfil$ = from(
      this.supabaseService.supabase
        .from('membros')
        .select(colunasMeuPerfil)
        .eq('id', meuId)
        .single(),
    ).pipe(
      map((res) => res.data as Membro),
      shareReplay(1),
    );

    return this.cacheMeuPerfil$;
  }

  atualizarFotoPerfil(
    arquivo: File,
  ): Observable<{ sucesso: boolean; fotoUrl?: string; mensagem?: string }> {
    return from(this.executarAtualizacaoFoto(arquivo)).pipe(
      tap((res) => {
        if (res.sucesso) this.limparCache();
      }),
    );
  }

  private async executarAtualizacaoFoto(
    arquivo: File,
  ): Promise<{ sucesso: boolean; fotoUrl?: string; mensagem?: string }> {
    try {
      const { data: authData, error: authError } =
        await this.supabaseService.supabase.auth.getUser();
      if (authError || !authData.user) throw new Error('Usuário não autenticado.');

      const userId = authData.user.id;
      const nomeArquivo = `${userId}-perfil`;

      const { error: uploadError } = await this.supabaseService.supabase.storage
        .from('fotos_membros')
        .upload(nomeArquivo, arquivo, {
          cacheControl: '31536000',
          upsert: true,
        });

      if (uploadError) {
        console.error('Erro de upload:', uploadError);
        throw new Error('Erro ao fazer upload da imagem no Storage.');
      }

      const { data: urlData } = this.supabaseService.supabase.storage
        .from('fotos_membros')
        .getPublicUrl(nomeArquivo);

      const fotoUrl = `${urlData.publicUrl}?t=${Date.now()}`;

      const { error: updateError } = await this.supabaseService.supabase
        .from('membros')
        .update({ foto_url: fotoUrl })
        .eq('id', userId);

      if (updateError) throw new Error('Erro ao salvar o link da foto no perfil.');

      return { sucesso: true, fotoUrl: fotoUrl };
    } catch (error: any) {
      return { sucesso: false, mensagem: error.message };
    }
  }

  atualizarPerfil(
    dados: Partial<UsuarioAtualizacao>,
  ): Observable<{ sucesso: boolean; mensagem?: string }> {
    return from(this.executarAtualizacaoPerfil(dados)).pipe(
      tap((res) => {
        if (res.sucesso) this.limparCache();
      }),
    );
  }

  private async executarAtualizacaoPerfil(
    dados: Partial<UsuarioAtualizacao>,
  ): Promise<{ sucesso: boolean; mensagem?: string }> {
    try {
      const {
        data: { user },
      } = await this.supabaseService.supabase.auth.getUser();
      if (!user) throw new Error('Usuário não encontrado.');

      const payloadParaSalvar: any = {};

      if (dados.nome !== undefined) payloadParaSalvar.nome = dados.nome;
      if (dados.sobrenome !== undefined) payloadParaSalvar.sobrenome = dados.sobrenome;
      if (dados.telefone !== undefined) payloadParaSalvar.telefone = dados.telefone;
      if (dados.cargo !== undefined) payloadParaSalvar.cargo = dados.cargo;
      if (dados.data_nascimento !== undefined)
        payloadParaSalvar.data_nascimento = dados.data_nascimento;
      if (dados.genero !== undefined) payloadParaSalvar.genero = dados.genero ?? null;
      if (dados.estado_civil !== undefined)
        payloadParaSalvar.estado_civil = dados.estado_civil ?? null;
      if (dados.nivel_escolaridade !== undefined)
        payloadParaSalvar.nivel_escolaridade = dados.nivel_escolaridade ?? null;
      if (dados.endereco !== undefined) payloadParaSalvar.endereco = dados.endereco || null;
      if (dados.ministerios !== undefined) payloadParaSalvar.ministerios = dados.ministerios;

      const { error } = await this.supabaseService.supabase
        .from('membros')
        .update(payloadParaSalvar)
        .eq('id', user.id);

      if (error) throw error;

      if (dados.nome && dados.sobrenome) {
        this.authService.atualizarNomeGlobal(`${dados.nome} ${dados.sobrenome}`);
      }

      return { sucesso: true };
    } catch (error: any) {
      return { sucesso: false, mensagem: error.message };
    }
  }

  atualizarSetor(id: string, novoSetor: string): Observable<any> {
    return from(
      this.supabaseService.supabase
        .from('membros')
        .update({ setor_responsavel: novoSetor })
        .eq('id', id),
    ).pipe(
      tap(() => this.limparCache()),
      map((res) => {
        if (res.error) throw res.error;
        return res;
      }),
    );
  }

  removerFotoPerfil(): Observable<any> {
    return from(this.supabaseService.supabase.auth.getUser()).pipe(
      switchMap(async ({ data: { user } }) => {
        if (!user) throw new Error('Usuário não autenticado');

        const { data: perfil } = await this.supabaseService.supabase
          .from('membros')
          .select('foto_url')
          .eq('id', user.id)
          .single();

        if (perfil?.foto_url) {
          const urlParts = perfil.foto_url.split('/');
          const nomeArquivo = urlParts[urlParts.length - 1].split('?')[0];

          const { data, error: removeError } = await this.supabaseService.supabase.storage
            .from('fotos_membros')
            .remove([nomeArquivo]);

          if (removeError || !data || data.length === 0) {
            console.error('Falha ao deletar do Storage. Arquivos removidos:', data);
            throw new Error('Sem permissão para excluir a imagem física do banco.');
          }
        }

        const { error: updateError } = await this.supabaseService.supabase
          .from('membros')
          .update({ foto_url: null })
          .eq('id', user.id);

        if (updateError) throw updateError;
        return { sucesso: true };
      }),
      tap(() => this.limparCache()),
    );
  }

  atualizarMembroAdmin(
    membro: MembroAtualizacaoAdmin & { id: string; foto_url?: string },
  ): Observable<any> {
    return from(this.executarAtualizacaoMembroAdmin(membro)).pipe(tap(() => this.limparCache()));
  }

  private async executarAtualizacaoMembroAdmin(
    membro: MembroAtualizacaoAdmin & { id: string; foto_url?: string },
  ) {
    const { id, remover_foto, foto_url, filhos, ...dadosSalvar } = membro;

    if (remover_foto && foto_url) {
      try {
        const urlParts = foto_url.split('/');
        const nomeArquivo = urlParts[urlParts.length - 1].split('?')[0];

        const { error: removeError } = await this.supabaseService.supabase.storage
          .from('fotos_membros')
          .remove([nomeArquivo]);

        if (removeError) {
          console.error('Falha ao deletar arquivo físico no Storage:', removeError);
        } else {
          (dadosSalvar as any).foto_url = null;
        }
      } catch (err) {
        console.error('Erro no processamento da exclusão da foto:', err);
      }
    }

    const { data, error } = await this.supabaseService.supabase
      .from('membros')
      .update(dadosSalvar)
      .eq('id', id);

    if (error) throw error;

    return data;
  }
}
