export interface Escala {
  id?: string;
  data_escala: string;
  evento: string;
  departamento: string;
  voluntarios: string;
  pedidos_substituicao?: string;
}

export interface FormCriarEscala {
  data: string;
  evento: string;
  departamento: string;
  voluntarios: string;
}
