import { NivelAcesso, StatusMembro } from './consts';

export interface Membro {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cargo: string;
  nivel_acesso: NivelAcesso;
  status: StatusMembro;
  data_nascimento: string;
  foto_url?: string;
  setor_responsavel?: string;
}

export interface UsuarioLogado {
  id: string;
  nome: string;
  email: string;
  nivel: NivelAcesso;
  setorResponsavel?: string;
}

export interface UsuarioCadastro {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  telefone: string;
  cargo: string;
  dataNascimento?: string;
  foto?: File | null;
}

export interface UsuarioAtualizacao {
  nome: string;
  sobrenome: string;
  telefone: string;
  cargo: string;
  data_nascimento: string;
}
