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

    // Por padrão, começa buscando todas as inscrições (para Avisos e Aniversários)
    let queryInscricoes = supabase.from('push_subscriptions').select('id, endpoint, p256dh, auth');

    // ==========================================
    // 1. CENÁRIO: AVISOS (Broadcast para todos)
    // ==========================================
    if (table === 'avisos' || tipoManual === 'aviso') {
      titulo = 'Novo aviso - IBFC! 📣';
      texto = record.descricao ?? 'Novo evento postado, confira!';
      url = '/dashboard/home';
    }

    // ==========================================
    // 2. CENÁRIO: ESCALA (Direcionado aos voluntários)
    // ==========================================
    else if (table === 'escalas' || tipoManual === 'escala') {
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
          {
            headers: { ...cors, 'Content-Type': 'application/json' },
          },
        );
      }

      const nomesEscalados = textoVoluntarios
        .split(',')
        .map((n: string) => n.trim())
        .filter(Boolean);

      const { data: membrosEncontrados, error: erroMembros } = await supabase
        .from('membros')
        .select('id, nome, sobrenome');

      if (erroMembros) throw erroMembros;

      const idsUsuariosParaNotificar = (membrosEncontrados || [])
        .filter((membro) => {
          const nomeCompleto = `${membro.nome} ${membro.sobrenome ?? ''}`.trim();
          return nomesEscalados.some(
            (escalado: string) =>
              nomeCompleto.toLowerCase() === escalado.toLowerCase() ||
              membro.nome.toLowerCase() === escalado.toLowerCase(),
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
          {
            headers: { ...cors, 'Content-Type': 'application/json' },
          },
        );
      }

      queryInscricoes = queryInscricoes.in('user_id', idsUsuariosParaNotificar);
    }

    // ==========================================
    // 3. CENÁRIO: ANIVERSARIANTE DO DIA (Broadcast)
    // ==========================================
    else if (table === 'membros_aniversario' || tipoManual === 'aniversario') {
      titulo = 'Aniversariante do Dia! 🎂🎉';
      texto = `Hoje é o aniversário de ${record.nome}. Deixe sua felicitação!`;
      url = '/dashboard/home';
    }

    const { data: inscricoes, error } = await queryInscricoes;
    if (error) throw error;

    if (!inscricoes || inscricoes.length === 0) {
      return new Response(
        JSON.stringify({
          ok: true,
          enviados: 0,
          mensagem: 'Nenhum dispositivo encontrado para notificar.',
        }),
        {
          headers: { ...cors, 'Content-Type': 'application/json' },
        },
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
