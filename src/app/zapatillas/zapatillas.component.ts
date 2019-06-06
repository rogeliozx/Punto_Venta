import { Component,OnInit } from '@angular/core';
import { Zapatilla} from '../model/zapatilla';
@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit{
    public titulo:string="Componenete de zapatillas"
    public zapatillas:Array<Zapatilla>;
    public marcas:Array<any>;
    public color:string;
    public prueba:string;
    constructor(){
        this.color="yellow";
this.marcas=new Array();
this.zapatillas=[
    new Zapatilla('dance',299,'Nike','white',false),
    new Zapatilla('sport',79.99,'Nike','white',true),
    new Zapatilla('basquet',199.99,'Adidas','white',true)
]

    }
    ngOnInit(){
        console.log(this.zapatillas)
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