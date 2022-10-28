import { Component, OnInit } from '@angular/core';
import { ExtraerdatosService } from '../../services/extraerdatos.service';
@Component({
  selector: 'app-datosalumno',
  templateUrl: './datosalumno.page.html',
  styleUrls: ['./datosalumno.page.scss'],
})
export class DatosalumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obtenernombre2(){
    return ExtraerdatosService.nombre;
  }

  obtenercorreo2(){
    return ExtraerdatosService.correoelectronico;
  }

}
