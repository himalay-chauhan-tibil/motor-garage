import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatInfo, ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})

export class ChatPage {

  @ViewChild(IonContent, { static: false }) content: IonContent | undefined;

  chatId: number = 0;
  chatData: ChatInfo | undefined;
  messages: any[] = [];
  currentUserId = 2; // Your user ID

  newMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    // Retrieve the chatId from the route parameters
    this.chatId = Number(this.route.snapshot.paramMap.get('chatId')?.valueOf()) ?? 0;
    this.loadChatData();

    if (!this.chatData) {
      // Show an alert or redirect
      alert('Chat not found');
      this.router.navigate(['home/tabs/tab1']);
    }
  }

  loadChatData() {
    // Fetch chat data based on chatId
    // For demonstration, we'll use dummy data
    // In a real app, fetch data from a service or API
    /* const chatInfo: ChatInfo = {
      1: {
        chatName: 'Chat with Alice',
        members: ['You', 'Alice'],
        messages: [
          {
            senderId: 1,
            senderName: 'Alice',
            senderAvatar: 'https://i.pravatar.cc/40?img=10',
            text: 'Hello!',
            time: '10:00 AM'
          },
          {
            senderId: 2,
            senderName: 'You',
            senderAvatar: 'https://i.pravatar.cc/40?img=20',
            text: 'Hi Alice, how are you?',
            time: '10:02 AM'
          },
        ]
      },
      2: {
        chatName: 'Chat with Bob',
        members: ['You', 'Bob'],
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
            text: 'What\'s up Bob?',
            time: '11:05 AM'
          },
        ]
      },
      // Add more chat data as needed
    }; */

    this.chatData = this.chatService.getChatData(this.chatId);
    this.messages = this.chatData?.messages || [];
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        senderId: this.currentUserId,
        senderName: 'You',
        senderAvatar: 'https://i.pravatar.cc/40?img=20',
        text: this.newMessage,
        time: 'Now'
      });
      this.newMessage = '';

      // Scroll to bottom after sending a message
      if (this.content) {
        setTimeout(() => {
          this.content?.scrollToBottom(200);
        }, 100);
      }
    }
  }

  // In your chat.page.ts file
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}

