import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../../services/calendario.service';

@Component({
  selector: 'app-calendarioalumno',
  templateUrl: './calendarioalumno.page.html',
  styleUrls: ['./calendarioalumno.page.scss'],
})
export class CalendarioalumnoPage implements OnInit {

  calendario2 : any;

  constructor(private calendarioService: CalendarioService) { }

  ngOnInit() {
    this.calendarioService.getfechas().subscribe(resp => {
      console.log('calendario', resp);
      this.calendario2 = resp;
    })
  }

}

