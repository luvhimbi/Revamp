import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "../WebSocketService";

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  messageInput: string = '';

  constructor(private websocketService: WebsocketService) {}

  sendMessage(): void {
    if (this.messageInput.trim() !== '') {
      this.websocketService.sendMessage(this.messageInput);
      this.messageInput = '';
    }
  }
}
