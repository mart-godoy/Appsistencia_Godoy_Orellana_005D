import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarcomoPageRoutingModule } from './iniciarcomo-routing.module';

import { IniciarcomoPage } from './iniciarcomo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarcomoPageRoutingModule
  ],
  declarations: [IniciarcomoPage]
})
export class IniciarcomoPageModule {}
