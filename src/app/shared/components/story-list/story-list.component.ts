import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class StoryListComponent implements OnInit {

  /* <ion-avatar slot="icon-only">
                    <img alt="Silhouette of a person's head"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar> */
  stories = [
    { image: 'https://ionicframework.com/docs/img/demos/avatar.svg', username: 'User 1' },
    { image: 'https://ionicframework.com/docs/img/demos/avatar.svg', username: 'User 2' },
    { image: 'https://ionicframework.com/docs/img/demos/avatar.svg', username: 'User 3' },
    { image: 'https://ionicframework.com/docs/img/demos/avatar.svg', username: 'User 4' },
    { image: 'https://ionicframework.com/docs/img/demos/avatar.svg', username: 'User 5' },
    { image: 'https://ionicframework.com/docs/img/demos/avatar.svg', username: 'User 6' },
    { image: 'https://ionicframework.com/docs/img/demos/avatar.svg', username: 'User 7' },
    // Add more story images as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
