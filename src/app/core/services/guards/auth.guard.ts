import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ENiveisAcesso } from '../../../shared/models/consts';
import { SupabaseService } from '../supabase';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const supabaseService = inject(SupabaseService);

  try {
    const {
      data: { session },
      error,
    } = await supabaseService.supabase.auth.getSession();

    if (session && !error) {
      return true;
    } else {
      localStorage.removeItem('app_user_session');
      router.navigate(['/login']);
      return false;
    }
  } catch (err) {
    console.error('Erro na validação do AuthGuard', err);
    router.navigate(['/login']);
    return false;
  }
};

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const nivelAcesso = authService.obterUsuarioLogado().nivel;

  if (nivelAcesso === ENiveisAcesso.Admin || nivelAcesso === ENiveisAcesso.SuperAdmin) {
    return true;
  }

  router.navigate(['/dashboard/home']);
  return false;
};

export const loginGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const supabaseService = inject(SupabaseService);

  const {
    data: { session },
  } = await supabaseService.supabase.auth.getSession();

  if (session) {
    router.navigate(['/dashboard/home']);
    return false;
  }

  return true;
};
