import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoprofesorPageRoutingModule } from './correoprofesor-routing.module';

import { CorreoprofesorPage } from './correoprofesor.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CorreoprofesorPageRoutingModule
  ],
  declarations: [CorreoprofesorPage]
})
export class CorreoprofesorPageModule {}
