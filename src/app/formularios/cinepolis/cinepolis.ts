import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  // styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  nombre:string='';
  cantidadCompradoras:string='';
  tarjetaCineco:string='';
  cantidadBoletos:string='';

  valorpagar:number=0;
  mensaje:string='';

  calcular():void{
    let maxboletos:number = parseInt(this.cantidadCompradoras) * 7;

    if(parseInt(this.cantidadBoletos)> maxboletos){
      this.valorpagar = 0;
      this.mensaje = this.nombre + " No se pueden adquirir más de 7 boletos por persona";
      return;
    }

    let total = parseInt(this.cantidadBoletos) * 12.000;

    if (parseInt(this.cantidadBoletos)>5){
      total = total * 0.85;
      this.mensaje= this.nombre + ", boletas compradas exitosamente se aplicó un 15% sobre su compra";
      
    }else if (parseInt(this.cantidadBoletos)>=3){
      total = total *0.90;
      this.mensaje= this.nombre + ", boletas compradas exitosamente se aplicó un 10% sobre su compra";
    }

    if(this.tarjetaCineco === 'si'){
      total = total *0.90;
      this.mensaje= this.nombre + " se aplicó un 10% adicional sobre su compra por el uso de tarjeta cineco";
    }

    this.valorpagar=total;
  }

}
