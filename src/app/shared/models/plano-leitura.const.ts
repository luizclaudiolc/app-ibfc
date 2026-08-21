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
  {
    id: 'plano_novo_testamento_6meses_2026_v2',
    titulo: 'Novo Testamento Completo (6 Meses)',
    subtitulo: 'Leitura integral de todos os 260 capítulos, de 1 de julho a 31 de dezembro.',
    dias: [
      ...Array.from({ length: 28 }, (_, i) => ({
        dia: i + 1,
        referencia: `Mateus ${i + 1}`,
        titulo: `Mateus Capítulo ${i + 1}`,
      })),

      ...Array.from({ length: 16 }, (_, i) => ({
        dia: 29 + i,
        referencia: `Marcos ${i + 1}`,
        titulo: `Marcos Capítulo ${i + 1}`,
      })),

      ...Array.from({ length: 24 }, (_, i) => ({
        dia: 45 + i,
        referencia: `Lucas ${i + 1}`,
        titulo: `Lucas Capítulo ${i + 1}`,
      })),

      ...Array.from({ length: 21 }, (_, i) => ({
        dia: 69 + i,
        referencia: `João ${i + 1}`,
        titulo: `João Capítulo ${i + 1}`,
      })),

      ...Array.from({ length: 28 }, (_, i) => ({
        dia: 90 + i,
        referencia: `Atos ${i + 1}`,
        titulo: `Atos Capítulo ${i + 1}`,
      })),

      { dia: 118, referencia: 'Romanos 1-2', titulo: 'Romanos 1 e 2' },
      { dia: 119, referencia: 'Romanos 3-4', titulo: 'Romanos 3 e 4' },
      { dia: 120, referencia: 'Romanos 5-6', titulo: 'Romanos 5 e 6' },
      { dia: 121, referencia: 'Romanos 7-8', titulo: 'Romanos 7 e 8' },
      { dia: 122, referencia: 'Romanos 9-10', titulo: 'Romanos 9 e 10' },
      { dia: 123, referencia: 'Romanos 11-12', titulo: 'Romanos 11 e 12' },
      { dia: 124, referencia: 'Romanos 13-14', titulo: 'Romanos 13 e 14' },
      { dia: 125, referencia: 'Romanos 15-16', titulo: 'Romanos 15 e 16' },
      { dia: 126, referencia: '1 Coríntios 1-2', titulo: '1 Coríntios 1 e 2' },
      { dia: 127, referencia: '1 Coríntios 3-4', titulo: '1 Coríntios 3 e 4' },
      { dia: 128, referencia: '1 Coríntios 5-6', titulo: '1 Coríntios 5 e 6' },
      { dia: 129, referencia: '1 Coríntios 7-8', titulo: '1 Coríntios 7 e 8' },
      { dia: 130, referencia: '1 Coríntios 9-10', titulo: '1 Coríntios 9 e 10' },
      { dia: 131, referencia: '1 Coríntios 11-12', titulo: '1 Coríntios 11 e 12' },
      { dia: 132, referencia: '1 Coríntios 13-14', titulo: '1 Coríntios 13 e 14' },
      { dia: 133, referencia: '1 Coríntios 15-16', titulo: '1 Coríntios 15 e 16' },
      { dia: 134, referencia: '2 Coríntios 1-3', titulo: '2 Coríntios 1 a 3' },
      { dia: 135, referencia: '2 Coríntios 4-5', titulo: '2 Coríntios 4 e 5' },
      { dia: 136, referencia: '2 Coríntios 6-7', titulo: '2 Coríntios 6 e 7' },
      { dia: 137, referencia: '2 Coríntios 8-9', titulo: '2 Coríntios 8 e 9' },
      { dia: 138, referencia: '2 Coríntios 10-11', titulo: '2 Coríntios 10 e 11' },
      { dia: 139, referencia: '2 Coríntios 12-13', titulo: '2 Coríntios 12 e 13' },
      { dia: 140, referencia: 'Gálatas 1-2', titulo: 'Gálatas 1 e 2' },
      { dia: 141, referencia: 'Gálatas 3-4', titulo: 'Gálatas 3 e 4' },
      { dia: 142, referencia: 'Gálatas 5-6', titulo: 'Gálatas 5 e 6' },
      { dia: 143, referencia: 'Efésios 1-2', titulo: 'Efésios 1 e 2' },
      { dia: 144, referencia: 'Efésios 3-4', titulo: 'Efésios 3 e 4' },
      { dia: 145, referencia: 'Efésios 5-6', titulo: 'Efésios 5 e 6' },
      { dia: 146, referencia: 'Filipenses 1-2', titulo: 'Filipenses 1 e 2' },
      { dia: 147, referencia: 'Filipenses 3-4', titulo: 'Filipenses 3 e 4' },
      { dia: 148, referencia: 'Colossenses 1-2', titulo: 'Colossenses 1 e 2' },
      { dia: 149, referencia: 'Colossenses 3-4', titulo: 'Colossenses 3 e 4' },
      { dia: 150, referencia: '1 Tessalonicenses 1-3', titulo: '1 Tessalonicenses 1 a 3' },
      { dia: 151, referencia: '1 Tessalonicenses 4-5', titulo: '1 Tessalonicenses 4 e 5' },
      { dia: 152, referencia: '2 Tessalonicenses 1-3', titulo: '2 Tessalonicenses 1 a 3' },
      { dia: 153, referencia: '1 Timóteo 1-3', titulo: '1 Timóteo 1 a 3' },
      { dia: 154, referencia: '1 Timóteo 4-6', titulo: '1 Timóteo 4 a 6' },
      { dia: 155, referencia: '2 Timóteo 1-2', titulo: '2 Timóteo 1 e 2' },
      { dia: 156, referencia: '2 Timóteo 3-4', titulo: '2 Timóteo 3 e 4' },
      { dia: 157, referencia: 'Tito 1-3', titulo: 'Tito 1 a 3' },
      { dia: 158, referencia: 'Filemom 1', titulo: 'Filemom 1' },
      { dia: 159, referencia: 'Hebreus 1-3', titulo: 'Hebreus 1 a 3' },
      { dia: 160, referencia: 'Hebreus 4-6', titulo: 'Hebreus 4 a 6' },
      { dia: 161, referencia: 'Hebreus 7-8', titulo: 'Hebreus 7 e 8' },
      { dia: 162, referencia: 'Hebreus 9-10', titulo: 'Hebreus 9 e 10' },
      { dia: 163, referencia: 'Hebreus 11-13', titulo: 'Hebreus 11 a 13' },
      { dia: 164, referencia: 'Tiago 1-3', titulo: 'Tiago 1 a 3' },
      { dia: 165, referencia: 'Tiago 4-5', titulo: 'Tiago 4 e 5' },
      { dia: 166, referencia: '1 Pedro 1-3', titulo: '1 Pedro 1 a 3' },
      { dia: 167, referencia: '1 Pedro 4-5', titulo: '1 Pedro 4 e 5' },
      { dia: 168, referencia: '2 Pedro 1-3', titulo: '2 Pedro 1 a 3' },
      { dia: 169, referencia: '1 João 1-3', titulo: '1 João 1 a 3' },
      { dia: 170, referencia: '1 João 4-5', titulo: '1 João 4 e 5' },
      { dia: 171, referencia: '2 João 1', titulo: '2 João 1' },
      { dia: 172, referencia: '3 João 1', titulo: '3 João 1' },
      { dia: 173, referencia: 'Judas 1', titulo: 'Judas 1' },

      ...Array.from({ length: 11 }, (_, i) => ({
        dia: 174 + i,
        referencia: `Apocalipse ${i * 2 + 1}-${i * 2 + 2}`,
        titulo: `Apocalipse ${i * 2 + 1} e ${i * 2 + 2}`,
      })),
    ],
  },
];
