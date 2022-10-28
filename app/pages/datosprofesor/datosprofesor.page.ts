import { Component, OnInit } from '@angular/core';
import { ExtraerdatosService } from '../../services/extraerdatos.service';
@Component({
  selector: 'app-datosprofesor',
  templateUrl: './datosprofesor.page.html',
  styleUrls: ['./datosprofesor.page.scss'],
})
export class DatosprofesorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obtenernombre(){
    return ExtraerdatosService.nombre;
  }

  obtenercorreo(){
    return ExtraerdatosService.correoelectronico;
  }
}
