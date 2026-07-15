export type NivelAcesso = 'ADMIN' | 'USER';
export type StatusMembro = 'ATIVO' | 'INATIVO';
export enum ECargos {
  Membro = 'membro',
}
export enum ENiveisAcesso {
  Admin = 'ADMIN',
  User = 'USER',
}

export enum EStatusMembro {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
}

export const CARGOS_DISPONIVEIS = [
  { label: 'Membro', value: 'membro' },
  { label: 'Pastor', value: 'pastor' },
  { label: 'Pastora', value: 'pastora' },
  { label: 'Presbítero', value: 'presbitero' },
  { label: 'Diácono', value: 'diacono' },
  { label: 'Diaconisa', value: 'diaconisa' },
  { label: 'Evangelista', value: 'evangelista' },
  { label: 'Missionário', value: 'missionario' },
  { label: 'Missionária', value: 'missionaria' },
];

export const CARGOS_DISPONIVEIS_MAP: Record<string, string> = {
  membro: 'Membro',
  pastor: 'Pastor',
  pastora: 'Pastora',
  presbitero: 'Presbítero',
  diacono: 'Diácono',
  diaconisa: 'Diaconisa',
  evangelista: 'Evangelista',
  missionario: 'Missionário',
  missionaria: 'Missionária',
};

export const DEPARTAMENTOS_DISPONIVEIS = [
  { label: 'Ministério de Louvor', value: 'ministerio_louvor' },
  { label: 'Recepção', value: 'recepcao' },
  { label: 'Mídia', value: 'midia' },
  { label: 'Infantil', value: 'infantil' },
  { label: 'Jovens', value: 'jovens' },
  { label: 'Adultos', value: 'adultos' },
  { label: 'Casais', value: 'casais' },
  { label: 'Mulheres', value: 'mulheres' },
  { label: 'Homens', value: 'homens' },
  { label: 'Missões', value: 'missoes' },
  { label: 'Membro', value: 'membro' },
];

export const DEPARTAMENTOS_DISPONIVEIS_MAP: Record<string, string> = {
  ministerio_louvor: 'Líder Ministério de Louvor',
  recepcao: 'Líder Recepção',
  midia: 'Líder Mídia',
  infantil: 'Líder Infantil',
  jovens: 'Líder Jovens',
  adultos: 'Líder Adultos',
  casais: 'Líder Casais',
  mulheres: 'Líder Mulheres',
  homens: 'Líder Homens',
  missoes: 'Líder Missões',
  membro: 'membro',
};

export const EVENTOS_OPCOES = [
  { value: 'QUINTA_PROFETICA', label: 'Quinta Profetica do Clamor' },
  { value: 'CULTO_DOMINGO_MANHA', label: 'Culto de Celebração Domingo Manhã' },
  { value: 'CULTO_DOMINGO_NOITE', label: 'Culto de Celebração Domingo Noite' },
  { value: 'ESCOLA_BIBLICA', label: 'Escola Bíblica - Terça-feira' },
  { value: 'CULTO_JOVENS', label: 'Culto de Jovens' },
  { value: 'CULTO_MULHERES', label: 'Culto de Mulheres' },
  { value: 'CULTO_HOMENS', label: 'Culto de Homens' },
  { value: 'REUNIAO_LIDERANCA', label: 'Reunião de Liderança' },
  { value: 'OUTRO', label: 'Outro' },
];

export const EVENTOS_MAP: Record<string, string> = {
  QUINTA_PROFETICA: 'Quinta Profetica do Clamor',
  CULTO_DOMINGO_MANHA: 'Culto de Celebração Domingo Manhã',
  CULTO_DOMINGO_NOITE: 'Culto de Celebração Domingo Noite',
  ESCOLA_BIBLICA: 'Escola Bíblica - Terça-feira',
  CULTO_JOVENS: 'Culto de Jovens',
  CULTO_MULHERES: 'Culto de Mulheres',
  CULTO_HOMENS: 'Culto de Homens',
  REUNIAO_LIDERANCA: 'Reunião de Liderança',
  OUTRO: 'Outro',
};

export const GRADIENTES_PASTEIS = [
  'bg-gradient-to-r from-red-200 to-orange-200',
  'bg-gradient-to-r from-orange-200 to-amber-200',
  'bg-gradient-to-r from-amber-200 to-yellow-200',
  'bg-gradient-to-r from-green-200 to-emerald-200',
  'bg-gradient-to-r from-teal-200 to-cyan-200',
  'bg-gradient-to-r from-sky-200 to-blue-200',
  'bg-gradient-to-r from-indigo-200 to-violet-200',
  'bg-gradient-to-r from-purple-200 to-fuchsia-200',
  'bg-gradient-to-r from-pink-200 to-rose-200',
];
