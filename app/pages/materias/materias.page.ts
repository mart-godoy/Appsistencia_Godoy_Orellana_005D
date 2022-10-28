import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  constructor(private menuController: MenuController) { }


  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('custom');
    this.menuController.enable(true,'custom');
    this.menuController.enable(false,'second');
  }

}
