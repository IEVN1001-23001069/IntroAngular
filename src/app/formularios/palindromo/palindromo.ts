import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  //styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {
  frase: string = '';
  vocales: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',];
  consonantes: string[] = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z',
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
  ];

  numVocales: number = 0;
  listaVocales: string = '';
  numConsonantes: number = 0;
  listaConsonantes: string = '';
  esPalindromoTexto: string = '';

  analizar(): void {
  this.numVocales = 0;
  this.listaVocales = '';
  this.numConsonantes = 0;
  this.listaConsonantes = '';
  this.esPalindromoTexto = '';

  let textoLimpio: string = '';
  let textoInvertido: string = '';

  for (let letra of this.frase) {
    let esVocal: boolean = false;
    for (let v of this.vocales) {
      if (letra === v) {
        esVocal = true;
      }
    }
    let esConsonante: boolean = false;
    for (let c of this.consonantes) {
      if (letra === c) {
        esConsonante = true;
      }
    }

    if (esVocal) {
      this.numVocales++;
      this.listaVocales = this.listaVocales + letra + ' ';
    }

    if (esConsonante) {
      this.numConsonantes++;
      this.listaConsonantes = this.listaConsonantes + letra + ' ';
    }

    if (esVocal || esConsonante) {
      textoLimpio = textoLimpio + letra;
      textoInvertido = letra + textoInvertido;
    }
  }

  if (textoLimpio === textoInvertido && textoLimpio !== '') {
    this.esPalindromoTexto = 'Sí es palíndromo';
  } else {
    this.esPalindromoTexto = 'No es palíndromo';
  }
}
}
