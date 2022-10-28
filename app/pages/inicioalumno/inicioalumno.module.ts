import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioalumnoPageRoutingModule } from './inicioalumno-routing.module';

import { InicioalumnoPage } from './inicioalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioalumnoPageRoutingModule
  ],
  declarations: [InicioalumnoPage]
})
export class InicioalumnoPageModule {}
