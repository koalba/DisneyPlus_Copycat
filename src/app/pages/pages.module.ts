import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SearchComponent,
    MovieComponent
  ],
  exports: [
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
