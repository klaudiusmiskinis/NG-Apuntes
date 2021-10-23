import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  Personajes: Personaje[] = inicializarPersonajes();

  //METODO ENCARGADO DE INTERPRETAR EL FORM Y AÑADIR EL PERSONAJE
  addPersonaje(formulario: NgForm) {
    //CREANDO OBJETO CON LOS DATOS DEL FORM
    let personaje: Personaje = {
      nombre: formulario.value.nombre,
      poder: formulario.value.poder
    };

    console.log(formulario.value)

    //AÑADIENDO PERSONAJE AL ARRAY
    this.Personajes.push(personaje);
  };
};

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




