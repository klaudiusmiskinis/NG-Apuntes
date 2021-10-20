import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  Personajes: Personaje[]
  constructor() { }
}

// ARRAY PERSONAJE
let personajes: Personaje[] = [];

// PRIMER PERSONAJE + PUSH
let personaje: Personaje = {
  nombre: 'Goku',
  poder: 300
}
personajes.push(personaje);

// SEGUNDO PERSONAJE + PUSH
personaje = {
  nombre: 'Piccolo',
  poder: 290
}
personajes.push(personaje);

// TERCERO PERSONAJE + PUSH
personaje = {
  nombre: 'Bardok',
  poder: 280
}
personajes.push(personaje);

// CUARTO PERSONAJE + PUSH
personaje = {
  nombre: 'Krilin',
  poder: 50
}
personajes.push(personaje);

// QUINTO PERSONAJE + PUSH
personaje = {
  nombre: 'Gohan',
  poder: 310
}
personajes.push(personaje);

// INTERFACE PERSONAJE
interface Personaje {
  nombre: string;
  poder: number;
}



