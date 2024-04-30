import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeCompteursComponent} from "./liste-compteurs/liste-compteurs.component";
import {DetailsModicationComponent} from "./details-modication/details-modication.component";
import {AjoutCompteursComponent} from "./ajout-compteurs/ajout-compteurs.component";

const routes: Routes = [
  {
    path: '',
    component: ListeCompteursComponent
  },
  {
    path: 'ajouter-nouveau',
    component: AjoutCompteursComponent
  },
  {
    path: 'details-modification/:compteurId',
    component: DetailsModicationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteursRoutingModule { }
