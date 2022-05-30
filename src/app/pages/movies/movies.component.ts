import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnChanges, OnInit } from '@angular/core';
import { IResponse } from 'src/app/interfaces/data.interface';
import { IPeliculas } from 'src/app/interfaces/pelicula.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  filter : string = 'Featured'

  peliculas  : IPeliculas[] = []
  oPeliculas : IPeliculas[] = []
  genres     : string    [] = []

  constructor( private movieService : MoviesService ) { }

  ngOnInit(): void {
    this.movieService.getPeliculas().subscribe(( data : IResponse ) => {
      this.peliculas = data.data

      this.peliculas.map( pelicula => {
        pelicula.details.genre.map( genre => { 
          this.genres = !this.genres.includes( genre ) ? [...this.genres, genre] : this.genres 
        })
      })
      
      this.oPeliculas = [...this.peliculas]
      this.oPeliculas.sort(( a , b ) => {
        if( a.titulo > b.titulo ){
          return 1
        } else if( a.titulo < b.titulo ) {
          return -1
        }
        return 0
      })
    })
  }
}
