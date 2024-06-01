import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionAdminsComponent} from "./gestion-admins/gestion-admins.component";

const routes: Routes = [
  {
    path : '',
    component : GestionAdminsComponent
  },
  {
    path : 'admins',
    component : GestionAdminsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegiesRoutingModule { }
