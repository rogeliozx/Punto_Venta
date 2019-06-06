import { Component } from '@angular/core';

@Component({
  selector: 'Videojuego',
  templateUrl: './videojuegos.component.html',
 
})
export class VideojuegosComponent {
    public titulo:string;
    public listado:string;
    
    
 constructor(){
    this.titulo="Componente de videojuegos";
    this.listado="juegos buenos";
    
 }
}
