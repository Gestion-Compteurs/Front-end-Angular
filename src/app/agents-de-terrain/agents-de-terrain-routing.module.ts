import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InscriptionComponent} from "./inscription/inscription.component";
import {ListeAgentsDeTerrainComponent} from "./liste-agents-de-terrain/liste-agents-de-terrain.component";
import {DetailsModificationComponent} from "./details-modification/details-modification.component";

const routes: Routes = [
  {
    path : '',
    component : ListeAgentsDeTerrainComponent
  },
  {
    path : 'inscrire-nouveau',
    component : InscriptionComponent
  },
  {
    path : 'details-modification/:agentId',
    component : DetailsModificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsDeTerrainRoutingModule { }
