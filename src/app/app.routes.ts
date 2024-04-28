import { Routes } from '@angular/router';
import {SidenavComponent} from "./components/sidenav/sidenav.component";

export const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('../app/agents-de-terrain/agents-de-terrain.module')
      .then(m=>m.AgentsDeTerrainModule)
  },
  {
    path : 'auth',
    loadChildren: () => import('../app/authentication-and-registration/authentication-and-registration.module')
      .then(m=>m.AuthenticationAndRegistrationModule)
  },
  {
    path : 'agents',
    loadChildren: () => import('../app/agents-de-terrain/agents-de-terrain.module')
      .then(m=>m.AgentsDeTerrainModule)
  },
  {
    path : 'sidenav',
    component : SidenavComponent
  }
];
