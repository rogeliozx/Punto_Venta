import { Component,OnInit } from '@angular/core';
import { Zapatilla} from '../model/zapatilla';
import { ZapatillasServices } from "../services/zapatilla.service";
@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers:[ZapatillasServices]
})
export class ZapatillasComponent implements OnInit{
    public titulo:string="Componenete de zapatillas"
    public zapatillas:Array<Zapatilla>;
    public marcas:Array<any>;
    public color:string;
    public prueba:string;
    constructor(
private _zapatillasServices:ZapatillasServices

    ){
        this.color="yellow";
this.marcas=new Array();


    }
    ngOnInit(){
    this.zapatillas= this._zapatillasServices.getZapatillas();
    this._zapatillasServices.getText();
        this.tenis()
    }
    tenis(){
      
    
   
        this.zapatillas.map((element,index,zapatos)=>{
            if(this.marcas.indexOf(element.marca)<0){
                this.marcas.push(element.marca)
            }
       })
       console.log(this.marcas);
    }
    getTenis(){
        console.log(this.prueba)
    }
    addTenis(){
        this.marcas.push(this.prueba);
    }
    borrarMarca(indice){
        this.marcas.splice(indice,1);
    }
    mostrar(){
       alert(this.prueba);
    }
}