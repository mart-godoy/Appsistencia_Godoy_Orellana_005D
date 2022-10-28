import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosalumnoPage } from './datosalumno.page';

const routes: Routes = [
  {
    path: '',
    component: DatosalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosalumnoPageRoutingModule {}
