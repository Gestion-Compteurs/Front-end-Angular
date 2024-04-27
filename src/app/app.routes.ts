import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('../app/authentication-and-registration/authentication-and-registration.module')
      .then(m=>m.AuthenticationAndRegistrationModule)
  },
  {
    path : 'agents',
    loadChildren: () => import('../app/agents-de-terrain/agents-de-terrain.module')
      .then(m=>m.AgentsDeTerrainModule)
  }
];
