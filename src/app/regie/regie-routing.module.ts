import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegieListComponent } from './regie-list/regie-list.component';

const routes: Routes = [
  {
    path: '',
    component: RegieListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegieRoutingModule { }
