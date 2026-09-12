import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = 'IntroAngular';
  
  duplicaNumero (n1:number):number{
    return n1*2
  }

  pelicula={
    titulo:'Spider-Man',
    fechalanzamiento:new Date(),
    precio: 1234
  }
}
