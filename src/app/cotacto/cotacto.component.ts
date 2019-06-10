import { Component, OnInit } from '@angular/core';
import { MensajeUsuario } from "../model/usuario";
@Component({
  selector: 'app-cotacto',
  templateUrl: './cotacto.component.html',
  styleUrls: ['./cotacto.component.css']
})
export class CotactoComponent implements OnInit {
public usuario:MensajeUsuario;
  constructor() {
    this.usuario=new MensajeUsuario('','','','')
   }

  ngOnInit() {
  }
  onSubmit(form){
    
    console.log(this.usuario)
    form.reset()
  }
}
