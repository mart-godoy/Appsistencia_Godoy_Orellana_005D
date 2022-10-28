import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreoprofesorPage } from './correoprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: CorreoprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreoprofesorPageRoutingModule {}
