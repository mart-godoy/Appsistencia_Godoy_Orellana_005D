import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosprofesorPageRoutingModule } from './datosprofesor-routing.module';

import { DatosprofesorPage } from './datosprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosprofesorPageRoutingModule
  ],
  declarations: [DatosprofesorPage]
})
export class DatosprofesorPageModule {}
