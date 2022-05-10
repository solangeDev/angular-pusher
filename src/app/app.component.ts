import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { PusherService } from './pusher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-chat';
  username: string = '';
  message: string = '';
  messages: string[] = [];

  constructor(private pusherService: PusherService) {
  }


  ngOnInit(): void {
    this.pusherService.channel.bind('my-event', (data: any) => {
      this.messages.push(data);
    });
  }

  onSubmit(): void {
    console.log('aquii');
  }
}
