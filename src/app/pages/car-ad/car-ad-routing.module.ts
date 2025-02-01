import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarAdPage } from './car-ad.page';

const routes: Routes = [
  {
    path: '',
    component: CarAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarAdPageRoutingModule {}
