import { Component,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'Videojuego',
  templateUrl: './videojuegos.component.html',
 
})
export class VideojuegosComponent implements OnInit,DoCheck,OnDestroy {
    public titulo:string;
    public listado:string;
    
    
 constructor(){
    this.titulo="Componente de videojuegos";
    this.listado="juegos buenos";
    
 }
 ngOnInit(){
    
 }
 ngDoCheck(){
    
 }
 ngOnDestroy(){
    
 }
 cambiarTitulo(){
    this.titulo="Nuevo titulo";
 }
}
