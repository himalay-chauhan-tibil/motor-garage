import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class CommonButtonComponent {
  @Input()
  label!: string;
  @Input()
  expand!: string;
  @Input()
  color!: string;
  @Input()
  shape!: string;

  @Output() onButtonClick = new EventEmitter();

  onClick() {
    this.onButtonClick.emit();
  }
}