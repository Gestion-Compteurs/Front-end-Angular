import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeBatimentsComponent } from './liste-batiments/liste-batiments.component';
import { DetailsModificationComponent } from './details-modification/details-modification.component';
import {AjoutBatimentComponent} from "./ajout-batiment/ajout-batiment.component";


const routes: Routes = [
  {
    path: '',
    component: ListeBatimentsComponent
  },
  {
    path: 'ajouter-nouveau',
    component: AjoutBatimentComponent
  },
  {
    path: 'details-modification/:batimentId',
    component: DetailsModificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BatimentsRoutingModule {

}

