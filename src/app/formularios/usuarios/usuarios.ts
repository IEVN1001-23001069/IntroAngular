import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  //styleUrl: './usuarios.css',
  templateUrl: './usuarios.html',
})
export class Usuarios {
  usuario:string='Luna1111';
  contrasenia:string='1234';
  usuarioCorrecto:string='';
  contraseniaCorrecta:string='';
  mensaje:string='';

  validar():void{
    if (this.usuario!=this.usuarioCorrecto){
      this.mensaje = 'El nombre de usuario no es válido.'
    }

    if (this.contrasenia!=this.contraseniaCorrecta){
      this.mensaje = 'La contraseña no es válido.'
    }

    this.mensaje = 'Bienvenido al sistema ' + this.usuario
  }


}
