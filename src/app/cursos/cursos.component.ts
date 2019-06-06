import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute,Params} from "@angular/router";
@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
 public nombre:string;
 public apellido:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router 
  ) { 
   


  }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre;
        this.apellido=params.apellido;//poner un + aun lado del asignacion parsea automaticamente 
console.log(this.nombre)
    } );
  }

}
