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

    // 💡 Se for o webhook nativo do Supabase, os dados da linha inserida estarão em 'body.record'.
    // Se for uma chamada manual, usamos o próprio 'body'.
    const dados = body.record ?? body;

    // Mapeie de acordo com as colunas reais da sua tabela (ex: se a coluna se chama 'descricao')
    const titulo = dados.titulo ?? 'IBFC';
    const texto = dados.texto ?? dados.descricao ?? 'Você tem um novo aviso.';
    const url = dados.url ?? '/dashboard/home';

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: inscricoes, error } = await supabase
      .from('push_subscriptions')
      .select('id, endpoint, p256dh, auth');

    if (error) throw error;

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
      (inscricoes ?? []).map(async (row) => {
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
