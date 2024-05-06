import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeBatimentsComponent} from "./liste-batiments/liste-batiments.component";

const routes: Routes = [
  {
    path:'',
    component: ListeBatimentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatimentsRoutingModule { }
