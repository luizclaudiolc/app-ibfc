import { inject, Injectable } from '@angular/core';
import { Observable, catchError, from, map, of } from 'rxjs';
import { SupabaseService } from './supabase';

@Injectable({ providedIn: 'root' })
export class PulsoService {
  private supabaseService = inject(SupabaseService);

  getSemanaAtual(): string {
    const now = new Date();
    const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    return `${d.getUTCFullYear()}-W${weekNo}`;
  }

  registrarCheckin(status: number): Observable<{ sucesso: boolean; mensagem?: string }> {
    return from(this.executarRegistro(status));
  }

  private async executarRegistro(status: number): Promise<{ sucesso: boolean; mensagem?: string }> {
    try {
      const { data: authData, error: authError } =
        await this.supabaseService.supabase.auth.getUser();
      if (authError || !authData.user) throw new Error('Usuário não autenticado.');

      const semana = this.getSemanaAtual();
      const userId = authData.user.id;

      const { error } = await this.supabaseService.supabase.from('checkins_semanais').upsert(
        {
          user_id: userId,
          status,
          semana_ano: semana,
        },
        { onConflict: 'user_id,semana_ano' },
      );

      if (error) throw error;

      return { sucesso: true };
    } catch (error: any) {
      console.error('Erro ao registrar check-in:', error);
      return { sucesso: false, mensagem: error.message };
    }
  }
}
