import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanearPageRoutingModule } from './scanear-routing.module';

import { ScanearPage } from './scanear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanearPageRoutingModule
  ],
  declarations: [ScanearPage]
})
export class ScanearPageModule {}
