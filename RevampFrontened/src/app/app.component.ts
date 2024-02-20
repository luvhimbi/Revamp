import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./WebSocketService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'RevampFrontened';
  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.initializeWebSocketConnection();
  }
}
