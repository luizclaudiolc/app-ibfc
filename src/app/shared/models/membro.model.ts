import { EGenero, EMotivoInativacao, EStatusMembro, NivelAcesso } from './consts';
import { Filho } from './filhos.model';

export interface PerfilBase {
  nome: string;
  sobrenome: string;
  telefone?: string;
  cargo?: string;
  genero?: number;
  nivel_escolaridade?: number;
  endereco?: string | null;
  estado_civil?: number | string;
  pedido_oracao?: string;
  total_oracoes?: number;
  motivo_inativacao?: EMotivoInativacao | null;
  ministerios?: string[];
  filhos?: Filho[];
  progresso_leitura?: Record<string, number[]>;
}

export interface Membro extends PerfilBase {
  id?: string;
  email: string;
  data_nascimento?: string;
  nivel_acesso?: string;
  status?: string;
  foto_url?: string;
  setor_responsavel?: string;
}

export interface UsuarioCadastro extends Omit<PerfilBase, 'filhos'> {
  email: string;
  senha: string;
  telefone: string;
  cargo: string;
  dataNascimento?: string;
  foto?: File | null;
  filhos?: Partial<Filho>[];
}

export interface UsuarioAtualizacao extends PerfilBase {
  telefone: string;
  cargo: string;
  data_nascimento: string;
}

export interface MembroAtualizacaoAdmin extends Omit<Membro, 'email' | 'foto_url'> {
  remover_foto?: boolean;
}

export interface UsuarioLogado {
  id: string;
  nome: string;
  email: string;
  nivel: NivelAcesso;
  status: EStatusMembro;
  genero: EGenero;
  setorResponsavel?: string;
}
