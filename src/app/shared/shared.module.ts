import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { StoryListComponent } from './components/story-list/story-list.component';



@NgModule({
  declarations: [
    CommonButtonComponent,
    HeaderComponent,
    ChatListComponent,
    StoryListComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CommonButtonComponent,
    HeaderComponent,
    ChatListComponent,
    StoryListComponent
  ]
})
export class SharedModule { }
