import { EGenero, EMotivoInativacao, EStatusMembro, NivelAcesso } from './consts';

export interface PerfilBase {
  nome: string;
  sobrenome: string;
  telefone?: string;
  cargo?: string;
  genero?: number;
  nivel_escolaridade?: number;
  endereco?: string;
  estado_civil?: number | string;
  pedido_oracao?: string;
  total_oracoes?: number;
  motivo_inativacao?: EMotivoInativacao | null;
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

export interface UsuarioCadastro extends PerfilBase {
  email: string;
  senha: string;
  telefone: string;
  cargo: string;
  dataNascimento?: string;
  foto?: File | null;
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
