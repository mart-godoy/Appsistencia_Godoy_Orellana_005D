import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreoalumnoPage } from './correoalumno.page';

const routes: Routes = [
  {
    path: '',
    component: CorreoalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreoalumnoPageRoutingModule {}
