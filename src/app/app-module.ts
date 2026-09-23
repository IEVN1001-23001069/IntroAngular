import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Distancia } from './formularios/distancia/distancia';
import { Areas } from './formularios/areas/areas';
import { Palindromo } from './formularios/palindromo/palindromo';
import { Usuarios } from './formularios/usuarios/usuarios';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Distancia,
    Areas,
    Palindromo,
    Usuarios,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

//Para trabajar los formularios debemos de importar el modulo de formularios con la linea:
// import { FormsModule } from '@angular/forms'; recuerda agregarlo al Imports dentro del @NgModule
