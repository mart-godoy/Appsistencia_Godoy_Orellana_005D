import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioprofesorPageRoutingModule } from './inicioprofesor-routing.module';

import { InicioprofesorPage } from './inicioprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioprofesorPageRoutingModule
  ],
  declarations: [InicioprofesorPage]
})
export class InicioprofesorPageModule {}
