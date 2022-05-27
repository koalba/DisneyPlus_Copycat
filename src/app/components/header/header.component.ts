import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResponseUser, IUser } from 'src/app/interfaces/data.interface';
import { INavigation } from 'src/app/interfaces/navigation-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll : number = 0

  @HostListener('window:scroll', ['$event'])
  onScroll( e : Event ){
    this.scroll = window.scrollY
  }

  navigation : INavigation[] = [
    { 
      title : 'Home', 
      url   : '', 
      svg   : '/assets/home.svg'
    },
    { 
      title : 'Search', 
      url   : '/search', 
      svg   : '/assets/search.svg'
    },
    { 
      title : 'Watchlist', 
      url   : '#', 
      svg   : '/assets/watchlist.svg'
    }
  ]

  secondary : INavigation[] = [
    { 
      title : 'Originals', 
      url   : '#', 
      svg   : '/assets/originals.svg'
    },
    { 
      title : 'Movies', 
      url   : '/movies', 
      svg   : '/assets/movies.svg'
    },
    { 
      title : 'Series', 
      url   : '#', 
      svg   : '/assets/series.svg'
    }
  ]

  users : IUser[] = []

  constructor( private userService : UserService , private router : Router ) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe( ( data : IResponseUser ) => { this.users = data.data })
  }

  activeUser( id : string ) : void {
    this.userService.updateUsers( id ).subscribe( ( data : any ) => { this.users = data.data })
  }

}
