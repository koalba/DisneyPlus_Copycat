import { Component, OnInit } from '@angular/core';
import { INavigation } from 'src/app/interfaces/navigation-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  navigation : INavigation[] = [
    { 
      title : 'Privacy policy', 
      url   : '#'
    },
    { 
      title : 'Cookies Policy', 
      url   : '#'
    },
    { 
      title : 'UK & EU Privacy Rights', 
      url   : '#'
    },
    { 
      title : 'Subscriber Agreement', 
      url   : '#'
    },
    { 
      title : 'Help', 
      url   : '#'
    },
    { 
      title : 'Supported Devices', 
      url   : '#'
    },
    { 
      title : 'About Us', 
      url   : '#'
    },
    { 
      title : 'Interest-based Ads', 
      url   : '#'
    },
    { 
      title : 'Manage Preferences', 
      url   : '#'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
