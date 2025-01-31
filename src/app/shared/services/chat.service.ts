import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatInfo: ChatInfo[] = [
    {
      chatId: 1,
      chatName: 'Team Supercars',
      members: ['You', 'Sagar'],
      messages: [
        {
          senderId: 1,
          senderName: 'Sagar',
          senderAvatar: 'https://i.pravatar.cc/40?img=12',
          text: 'Hello!',
          time: '10:00 AM'
        },
        {
          senderId: 2,
          senderName: 'You',
          senderAvatar: 'https://i.pravatar.cc/40?img=14',
          text: 'Hi Sagar, how are you?',
          time: '10:02 AM'
        },
      ]
    }, {
      chatId: 2,
      chatName: 'Chat with Bob',
      members: ['You', 'Himalay'],
      messages: [
        {
          senderId: 3,
          senderName: 'Bob',
          senderAvatar: 'https://i.pravatar.cc/40?img=30',
          text: 'Hey!',
          time: '11:00 AM'
        },
        {
          senderId: 2,
          senderName: 'You',
          senderAvatar: 'https://i.pravatar.cc/40?img=20',
          text: 'What\'s up Himalay?',
          time: '11:05 AM'
        },
      ]
    }];

  constructor() { }

  getChatData(chatId: number): ChatInfo | undefined {
    return this.chatInfo.find(chat => chat.chatId === chatId);
  }
}

export interface ChatInfo {
  chatId: number;
  chatName: string;
  members: string[];
  messages: {
    senderId: number;
    senderName: string;
    senderAvatar: string;
    text: string;
    time: string;
  }[];
};
