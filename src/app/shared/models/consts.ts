export type NivelAcesso = 'ADMIN' | 'USER';
export type StatusMembro = 'ATIVO' | 'INATIVO';
export enum ECargos {
  Membro = 'MEMBRO',
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
  { label: 'Líder de Ministério', value: 'lider_de_ministerio' },
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
  lider_de_ministerio: 'Líder de Ministério',
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
