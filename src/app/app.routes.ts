import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './core/services/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./features/auth/pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'cadastro',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./features/auth/pages/cadastro/cadastro.component').then((m) => m.CadastroComponent),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/dashboard/pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/dashboard/pages/perfil/perfil.component').then(
            (m) => m.PerfilComponent,
          ),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./features/dashboard/pages/admin/admin').then((m) => m.AdminComponent),
      },
      {
        path: 'membros-gestao',
        loadComponent: () =>
          import('./features/dashboard/pages/admin/membros-gestao/membros-gestao').then(
            (m) => m.MembrosGestaoComponent,
          ),
      },
    ],
  },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard/home' },
];
