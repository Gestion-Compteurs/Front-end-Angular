import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeCompteursComponent} from "./liste-compteurs/liste-compteurs.component";

const routes: Routes = [
  {
    path: '',
    component: ListeCompteursComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteursRoutingModule { }
