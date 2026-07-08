import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ENiveisAcesso } from '../../../shared/models/consts';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const nivelAcesso = localStorage.getItem('user_nivel');

  if (nivelAcesso === ENiveisAcesso.Admin) {
    return true;
  }

  router.navigate(['/dashboard/home']);
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
