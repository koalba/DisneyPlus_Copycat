import { Component, OnInit } from '@angular/core';
import { IChannels } from 'src/app/interfaces/channels.interface';
import { IResponseChannel } from 'src/app/interfaces/data.interface';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels : IChannels[] = []

  constructor( private channelService : ChannelService ) { }

  ngOnInit() : void {

    this.channelService.getChannels().subscribe( ( data :IResponseChannel ) => { this.channels = data.data } )

  }

}
