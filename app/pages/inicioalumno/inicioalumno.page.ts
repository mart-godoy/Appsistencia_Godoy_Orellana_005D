import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ExtraerdatosService } from '../../services/extraerdatos.service';
@Component({
  selector: 'app-inicioalumno',
  templateUrl: './inicioalumno.page.html',
  styleUrls: ['./inicioalumno.page.scss'],
})
export class InicioalumnoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('custom');
    this.menuController.enable(true,'custom');
    this.menuController.enable(false,'second');
  }

  obtenernombre2(){
    return ExtraerdatosService.nombre;
  }




}
