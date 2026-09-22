import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  //styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  num1:string='';
  num2:string='';
  num3:string='';
  num4:string='';
  resultado:number=0;

  calcular():void{
    let primsec=parseInt(this.num3)-parseInt(this.num1);
    let prisec2 = primsec* primsec;
    let segusec = parseInt(this.num4)-parseInt(this.num2);
    let segusec2 = segusec * segusec;
    this.resultado = Math.sqrt(segusec2 + prisec2);
  }

}
