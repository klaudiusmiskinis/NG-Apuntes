import { Component } from '@angular/core';

@Component({
    selector: 'heroe-component',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Cálico Electrónico';
    edad: number = 38;

    setNombre(nombre: string): void{
        this.nombre = nombre;
    }

    setEdad(edad: number): void{
        this.edad = edad;
    }

    porDefecto(): void{
        this.nombre = 'Cálico Electrónico';
        this.edad = 38;
    }

    concatenar(): string{
        return this.nombre.concat((this.edad).toString());
    }

    nombreMayusculas(): string{
        return this.nombre.toUpperCase();
    }
} 