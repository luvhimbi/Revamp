import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WebsocketService {
    private stompClient:any;
    private messagesSubject: Subject<string> = new Subject<string>();

    initializeWebSocketConnection() {
        const socket = new SockJS('http://localhost:8080/stomp-endpoint');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, () => {
            this.stompClient.subscribe('/topic/messages', (message: { body: string }) => {
                // Handle incoming messages here
                this.messagesSubject.next(message.body);
            });
        });
    }

    sendMessage(message: string) {
        this.stompClient.send('/app/chat', {}, message);
    }

    subscribeToMessages(): Observable<string> {
        return this.messagesSubject.asObservable();
    }
}
