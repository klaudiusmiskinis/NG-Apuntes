import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Componentes
import { HeroeComponent } from './Heroes/Heroe/heroe.component';

@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeroeComponent]
})
export class AppModule {  }
