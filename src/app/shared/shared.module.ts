import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { MessageComponent } from './components/message/message.component';
import { ChatService } from './services/chat.service';



@NgModule({
  declarations: [
    CommonButtonComponent,
    HeaderComponent,
    ChatListComponent,
    StoryListComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CommonButtonComponent,
    HeaderComponent,
    ChatListComponent,
    StoryListComponent,
    MessageComponent
  ],
  providers: [ChatService]
})
export class SharedModule { }
