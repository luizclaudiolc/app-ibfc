export enum ECargos {
  Membro = 'membro',
}

export type NivelAcesso = 'SUPER_ADMIN' | 'ADMIN' | 'USER';

export enum ENiveisAcesso {
  SuperAdmin = 'SUPER_ADMIN',
  Admin = 'ADMIN',
  User = 'USER',
}

export enum EStatusMembro {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
  PENDENTE = 'PENDENTE',
}

export type StatusMembro = 'ATIVO' | 'INATIVO' | 'PENDENTE';

export enum EMotivoInativacao {
  EXCLUSAO_SOLICITADA = 'EXCLUSAO_SOLICITADA',
  DECISAO_ADMIN = 'DECISAO_ADMIN',
  FALTA_DE_ACESSO = 'FALTA_DE_ACESSO',
}

export type Genero = 'Masculino' | 'Feminino';
export type EstadoCivil = 'Solteiro(a)' | 'Casado(a)' | 'Divorciado(a)' | 'Viúvo(a)';
export type Escolaridade =
  | 'Ensino Fundamental Incompleto'
  | 'Ensino Fundamental Completo'
  | 'Ensino Médio Incompleto'
  | 'Ensino Médio Completo'
  | 'Ensino Superior Incompleto'
  | 'Ensino Superior Completo'
  | 'Pós-graduação';

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

export const CARGOS_DISPONIVEIS_MAP: Record<string, string> = Object.fromEntries(
  CARGOS_DISPONIVEIS.map((c) => [c.value, c.label]),
);

const LISTA_BASE_MINISTERIOS_DEPARTAMENTOS = [
  { label: 'Louvor', value: 'louvor' },
  { label: 'Mídia', value: 'midia' },
  { label: 'Casais', value: 'casais' },
  { label: 'Homens', value: 'homens' },
  { label: 'Mulheres', value: 'mulheres' },
  { label: 'Diaconato', value: 'diaconato' },
  { label: 'Infantil/Kids', value: 'infantil_kids' },
  { label: 'Jovens', value: 'jovens' },
];

export const MINISTERIOS_DISPONIVEIS = LISTA_BASE_MINISTERIOS_DEPARTAMENTOS;

export const DEPARTAMENTOS_DISPONIVEIS = [
  ...LISTA_BASE_MINISTERIOS_DEPARTAMENTOS,
  { label: 'Palavra', value: 'palavra' },
];

export const DEPARTAMENTOS_DISPONIVEIS_MAP: Record<string, string> = Object.fromEntries(
  DEPARTAMENTOS_DISPONIVEIS.map((d) => [d.value, d.label]),
);

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

export const EVENTOS_MAP: Record<string, string> = Object.fromEntries(
  EVENTOS_OPCOES.map((e) => [e.value, e.label]),
);

export const MINISTERIOS_DISPONIVEIS_MAP: Record<string, string> = Object.fromEntries(
  MINISTERIOS_DISPONIVEIS.map((m) => [m.value, m.label]),
);

export enum EGenero {
  MASCULINO = 1,
  FEMININO = 2,
}

export enum EEstadoCivil {
  SOLTEIRO = 1,
  CASADO = 2,
  DIVORCIADO = 3,
  VIUVO = 4,
}

export enum EEscolaridade {
  FUNDAMENTAL_INCOMPLETO = 1,
  FUNDAMENTAL_COMPLETO = 2,
  MEDIO_INCOMPLETO = 3,
  MEDIO_COMPLETO = 4,
  SUPERIOR_INCOMPLETO = 5,
  SUPERIOR_COMPLETO = 6,
  POS_GRADUACAO = 7,
}

export const GENERO_MAP: Record<number, Genero> = {
  [EGenero.MASCULINO]: 'Masculino',
  [EGenero.FEMININO]: 'Feminino',
};

export const ESTADO_CIVIL_MAP: Record<number, EstadoCivil> = {
  [EEstadoCivil.SOLTEIRO]: 'Solteiro(a)',
  [EEstadoCivil.CASADO]: 'Casado(a)',
  [EEstadoCivil.DIVORCIADO]: 'Divorciado(a)',
  [EEstadoCivil.VIUVO]: 'Viúvo(a)',
};

export const ESCOLARIDADE_MAP: Record<number, Escolaridade> = {
  [EEscolaridade.FUNDAMENTAL_INCOMPLETO]: 'Ensino Fundamental Incompleto',
  [EEscolaridade.FUNDAMENTAL_COMPLETO]: 'Ensino Fundamental Completo',
  [EEscolaridade.MEDIO_INCOMPLETO]: 'Ensino Médio Incompleto',
  [EEscolaridade.MEDIO_COMPLETO]: 'Ensino Médio Completo',
  [EEscolaridade.SUPERIOR_INCOMPLETO]: 'Ensino Superior Incompleto',
  [EEscolaridade.SUPERIOR_COMPLETO]: 'Ensino Superior Completo',
  [EEscolaridade.POS_GRADUACAO]: 'Pós-graduação',
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

export const LIMITE_CARREGAMENTO_INICIAL = 10;
