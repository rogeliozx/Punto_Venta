import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import {VideojuegosComponent} from './Videojuegos/videojuegos.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import {CalculadoraPipe} from './pipes/calculadora.pipe';
import { CotactoComponent } from './cotacto/cotacto.component'; 
@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    CotactoComponent 
  ],
  imports: [//aqui se agregan las librerias internas de angular o archivosc com routing
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
