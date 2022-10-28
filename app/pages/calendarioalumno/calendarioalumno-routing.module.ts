import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioalumnoPage } from './calendarioalumno.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioalumnoPageRoutingModule {}
