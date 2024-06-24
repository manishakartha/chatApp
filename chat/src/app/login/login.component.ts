import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router, private socketService: SocketService) {}

  login() {
    if (this.username) {
      this.socketService.login(this.username);
      this.router.navigate(['/chat']);
    }
  }
}
