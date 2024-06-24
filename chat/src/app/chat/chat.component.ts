import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

   
  
export class ChatComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  messageSubscription: Subscription | undefined;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg); // Add new messages to the array
    });
  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe(); // Unsubscribe from messages when component is destroyed
    }
  }

  sendMessage(msg: string): void {
    this.chatService.sendMessage(msg); // Send a new message
  }
}