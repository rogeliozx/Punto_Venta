import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Observable,of, from } from 'rxjs';

@Injectable()
export class PeticionesServices{
    public url:string;
    constructor(
        public _http:HttpClient 

    ){
this.url="https://reqres.in";
    }
    getUser(userid):Observable<any>{
        return this._http.get(this.url+'/api/users/'+userid);
    }
    addUser(user):Observable<any>{
        let json=JSON.stringify(user);
        let head=new HttpHeaders().set('Content-Type','aplication/json');
        return this._http.post(this.url+'/api/users',json,{headers:head})
    }
}