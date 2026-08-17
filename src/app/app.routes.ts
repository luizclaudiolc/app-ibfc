import { Routes } from '@angular/router';
import {
  adminGuard,
  aguardandoGuard,
  authGuard,
  loginGuard,
} from './core/services/guards/auth.guard';

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
    path: 'recuperar-senha',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./features/auth/pages/recuperar-senha/recuperar-senha.component').then(
        (m) => m.RecuperarSenhaComponent,
      ),
  },
  {
    path: 'atualizar-senha',
    loadComponent: () =>
      import('./features/auth/pages/atualizar-senha/atualizar-senha.component').then(
        (m) => m.AtualizarSenhaComponent,
      ),
  },

  {
    path: 'aguardando-aprovacao',
    loadComponent: () =>
      import('./features/dashboard/pages/aguardando-aprovacao/aguardando-aprovacao.component').then(
        (c) => c.AguardandoAprovacaoComponent,
      ),
    canActivate: [aguardandoGuard],
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
        path: 'perfil/:id',
        loadComponent: () =>
          import('./features/dashboard/pages/perfil-membro/perfil-membro.component').then(
            (m) => m.PerfilMembroComponent,
          ),
      },
      {
        path: 'mural-oracoes',
        loadComponent: () =>
          import('./features/dashboard/pages/mural-oracoes/mural-oracoes.component').then(
            (m) => m.MuralOracoesComponent,
          ),
      },
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
          import('./features/dashboard/pages/admin/avisos/avisos-admin.component').then(
            (c) => c.AvisosAdminComponent,
          ),
      },
      {
        path: 'estudos',
        loadComponent: () =>
          import('./features/dashboard/pages/estudos/estudos.component').then(
            (c) => c.EstudosComponent,
          ),
      },
      {
        path: 'analytics',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./features/dashboard/pages/admin/dashboard-admin/dashboard-admin.component').then(
            (c) => c.DashboardAdminComponent,
          ),
      },
      {
        path: 'admin/estudos',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./features/dashboard/pages/admin/estudos/estudos-admin.component').then(
            (c) => c.EstudosAdminComponent,
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
