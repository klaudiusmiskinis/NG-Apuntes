import { Component } from "@angular/core";

@Component ({
    selector: 'contador-component',
    templateUrl: 'contador.component.html',
    styleUrls: ['./app.component.css']
})
export class Contador {
    title: string = 'Contador app';
    numero: number = 0;
    base = 5;

    calcular(numero: number){
        this.numero += numero;
    }

}