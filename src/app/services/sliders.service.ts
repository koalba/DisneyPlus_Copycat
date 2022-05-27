import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  baseURL : string = 'https://disney-plus-api.vercel.app/'

  constructor( private http : HttpClient ) { }

  getSliders() : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + 'sliders' )
  }

  // type = cover o slider

  getSlidersByType( type : string ) : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + `sliders/${ type }` )
  }
}
