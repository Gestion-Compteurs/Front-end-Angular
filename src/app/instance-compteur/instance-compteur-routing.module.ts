import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DetailsInstancesEtRelevesComponent
} from "./details-instances-et-releves/details-instances-et-releves.component";

const routes: Routes = [
  {
    path : ':id',
    component: DetailsInstancesEtRelevesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstanceCompteurRoutingModule { }
