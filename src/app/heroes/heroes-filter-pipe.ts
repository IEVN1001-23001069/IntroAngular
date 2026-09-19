import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from './heroes'; //Shift+Alt+. para hacer la importanción

@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform {
  transform(value:IHeroes[], args:string): IHeroes[]{
    let filter:string=args?args.toLocaleLowerCase():'';

    return filter?value.filter((hero:IHeroes)=>
      hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }
}
