import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  //styleUrl: './areas.css',
  templateUrl: './areas.html',
})
export class Areas {
  valor1:string='';
  valor2:string='';
  radio:string='';
  perimetro:string='';
  apotema:string='';
  resultado:number=0;
  operacionSeleccionada:string='';

  rectangulo():void{
    this.resultado = parseInt(this.valor1) * parseInt(this.valor2);
  }

  triangulo():void{
    this.resultado = (parseInt(this.valor1) * parseInt(this.valor2))/2
  }

  circulo():void{
    this.resultado = (parseInt(this.radio)*Math.PI)
  }

  pentagono():void{
      this.resultado = (parseInt(this.perimetro)*parseInt(this.apotema))/2
  }

  calcular():void{
    switch(this.operacionSeleccionada){
      case 'rectangulo':
      this.rectangulo()
      break;
      case 'triangulo':
      this.triangulo()
      break;
      case 'circulo':
      this.circulo()
      break;
      case 'pentagono':
      this.pentagono()
      break;
    }
  }
}
