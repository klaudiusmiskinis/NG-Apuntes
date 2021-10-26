import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() personajesAgregar: Personaje[] = [];

}
