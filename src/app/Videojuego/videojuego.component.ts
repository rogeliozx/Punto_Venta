import {Component} from '@angular/core';


@Component({
    selector:'Videojuego',
    template:`<h2>Componente de Videojuego</h2>
    <ul>
    <li>Gta</li>
    <li>Mario</li>
    <li>Tekken</li>
    </ul>
    `
})
export class VideojuegoComponent{
    constructor(){
        console.log("puto pino");
    }
}