import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit {

  @Input() message: any;
  @Input()
  isCurrentUser: boolean = false;

  constructor() { }

  ngOnInit() { }

}
