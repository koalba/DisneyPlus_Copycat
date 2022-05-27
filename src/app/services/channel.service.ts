import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseChannel }  from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  baseURL : string = 'https://disney-plus-api.vercel.app/'

  constructor( private http : HttpClient ) { }

  getChannels() : Observable<IResponseChannel> {
    return this.http.get<IResponseChannel>( this.baseURL + 'channels' )
  }

  getChannelByID( id : string ) : Observable<IResponseChannel> {
    return this.http.get<IResponseChannel>( this.baseURL + `channels/${id}` )
  }
}
