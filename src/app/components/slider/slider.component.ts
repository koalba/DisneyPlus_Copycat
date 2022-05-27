import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ISlider } from 'src/app/interfaces/slider-interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @HostListener( "window:resize" , ['$event'])
  redimensionar( e : any ) : void {
    this.anchoVentana = e.currentTarget.innerWidth
    this.setStyles()

  }

  numero : number = 0
  interval : any

  @Input() cards        : ISlider | any = {}
  @Input() numVisible   : number = 5
  @Input() tipo         : string = ''  // Slider o Cover

  anchoVentana        : number = 0
  numVisibleOriginal  : number = 0
  resultado           : number = 0
  numElements         : number = 0


  constructor() { }

  ngOnInit(): void {
    this.autoNumero()

    this.anchoVentana = window.innerWidth
    this.numVisibleOriginal = this.numVisible
    this.setStyles()

    console.log(this.cards)
    console.log(this.tipo)
  }

  aumentaNumero() : void {
    ( this.numero < this.resultado - 1 ) ? this.numero++ : this.numero = 0

    this.autoNumero()
  }

  disminNumero() : void {
    ( this.numero > 0 ) ? this.numero-- : this.numero = this.resultado -1

    this.autoNumero()
  }

  setNumero( value : number ) : void{
    this.numero = value
  }

  autoNumero() : void{
    if( this.tipo === 'cover'){
      clearTimeout( this.interval )
      this.interval = setInterval( () => { this.aumentaNumero() }, 6000 )
    }
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

    this.numElements = this.cards.cards.length
    this.resultado = this.numElements / this.numVisible
  }
}
