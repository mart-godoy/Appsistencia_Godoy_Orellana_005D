import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CrearcuentaserviceService, Usuario } from '../../services/crearcuentaservice.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario = <Usuario>{};


  constructor(private alertController: AlertController,
              private registroService: CrearcuentaserviceService,
              private toast: ToastController, 
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre' : new FormControl("",[Validators.required,
                    Validators.minLength(4)]), 
                  'correo' : new FormControl("", Validators.required), 
                  'password': new FormControl("", [Validators.required,
                    Validators.minLength(8)]), 
                  'confirmaPass': new FormControl("",[Validators.required,
                  Validators.minLength(8)] )
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
      this.alertError();
    }
    else if(form.password !== form.confirmaPass) {
      this.showToast('Las contraseñas no coinciden ');
      }
    else{
    this.newUsuario.nomUsuario=form.nombre;
    this.newUsuario.correoUsuario=form.correo;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.repassUsuario=form.confirmaPass;
    this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
      this.newUsuario=<Usuario>{};
      this.showToast('Usuario Creado!');
    });
    this.formularioRegistro.reset();
  }
  }//findelmetodo

  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }


}