export interface SessaoUsuario {
  id: string;
  email: string;
  nome: string;
  nivel: string;
  setor: string | null;
  fotoUrl: string | null;
  genero: number | null;
  status: string;
  ministerios?: string[];
  versiculoCache?: {
    data: string;
    texto: string;
    referencia: string;
  } | null;
  pulsoSemanaVotada?: string | null;
  avisosConfirmados?: string[];
  oracoesRealizadas?: string[];
}
