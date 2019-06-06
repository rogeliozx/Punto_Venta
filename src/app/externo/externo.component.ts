import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from "../services/peticiones.services";
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesServices]
})
export class ExternoComponent implements OnInit {
public usuario:any;
public userid:any;
public fecha:any;
  constructor(
    private _peticionesServices:PeticionesServices
  ) {
    this.fecha=new Date();
    this.userid=1;
   }

  ngOnInit() {
    this.cargaUsuarios()
  }
  cargaUsuarios(){
    this.usuario=false;
    this._peticionesServices.getUser(this.userid).subscribe(
      resultado=>{
        this.usuario=resultado.data;
        console.log(this.usuario)
      },err=>{
        console.log(err)
    })
  }
}
