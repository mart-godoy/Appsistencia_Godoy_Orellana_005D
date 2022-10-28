import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioalumnoPageRoutingModule } from './calendarioalumno-routing.module';

import { CalendarioalumnoPage } from './calendarioalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioalumnoPageRoutingModule
  ],
  declarations: [CalendarioalumnoPage]
})
export class CalendarioalumnoPageModule {}
