import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, IResponseCollection } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL : string = 'https://disney-plus-api.vercel.app/'

  constructor( private http : HttpClient ) { }

  getPeliculas() : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + 'peliculas' )
  }

  getPeliculaByID( id : string ) : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + `peliculas/${id}` )
  }

  filterPeliculasByName( value : string ) : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + `peliculas/nombre/${value}` )
  }

  getCollections() : Observable<IResponseCollection> {
    return this.http.get<IResponseCollection>( this.baseURL + 'collections' )
  }

}
