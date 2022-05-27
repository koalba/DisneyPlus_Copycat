import { Component, Input, OnInit } from '@angular/core';
import { IChannels } from 'src/app/interfaces/channels.interface';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.scss']
})
export class ChanelComponent implements OnInit {

  @Input() channel : IChannels = { logo:  '', video: '', url:   '', title: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
