export interface Filho {
  id?: string;
  membro_id: string;
  outro_responsavel_id: string;
  nome: string;
  data_nascimento: string;
  informacoes_medicas?: string | null;
  created_at?: string;
}

export interface FilhoExistente {
  id: string;
  nome: string;
  data_nascimento: string;
  membro_id: string;
  outro_responsavel_id: string | null;
  nome_responsavel: string;
}
