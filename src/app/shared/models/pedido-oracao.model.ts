import { Membro } from './membro.model';

export interface PedidoOracao {
  id: string;
  membro_id: string;
  descricao: string;
  atendido: boolean;
  intercessores: string[];
  created_at: string;
  membro?: Membro;
}
