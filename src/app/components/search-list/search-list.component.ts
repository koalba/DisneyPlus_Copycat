import { Component, OnInit } from '@angular/core';
import { ICollection } from 'src/app/interfaces/collection.interface';
import { IPeliculas } from 'src/app/interfaces/pelicula.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  collections : ICollection[] = []
  cards       : IPeliculas [] = []
  valor       : string        = ''

  constructor( private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.filterPeliculas()
    this.moviesService.getCollections().subscribe( data => { this.collections = data.data })
  }

  filterPeliculas() : void {
    if( this.valor ){
      this.moviesService.filterPeliculasByName( this.valor ).subscribe( data => { this.cards = data.data } )
    } else {
      this.moviesService.getPeliculas().subscribe( data => { this.cards = data.data } )
    }
  }

  clear() : void {
    this.valor = ''
    this.filterPeliculas()
  }

}
