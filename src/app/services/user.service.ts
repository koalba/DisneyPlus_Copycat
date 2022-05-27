import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseUser } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL : string = 'https://disney-plus-api.vercel.app/'

  constructor( private http : HttpClient ) { }

  getUsers() : Observable<IResponseUser>{
    return this.http.get<IResponseUser>( this.baseURL + 'users' )
  }

  updateUsers( id : string ) {
    return this.http.put( this.baseURL  + 'users', { id } )
  }
}
