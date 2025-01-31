import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      userName: 'Alice',
      messageTime: '1m ago',
      isOnline: true,
      hasNotification: true
    },
    {
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      userName: 'Bob',
      messageTime: '5h ago',
      isOnline: false,
      hasNotification: false
    },
    // Add more chat items as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
