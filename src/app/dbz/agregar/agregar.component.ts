import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() personajesAgregar: Personaje[] = [];

  addPersonaje(formulario: NgForm) {
    //CREANDO OBJETO CON LOS DATOS DEL FORM
    let personaje: Personaje = {
      nombre: formulario.value.nombre,
      poder: formulario.value.poder
    };

    //AÑADIENDO PERSONAJE AL ARRAY
    this.personajesAgregar.push(personaje);
  };

}
