import { Injectable } from '@angular/core';
declare const Pusher: any;
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()

export class PusherService {
  pusher: any;
  channel: any;

  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      encrypted: true
    });

    this.channel = this.pusher.subscribe('my-channel');
  }
}
