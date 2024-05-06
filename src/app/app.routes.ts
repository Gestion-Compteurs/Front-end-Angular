import { Routes } from '@angular/router';
import {SidenavComponent} from "./components/sidenav/sidenav.component";

export const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('../app/releves/releves.module')
      .then(m=>m.RelevesModule)
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
    path : 'compteurs',
    loadChildren: () => import('../app/compteurs/compteurs.module')
      .then(m=>m.CompteursModule)
  },
  {
    path : 'releves',
    loadChildren: () => import('../app/releves/releves.module')
      .then(m=>m.RelevesModule)
  },
  {
    path : 'batiments',
    loadChildren: () => import('../app/batiments/batiments.module')
      .then(m=>m.BatimentsModule)
  },
];
