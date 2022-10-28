import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarcomoPage } from './iniciarcomo.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarcomoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarcomoPageRoutingModule {}
