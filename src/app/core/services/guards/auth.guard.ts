import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const usuarioLogado = localStorage.getItem('user_email');

  if (usuarioLogado) return true;

  router.navigate(['/login']);
  return false;
};

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usuarioLogado = localStorage.getItem('user_email');

  if (usuarioLogado) {
    router.navigate(['/dashboard/home']);
    return false;
  }

  return true;
};
