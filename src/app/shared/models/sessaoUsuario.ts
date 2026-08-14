export interface SessaoUsuario {
  email: string;
  nome: string;
  nivel: string;
  setor: string | null;
  fotoUrl: string | null;
  genero: number | null;
  versiculoCache?: {
    data: string;
    texto: string;
    referencia: string;
  } | null;
  pulsoSemanaVotada?: string | null;
  avisosConfirmados?: string[];
  oracoesRealizadas?: string[];
}
