import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class ChatListComponent implements OnInit {

  chats = [
    {
      chatId: 1,
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      userName: 'Sagar',
      messageTime: '1m ago',
      isOnline: true,
      hasNotification: true
    },
    {
      chatId: 2,
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      userName: 'Himalay',
      messageTime: '5h ago',
      isOnline: false,
      hasNotification: false
    },
    // Add more chat items as needed
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openChat(chat: any) {
    // Navigate to the chat page with the selected chatId
    this.router.navigate(['/chat', chat.chatId]);
  }

}
