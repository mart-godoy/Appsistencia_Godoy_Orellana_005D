import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanearPage } from './scanear.page';

const routes: Routes = [
  {
    path: '',
    component: ScanearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanearPageRoutingModule {}
