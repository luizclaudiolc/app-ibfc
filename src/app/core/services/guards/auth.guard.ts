import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ENiveisAcesso } from '../../../shared/models/consts';
import { SupabaseService } from '../supabase';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const supabaseService = inject(SupabaseService);
  const authService = inject(AuthService);

  try {
    const {
      data: { session },
      error,
    } = await supabaseService.supabase.auth.getSession();

    if (session && !error) {
      const usuario = authService.obterUsuarioLogado();

      if (usuario.status === 'PENDENTE') {
        router.navigate(['/aguardando-aprovacao']);
        return false;
      }

      return true;
    } else {
      localStorage.removeItem('app_user_session');
      router.navigate(['/login']);
      return false;
    }
  } catch (err) {
    console.error('Erro na validação do AuthGuard', err);
    localStorage.removeItem('app_user_session');
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
  const authService = inject(AuthService);

  const {
    data: { session },
  } = await supabaseService.supabase.auth.getSession();

  if (session) {
    const usuario = authService.obterUsuarioLogado();

    if (usuario.status === 'PENDENTE') {
      router.navigate(['/aguardando-aprovacao']);
    } else {
      router.navigate(['/dashboard/home']);
    }
    return false;
  }

  return true;
};

export const aguardandoGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const supabaseService = inject(SupabaseService);
  const authService = inject(AuthService);

  const {
    data: { session },
  } = await supabaseService.supabase.auth.getSession();

  if (session) {
    const usuario = authService.obterUsuarioLogado();

    if (usuario.status === 'PENDENTE') {
      return true;
    } else {
      router.navigate(['/dashboard/home']);
      return false;
    }
  }

  router.navigate(['/login']);
  return false;
};
