// src/app/socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  login(username: string) {
    this.socket.emit('login', username);
  }

  sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  onMessage(callback: (msg: any) => void) {
    this.socket.on('chat message', callback);
  }

  onUserConnected(callback: (username: string) => void) {
    this.socket.on('user connected', callback);
  }

  onUserDisconnected(callback: (username: string) => void) {
    this.socket.on('user disconnected', callback);
  }
}
