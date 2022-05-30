import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-skelleton',
  templateUrl: './slider-skelleton.component.html',
  styleUrls: ['./slider-skelleton.component.scss']
})
export class SliderSkelletonComponent implements OnInit {

  @HostListener( "window:resize" , ['$event'])
  redimensionar( e : any ) : void {
    this.anchoVentana = e.currentTarget.innerWidth
    this.setStyles()

  }

  @Input() tipo : string = ''
  @Input() numVisible : number = 0

  anchoVentana        : number = 0
  numVisibleOriginal  : number = 0
  resultado           : number = 0
  numElements         : number = 0
  numero              : number = 0

  sliderPlaceholder : any = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]

  slider : any = []

  constructor() { }

  ngOnInit(): void {
    this.anchoVentana = window.innerWidth
    this.numVisibleOriginal = this.numVisible
    this.setStyles()
  }

  setStyle() : Object {
    return {
      transform : `translateX(${ ( -100 / this.resultado ) * this.numero }%)`,
      width : `${ 100 * this.resultado }%`,
      'grid-template-columns' : `repeat( ${ this.numElements } , 1fr)`
    }
  }

  setStyles(): void {

    if( this.tipo === 'slider'){

      if ( this.anchoVentana > 1440 ){
        this.numVisible = 5
      } else if ( this.anchoVentana < 1440 && this.anchoVentana > 1025) {
        this.numVisible = 4
      } else if ( this.anchoVentana < 1025 && this.anchoVentana > 770) {
        this.numVisible = 3
      } else if ( this.anchoVentana < 770) {
        this.numVisible = 2
      }
    }

    this.numElements = this.sliderPlaceholder.length
    this.resultado = this.numElements / this.numVisible
  }

}
