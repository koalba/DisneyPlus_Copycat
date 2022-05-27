import { Component, OnInit } from '@angular/core';
import { IResponse } from 'src/app/interfaces/data.interface';
import { ISlider } from 'src/app/interfaces/slider-interfaces';
import { SlidersService } from 'src/app/services/sliders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cover   : any 
  sliders : any

  constructor( public sliderService : SlidersService) { }

  ngOnInit(): void {
    this.sliderService.getSlidersByType('cover').subscribe( ( data : IResponse ) => {
      this.cover = data.data
      console.log(this.cover)
    })
    this.sliderService.getSlidersByType('slider').subscribe( ( data : IResponse ) => {
      this.sliders = data.data
      console.log(this.sliders)

    })
  }

}
