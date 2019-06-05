import { Component } from '@angular/core';
import {Configuracion} from './model/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'punto-venta';
  public mostrar:boolean=true;
  public descripcion:string=Configuracion.descripcion;
  public config;
constructor(){
  this.config=Configuracion;
  
  this.title=Configuracion.titulo;
}
  ocultarVideojugos(e){
    this.mostrar=e;
  }
}
