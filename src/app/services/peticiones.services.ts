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
}