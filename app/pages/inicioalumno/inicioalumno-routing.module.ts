import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioalumnoPage } from './inicioalumno.page';

const routes: Routes = [
  {
    path: '',
    component: InicioalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioalumnoPageRoutingModule {}
