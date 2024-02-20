import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../WebSocketService';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {
  messages: string[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    // Initialize WebSocket connection
    this.websocketService.initializeWebSocketConnection();

    // Subscribe to WebSocket messages
    this.websocketService.subscribeToMessages().subscribe((message: string) => {
      // Update the messages array with the new message
      this.messages.push(message);
    });
  }
}
