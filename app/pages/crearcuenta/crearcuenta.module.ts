import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcuentaPageRoutingModule } from './crearcuenta-routing.module';

import { CrearcuentaPage } from './crearcuenta.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearcuentaPageRoutingModule
  ],
  declarations: [CrearcuentaPage]
})
export class CrearcuentaPageModule {}
