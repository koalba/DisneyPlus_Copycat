import { Component, Input, OnInit } from '@angular/core';
import { ICollection } from 'src/app/interfaces/collection.interface';
import { IPeliculas } from 'src/app/interfaces/pelicula.interface';
@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() data   : any 

  @Input() collection : ICollection = {
    _id  : '',
    name : '',
    url  : ''
  }

  @Input() tipo   : string = ''
  @Input() height : boolean = false

  constructor() { }

  ngOnInit(): void {}

}
