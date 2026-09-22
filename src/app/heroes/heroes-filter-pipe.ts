import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from './heroes'; //Shift+Alt+. para hacer la importanción

@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform { //Es una clase de Pipe que ya tieneangular 
  transform(value:IHeroes[], args:string): IHeroes[]{ // Recibe dos parametros, el arreglo de objetos y un dato string pra el filtrado, nos va a regresar un arreglo con la condición del filtrado
    let filter:string=args?args.toLocaleLowerCase():''; //Una variable de tipo filtro, luego una condicional ternaria con ? y transformar el elemento a minusculas, se alamacena en filter

    return filter?value.filter((hero:IHeroes)=> 
      hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;//Hace una comparación de las dos cadenas y entrega la palabra que coincida,en caso erroneo regresaria a -1
  }
}
