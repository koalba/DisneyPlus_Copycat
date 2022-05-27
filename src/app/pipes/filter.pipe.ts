import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let [valor] = args

    let peliculas = value.filter( ( pelicula : any ) => {

      if ( pelicula.titulo.toLowerCase().includes( valor.toLowerCase() ) || pelicula.details.genre.find( ( element : string ) => element.toLowerCase().includes( valor.toLowerCase() ) )  ){
        return pelicula
      }
    } )

    return peliculas
  }

}
