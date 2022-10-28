import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../../services/calendario.service';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  calendario : any;

  constructor(private calendarioService: CalendarioService) { }

  ngOnInit() {
    this.calendarioService.getfechas().subscribe(resp => {
      console.log('calendario', resp);
      this.calendario = resp;
    })
  }


}
