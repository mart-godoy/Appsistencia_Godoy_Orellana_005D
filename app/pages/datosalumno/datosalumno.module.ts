import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosalumnoPageRoutingModule } from './datosalumno-routing.module';

import { DatosalumnoPage } from './datosalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosalumnoPageRoutingModule
  ],
  declarations: [DatosalumnoPage]
})
export class DatosalumnoPageModule {}
