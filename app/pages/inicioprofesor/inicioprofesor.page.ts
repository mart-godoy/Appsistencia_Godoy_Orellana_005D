import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ExtraerdatosService } from '../../services/extraerdatos.service';
@Component({
  selector: 'app-inicioprofesor',
  templateUrl: './inicioprofesor.page.html',
  styleUrls: ['./inicioprofesor.page.scss'],
})
export class InicioprofesorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu2(){
    this.menuController.open('second');
    this.menuController.enable(true,'second');
    this.menuController.enable(false,'custom');
  }

  obtenernombre(){
    return ExtraerdatosService.nombre;
  }




}
