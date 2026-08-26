import { Injectable, inject, signal } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from '../../../environments/environments';
import { SupabaseService } from './supabase';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebPushService {
  private swPush = inject(SwPush);
  private supabase = inject(SupabaseService);
  private auth = inject(AuthService);

  ativado = signal(false);
  suportado = signal(this.swPush.isEnabled);
  processando = signal(false);

  async sincronizarEstado(): Promise<void> {
    if (!this.swPush.isEnabled) {
      this.ativado.set(false);
      return;
    }
    const sub = await firstValueFrom(this.swPush.subscription);
    this.ativado.set(!!sub);
  }

  async ativar(): Promise<{ sucesso: boolean; mensagem?: string }> {
    if (!this.swPush.isEnabled) {
      return {
        sucesso: false,
        mensagem: 'Instale o app ou use o site em HTTPS (versão publicada).',
      };
    }

    this.processando.set(true);
    try {
      const sub = await this.swPush.requestSubscription({
        serverPublicKey: environment.vapidPublicKey,
      });

      const json = sub.toJSON();
      const userId = this.auth.obterUsuarioLogado().id;
      const p256dh = json.keys?.['p256dh'];
      const auth = json.keys?.['auth'];

      if (!userId || !json.endpoint || !p256dh || !auth) {
        throw new Error('Inscrição incompleta.');
      }

      const { error } = await this.supabase.supabase.from('push_subscriptions').upsert(
        {
          user_id: userId,
          endpoint: json.endpoint,
          p256dh,
          auth,
          user_agent: navigator.userAgent,
        },
        { onConflict: 'endpoint' },
      );

      if (error) throw error;
      this.ativado.set(true);
      return { sucesso: true };
    } catch (e: any) {
      const negou = e?.name === 'NotAllowedError';
      return {
        sucesso: false,
        mensagem: negou
          ? 'Você recusou as notificações. Ative nas configurações do navegador/celular.'
          : e?.message || 'Não foi possível ativar.',
      };
    } finally {
      this.processando.set(false);
    }
  }

  async desativar(): Promise<void> {
    const sub = await firstValueFrom(this.swPush.subscription);
    if (sub) {
      await this.supabase.supabase.from('push_subscriptions').delete().eq('endpoint', sub.endpoint);
      await this.swPush.unsubscribe();
    }
    this.ativado.set(false);
  }
}
