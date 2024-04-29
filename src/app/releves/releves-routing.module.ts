import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutRelevesComponent} from "./ajout-releves/ajout-releves.component";
import {DetailsModificationComponent} from "./details-modification/details-modification.component";
import {ListeRelevesComponent} from "./liste-releves/liste-releves.component";

const routes: Routes = [
  {
    path:"",
    component:ListeRelevesComponent
  },
  {
    path:"ajout-releve",
    component: AjoutRelevesComponent
  },
  {
    path:"details-modification/:releveId",
    component:DetailsModificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelevesRoutingModule { }
