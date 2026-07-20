import { Routes } from '@angular/router';
import { adminGuard, authGuard, loginGuard } from './core/services/guards/auth.guard';
import { PerfilMembroComponent } from './features/dashboard/pages/perfil-membro/perfil-membro.component';

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
      { path: 'perfil/:id', component: PerfilMembroComponent },
      {
        path: 'escala',
        loadComponent: () =>
          import('./features/dashboard/pages/admin/escalas/escalas.component').then(
            (c) => c.EscalasComponent,
          ),
      },
      {
        path: 'avisos',
        loadComponent: () =>
          import('./features/dashboard/pages/avisos/avisos-admin.component').then(
            (c) => c.AvisosAdminComponent,
          ),
      },
      {
        path: 'admin',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./features/dashboard/pages/admin/admin').then((m) => m.AdminComponent),
      },
    ],
  },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard/home' },
];
