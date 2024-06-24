import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000'); // Replace with your server URL
    this.socket.on('chat message', (msg: string) => {
      this.handleNewMessage(msg); // Handle incoming messages
    });
  }

  sendMessage(msg: string): void {
    this.socket.emit('chat message', msg); // Send a message to the server
  }

  getMessages(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('chat message', (msg: string) => {
        observer.next(msg); // Emit messages received from the server
      });
    });
  }

  private handleNewMessage(msg: string): void {
    // Handle how to display the message in your UI here
    console.log('New message received:', msg);
    // You can update your UI state or emit an event for components to react to
  }
}
