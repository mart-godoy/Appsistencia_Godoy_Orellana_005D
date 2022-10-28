import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

interface Componente2{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navController : NavController) {}

  componentes: Componente[]=[ 
    {
      icon: 'people-outline',
      name:  'Perfil',
      redirecTo: '/datosalumno' 
    }, 
    {
      icon:'home-outline',
      name: 'Inicio', 
      redirecTo: '/inicioalumno'
    },
    {
      icon:'library-outline',
      name: 'Asignaturas', 
      redirecTo: '/materias'
    },
    {
      icon:'mail-unread-outline',
      name: 'Mensajes', 
      redirecTo: '/mensajes'
    },
    {
      icon: 'calendar-outline',
      name: 'Calendario',
      redirecTo: '/calendarioalumno',
    },
    {
      icon: 'cog',
      name:  'Configuracion',
      redirecTo: '' 
    },

  ];


  componentes2: Componente2[]=[ 
    {
      icon: 'people-outline',
      name:  'Perfil',
      redirecTo: '/datosprofesor' 
    }, 
    {
      icon:'home-outline',
      name: 'Inicio', 
      redirecTo: '/inicioprofesor'
    },
    {
      icon:'file-tray-stacked-outline',
      name: 'Secciones', 
      redirecTo: '/secciones'
    },
    {
      icon:'mail-unread-outline',
      name: 'Mensajes', 
      redirecTo: '/mensajes'
    },
    {
      icon: 'calendar-outline',
      name: 'Calendario',
      redirecTo: '/calendario',
    },

    
  ];

  logout(){
    localStorage.setItem('ingresado', 'false')
    this.navController.navigateRoot('/')
  }
  




}

