import { createClient } from 'npm:@supabase/supabase-js@2';
import webpush from 'npm:web-push@3.6.7';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

webpush.setVapidDetails(
  Deno.env.get('VAPID_MAILTO') ?? 'mailto:ibfc@local',
  Deno.env.get('VAPID_PUBLIC_KEY')!,
  Deno.env.get('VAPID_PRIVATE_KEY')!,
);

// 💡 Função auxiliar para remover acentos e espaços extras (ex: "João " -> "joao")
const normalizarNome = (str: string) => {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: cors });
  }

  try {
    const body = await req.json();

    const table = body.table;
    const record = body.record ?? body;
    const tipoManual = body.tipo;

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    let titulo = 'IBFC';
    let texto = 'Você tem uma nova notificação.';
    let url = '/dashboard/home';

    let queryInscricoes = supabase.from('push_subscriptions').select('id, endpoint, p256dh, auth');

    // 💡 INFERÊNCIA INTELIGENTE
    // Verifica pelo nome da tabela, pelo tipo ou se os dados passados possuem colunas específicas
    const isAviso = table === 'avisos' || tipoManual === 'aviso' || record.data_evento !== undefined;
    
    // Na sua modelagem de banco de dados, a tabela de escalas se chama "data_escala"
    const isEscala = table === 'data_escala' || table === 'escalas' || tipoManual === 'escala' || record.departamento !== undefined;
    
    const isAniversario = table === 'membros_aniversario' || tipoManual === 'aniversario';

    // ==========================================
    // 1. CENÁRIO: AVISOS 
    // ==========================================
    if (isAviso) {
      titulo = 'Novo aviso - IBFC! 📣';
      texto = record.descricao ?? 'Novo evento postado, confira!';
      url = '/dashboard/home';
    }

    // ==========================================
    // 2. CENÁRIO: ESCALA 
    // ==========================================
    else if (isEscala) {
      titulo = 'Nova Escala Atribuída! 📅';
      const departamento = record.departamento ?? 'seu departamento';
      texto = `Você foi escalado(a) para servir em: ${departamento}.`;
      url = '/dashboard/home';

      const textoVoluntarios = record.voluntarios;

      if (!textoVoluntarios) {
        return new Response(
          JSON.stringify({
            ok: true,
            enviados: 0,
            mensagem: 'Nenhum voluntário informado na escala.',
          }),
          { headers: { ...cors, 'Content-Type': 'application/json' } },
        );
      }

      // Normaliza os nomes que vieram da string "João, Maria"
      const nomesEscalados = textoVoluntarios
        .split(',')
        .map((n: string) => normalizarNome(n))
        .filter(Boolean);

      const { data: membrosEncontrados, error: erroMembros } = await supabase
        .from('membros')
        .select('id, nome, sobrenome');

      if (erroMembros) throw erroMembros;

      const idsUsuariosParaNotificar = (membrosEncontrados || [])
        .filter((membro) => {
          const nomeCompleto = normalizarNome(`${membro.nome} ${membro.sobrenome ?? ''}`);
          const apenasNome = normalizarNome(membro.nome);
          
          return nomesEscalados.some(
            (escalado: string) =>
              nomeCompleto === escalado || apenasNome === escalado
          );
        })
        .map((m) => m.id);

      if (idsUsuariosParaNotificar.length === 0) {
        return new Response(
          JSON.stringify({
            ok: true,
            enviados: 0,
            mensagem: 'Nenhum usuário correspondente encontrado para os voluntários.',
          }),
          { headers: { ...cors, 'Content-Type': 'application/json' } },
        );
      }

      // ⚠️ DICA: Verifique se a sua coluna de vínculo na tabela 'push_subscriptions' se chama realmente 'user_id' ou 'membro_id'
      queryInscricoes = queryInscricoes.in('user_id', idsUsuariosParaNotificar);
    }

    // ==========================================
    // 3. CENÁRIO: ANIVERSARIANTE 
    // ==========================================
    else if (isAniversario) {
      titulo = 'Aniversariante do Dia! 🎂🎉';
      texto = `Hoje é o aniversário de ${record.nome}. Deixe sua felicitação!`;
      url = '/dashboard/home';
    }

    const { data: inscricoes, error } = await queryInscricoes;
    if (error) throw error;

    if (!inscricoes || inscricoes.length === 0) {
      return new Response(
        JSON.stringify({ ok: true, enviados: 0, mensagem: 'Nenhum dispositivo encontrado para notificar.' }),
        { headers: { ...cors, 'Content-Type': 'application/json' } },
      );
    }

    const payload = JSON.stringify({
      notification: {
        title: titulo,
        body: texto,
        icon: '/app-icons/logo-dark-192.png',
        badge: '/app-icons/logo-dark-192.png',
        data: {
          onActionClick: {
            default: { operation: 'openWindow', url },
          },
        },
      },
    });

    const resultados = await Promise.allSettled(
      inscricoes.map(async (row) => {
        try {
          await webpush.sendNotification(
            {
              endpoint: row.endpoint,
              keys: { p256dh: row.p256dh, auth: row.auth },
            },
            payload,
          );
        } catch (err: any) {
          if (err?.statusCode === 404 || err?.statusCode === 410) {
            await supabase.from('push_subscriptions').delete().eq('id', row.id);
          } else {
            throw err;
          }
        }
      }),
    );

    const enviados = resultados.filter((r) => r.status === 'fulfilled').length;

    return new Response(JSON.stringify({ ok: true, enviados }), {
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  }
});
