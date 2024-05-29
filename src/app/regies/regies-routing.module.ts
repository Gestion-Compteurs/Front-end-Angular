import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionAdminsComponent} from "./gestion-admins/gestion-admins.component";
import {GestionAgentsComponent} from "./gestion-agents/gestion-agents.component";

const routes: Routes = [
  {
    path : '',
    component : GestionAdminsComponent
  },
  {
    path : 'admins',
    component : GestionAdminsComponent
  },
  {
    path : 'agents',
    component : GestionAgentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegiesRoutingModule { }
