export interface Membro {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  nivel: 'Admin' | 'User';
  status: 'Ativo' | 'Inativo';
  aniversario: string;
  foto?: string;
  setorResponsavel?: string;
}

export interface UsuarioLogado {
  id: string;
  nome: string;
  email: string;
  nivel: 'Admin' | 'User';
  setorResponsavel?: string;
}
