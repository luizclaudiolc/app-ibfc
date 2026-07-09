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
