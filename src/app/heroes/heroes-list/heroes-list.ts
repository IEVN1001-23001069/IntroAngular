import { Component } from '@angular/core';
import { IHeroes } from '../heroes'; //Shift+Alt+. para hacer la importanción instantaneamente al agregar la interfaz

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  // styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }

  heroes:IHeroes[]=[ //Construimos con un tipo de dato de angular que es cualquiera any y tipo de dato arreglo, ahora pasara a hacer referencia a una interfaz y sera de tipo IHeroes la interfaz que creamos
    

    {
      imagen:'https://dragonball-api.com/characters/goku_normal.webp',
      nombre:'Goku',
      description:'¡¡¡¡¡¡Kame Hame Ha!!!!!!',
      race:'Saiyan',
      ki:60000000
    },
    {
      imagen:'https://dragonball-api.com/characters/bulma.webp',
      nombre:'Bulma',
      description:'Bulma es la protagonista femenina',
      race:'Human',
      ki:0
    },
    {
      imagen:'https://dragonball-api.com/characters/gohan.webp',
      nombre:'Gohan',
      description:'Es uno de los personajes principales',
      race:'Saiyan',
      ki:45000000
    },
    {
      imagen:'https://dragonball-api.com/characters/ChiChi_DBS.webp',
      nombre:'Chi Chi',
      description:'Esposa de Goku y madre de Gohan.',
      race:'Human',
      ki:0
    },
  ]
}
