import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutRelevesComponent} from "./ajout-releves/ajout-releves.component";
import {ListeRelevesComponent} from "./liste-releves/liste-releves.component";
import {DetailsModificationComponent} from "./details-modification/details-modification.component";

const routes: Routes = [
  {
    path:"instance-compteur/:idInstanceCompteur",
    component:ListeRelevesComponent
  },
  {
    path:"instance-compteur/details-modification/:releveId",
    component:DetailsModificationComponent
  },
  {
    path:"instance-compteur/ajouter-nouveau/:idInstanceCompteur",
    component: AjoutRelevesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelevesRoutingModule { }
