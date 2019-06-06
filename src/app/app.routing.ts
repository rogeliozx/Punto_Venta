//impor modulos de ruter anguular
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";

//importar Componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import {VideojuegosComponent } from "./Videojuegos/videojuegos.component";
import {CursosComponent} from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

//Arrray configuracion de rutas
const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'tenis',component:ZapatillasComponent},
{path:'Videojuegos',component:VideojuegosComponent},
{path:'cursos',component:CursosComponent},
{path:'cursos/:nombre/:apellido',component:CursosComponent},
{path:'**', component:HomeComponent}
];
//Exportar el modulo del ruter
export const appRoutingProviders:any[]=[];//es un arrya normal de lo que sea
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);//aqui usas modulos con su funciones