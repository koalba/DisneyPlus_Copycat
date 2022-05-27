import { IChannels } from "./channels.interface";
import { ICollection } from "./collection.interface";
import { IPeliculas } from "./pelicula.interface";

export interface IResponse {
    data: IPeliculas[];
    msj:  string;
}

export interface IResponseChannel {
    data: IChannels[];
    msj:  string;
}

export interface IUser {
    _id      : string
    username : string,
    avatar   : string,
    locked   : boolean,
    active   : boolean
}

export interface IResponseUser {
    data: IUser[];
    msj:  string;
}

export interface IResponseCollection {
    data: ICollection[];
    msj:  string;
}


