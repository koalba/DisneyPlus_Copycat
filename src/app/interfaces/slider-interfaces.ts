import { IPeliculas } from "./pelicula.interface";

export interface ISlider {
    _id?     : string,
    tipo    : string,
    cards   : IPeliculas[],
    titulo? : string,
    height? : boolean
}
