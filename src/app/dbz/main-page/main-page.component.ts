import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  Personajes: Personaje[] = inicializarPersonajes();
}

// INTERFACE PERSONAJE
interface Personaje {
  nombre: string;
  poder: number;
}

// FUNCION PARA INICIALIZAR
function inicializarPersonajes() {
  // INICIALIZACION DE VARIABLES Y PRIMER PERSONAJE + PUSH
  let Personajes: Personaje[] = []
  let personaje: Personaje = {
    nombre: 'Goku',
    poder: 300
  }
  Personajes.push(personaje);

  // SEGUNDO PERSONAJE + PUSH
  personaje = {
    nombre: 'Piccolo',
    poder: 290
  }
  Personajes.push(personaje);

  // TERCERO PERSONAJE + PUSH
  personaje = {
    nombre: 'Bardok',
    poder: 280
  }
  Personajes.push(personaje);

  // CUARTO PERSONAJE + PUSH
  personaje = {
    nombre: 'Krilin',
    poder: 50
  }
  Personajes.push(personaje);

  // QUINTO PERSONAJE + PUSH
  personaje = {
    nombre: 'Gohan',
    poder: 310
  }
  Personajes.push(personaje);
  return Personajes;
}




