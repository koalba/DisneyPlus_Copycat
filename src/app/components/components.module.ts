import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { ChanelComponent } from './chanel/chanel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChannelsComponent } from './channels/channels.component';
import { RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list/search-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SliderComponent,
    SliderCardComponent,
    ChanelComponent,
    ChannelsComponent,
    HeaderComponent,
    FooterComponent,
    SearchListComponent
  ],
  exports: [
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    ChannelsComponent,
    SearchListComponent,
    SliderCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule
  ]
})
export class ComponentsModule { }
