export interface Membro {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cargo: string;
  nivel: 'Admin' | 'User';
  status: 'ATIVO' | 'INATIVO';
  data_nascimento: string;
  foto_url?: string;
  setor_responsavel?: string;
}

export interface UsuarioLogado {
  id: string;
  nome: string;
  email: string;
  nivel: 'Admin' | 'User';
  setorResponsavel?: string;
}
