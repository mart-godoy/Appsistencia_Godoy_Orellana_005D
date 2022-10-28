import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private httpClient: HttpClient) { }
  getfechas(){
    return this.httpClient.get('https://apis.digital.gob.cl/fl/feriados/2022');
  }
}
