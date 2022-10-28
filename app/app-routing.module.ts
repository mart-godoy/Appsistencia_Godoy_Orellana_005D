import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'iniciarcomo',
    loadChildren: () => import('./pages/iniciarcomo/iniciarcomo.module').then( m => m.IniciarcomoPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicioprofesor',
    loadChildren: () => import('./pages/inicioprofesor/inicioprofesor.module').then( m => m.InicioprofesorPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'inicioalumno',
    loadChildren: () => import('./pages/inicioalumno/inicioalumno.module').then( m => m.InicioalumnoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'scanear',
    loadChildren: () => import('./pages/scanear/scanear.module').then( m => m.ScanearPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'generar',
    loadChildren: () => import('./pages/generar/generar.module').then( m => m.GenerarPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'correoprofesor',
    loadChildren: () => import('./pages/correoprofesor/correoprofesor.module').then( m => m.CorreoprofesorPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'correoalumno',
    loadChildren: () => import('./pages/correoalumno/correoalumno.module').then( m => m.CorreoalumnoPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./pages/crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'materias',
    loadChildren: () => import('./pages/materias/materias.module').then( m => m.MateriasPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'calendarioalumno',
    loadChildren: () => import('./pages/calendarioalumno/calendarioalumno.module').then( m => m.CalendarioalumnoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'datosprofesor',
    loadChildren: () => import('./pages/datosprofesor/datosprofesor.module').then( m => m.DatosprofesorPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'datosalumno',
    loadChildren: () => import('./pages/datosalumno/datosalumno.module').then( m => m.DatosalumnoPageModule),
    canActivate:[IngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
