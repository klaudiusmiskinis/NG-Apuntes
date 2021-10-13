import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Heroes } from './Heroes/Heroe/heroe.component';
import { HeroeComponent } from './Heroes/Heroe/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
