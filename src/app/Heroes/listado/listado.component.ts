import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroe-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  heroes: string[] = ['Linterna Verde', 'Mojo', 'Groot', 'Spider-Ham', 'MODOK'];
  eliminado: string = "";
  seleccionado: string = "";

  borrarHeroe(): void{
    if(this.heroes.length == 0){
      this.eliminado = '';
    } else{
      this.eliminado = this.heroes[0];
    }
    this.heroes.splice(0, 1);
  }
  seleccionarHeroe(heroe: string): void {
    this.seleccionado = heroe;
  }
  porDefecto(): void{
    this.heroes = ['Linterna Verde', 'Mojo', 'Groot', 'Spider-Ham', 'MODOK'];
  }
}
