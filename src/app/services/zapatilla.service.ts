import { Injectable } from "@angular/core";
import { Zapatilla } from "../model/zapatilla";
@Injectable()
export class ZapatillasServices{
    public zapatillas:Array<Zapatilla>;
   constructor(){ this.zapatillas=[
        new Zapatilla('dance',299,'Nike','white',false),
        new Zapatilla('sport',79.99,'Nike','white',true),
        new Zapatilla('basquet',199.99,'Adidas','white',true)
    ]       
}
getText(){
    console.log("Hola mundo desde zapatilla service")
}
getZapatillas():Array<Zapatilla>{
    return this.zapatillas;
}

}