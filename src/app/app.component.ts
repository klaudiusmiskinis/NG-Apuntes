import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Contador app';
  numero: number = 0;
  base = 5;

  calcular(numero: number){
    this.numero += numero;
  }
}
