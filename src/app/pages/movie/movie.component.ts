import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResponse } from 'src/app/interfaces/data.interface';
import { ISlider } from 'src/app/interfaces/slider-interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  id       : string = ''
  pelicula : any    = []

  sugerencias : ISlider = {
    tipo  : 'slider',
    cards : []
  }

  constructor( 
    private moviesService  : MoviesService,  
    private activatedRoute : ActivatedRoute
  ) {}

  numero : number = 0

  ngOnInit(): void { this.load() }

  setNumero( valor : number ) : void { this.numero = valor }

  setRating() : string { return `/assets/rating/${this.pelicula.details.rating}.png` }

  load() : void {
    this.activatedRoute.params.subscribe(( { id } ) => { this.id = id })

    this.moviesService.getPeliculaByID( this.id )
    .subscribe((data: IResponse) => {
        this.pelicula          = data.data
        this.sugerencias.cards = this.pelicula.sugerencias
    })

    this.setRating()
  } 

}
