export interface ItemPlanoLeitura {
  dia: number;
  referencia: string;
  titulo: string;
}

export interface PlanoLeitura {
  id: string;
  titulo: string;
  subtitulo: string;
  dias: ItemPlanoLeitura[];
}

export const PLANOS_LEITURA: PlanoLeitura[] = [
  {
    id: 'plano_fundamentos_fe_2026_v1',
    titulo: 'Fundamentos da Fé',
    subtitulo: 'Uma jornada rápida de 3 dias pelas origens da criação e a queda.',
    dias: [
      { dia: 1, referencia: 'Gênesis 1', titulo: 'A criação do mundo e do homem' },
      { dia: 2, referencia: 'Gênesis 2', titulo: 'O Jardim do Éden e o propósito' },
      { dia: 3, referencia: 'Gênesis 3', titulo: 'A desobediência e a promessa' },
    ],
  },
  {
    id: 'plano_coracao_pastor_2026_v1',
    titulo: 'O Coração do Pastor',
    subtitulo: '5 dias de refrigério espiritual através dos Salmos mais marcantes.',
    dias: [
      { dia: 1, referencia: 'Salmos 1', titulo: 'O caminho do bem e do mal' },
      { dia: 2, referencia: 'Salmos 8', titulo: 'A majestade de Deus e a dignidade humana' },
      { dia: 3, referencia: 'Salmos 23', titulo: 'O Senhor é o meu pastor' },
      { dia: 4, referencia: 'Salmos 27', titulo: 'O Senhor é a minha luz e salvação' },
      { dia: 5, referencia: 'Salmos 91', titulo: 'A habitação no esconderijo do Altíssimo' },
    ],
  },
  {
    id: 'plano_sabedoria_pratica_2026_v1',
    titulo: 'Sabedoria Diária',
    subtitulo: '7 dias de conselhos práticos para a vida em Provérbios.',
    dias: [
      { dia: 1, referencia: 'Provérbios 1', titulo: 'O princípio da sabedoria' },
      { dia: 2, referencia: 'Provérbios 3', titulo: 'Confiança e direção em Deus' },
      { dia: 3, referencia: 'Provérbios 4', titulo: 'As duas veredas da vida' },
      { dia: 4, referencia: 'Provérbios 15', titulo: 'Palavras que edificam' },
      { dia: 5, referencia: 'Provérbios 16', titulo: 'Os planos do coração' },
      { dia: 6, referencia: 'Provérbios 22', titulo: 'A boa reputação e a prudência' },
      { dia: 7, referencia: 'Provérbios 31', titulo: 'O valor da virtude' },
    ],
  },
  {
    id: 'plano_passos_mestre_2026_v1',
    titulo: 'Caminhando com o Mestre',
    subtitulo: '10 dias conhecendo os passos, milagres e ensinamentos de Jesus em Marcos.',
    dias: [
      { dia: 1, referencia: 'Marcos 1', titulo: 'O início do ministério e batismo' },
      { dia: 2, referencia: 'Marcos 2', titulo: 'O poder para perdoar pecados' },
      { dia: 3, referencia: 'Marcos 4', titulo: 'Parábolas do Reino e acalmando a tempestade' },
      { dia: 4, referencia: 'Marcos 5', titulo: 'Transformação de vidas e cura' },
      { dia: 5, referencia: 'Marcos 8', titulo: 'A identidade de Cristo e o verdadeiro discípulo' },
      { dia: 6, referencia: 'Marcos 9', titulo: 'A transfiguração e a fé' },
      { dia: 7, referencia: 'Marcos 10', titulo: 'O jovem rico e o verdadeiro servo' },
      { dia: 8, referencia: 'Marcos 12', titulo: 'O maior mandamento' },
      { dia: 9, referencia: 'Marcos 14', titulo: 'A última ceia e o Getsêmani' },
      { dia: 10, referencia: 'Marcos 16', titulo: 'A ressurreição e a Grande Comissão' },
    ],
  },
  {
    id: 'plano_vida_espirito_2026_v1',
    titulo: 'A Vida no Espírito',
    subtitulo: '14 dias profundos de transformação e justificação na carta aos Romanos.',
    dias: [
      { dia: 1, referencia: 'Romanos 1', titulo: 'O poder do evangelho' },
      { dia: 2, referencia: 'Romanos 2', titulo: 'O justo juízo de Deus' },
      { dia: 3, referencia: 'Romanos 3', titulo: 'A justificação pela fé' },
      { dia: 4, referencia: 'Romanos 4', titulo: 'O exemplo de Abraão' },
      { dia: 5, referencia: 'Romanos 5', titulo: 'Paz com Deus e a graça' },
      { dia: 6, referencia: 'Romanos 6', titulo: 'Mortos para o pecado, vivos para Deus' },
      { dia: 7, referencia: 'Romanos 7', titulo: 'O conflito interior' },
      { dia: 8, referencia: 'Romanos 8', titulo: 'A vida no Espírito' },
      { dia: 9, referencia: 'Romanos 10', titulo: 'A confissão de fé e a salvação' },
      { dia: 10, referencia: 'Romanos 12', titulo: 'O culto racional e a transformação' },
      { dia: 11, referencia: 'Romanos 13', titulo: 'O amor ao próximo e a conduta' },
      { dia: 12, referencia: 'Romanos 14', titulo: 'A acolhida na diversidade da fé' },
      { dia: 13, referencia: 'Romanos 15', titulo: 'A esperança para os gentios' },
      { dia: 14, referencia: 'Romanos 16', titulo: 'Saudações finais e doxologia' },
    ],
  },
];
