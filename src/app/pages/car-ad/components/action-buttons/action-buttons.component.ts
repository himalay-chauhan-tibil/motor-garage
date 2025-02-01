import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class ActionButtonsComponent {
  contactDealer() {
    console.log('Contact Dealer clicked');
  }

  viewCarDetails() {
    console.log('Car Details clicked');
  }

  viewLocation() {
    console.log('Location clicked');
  }

  calculateEMI() {
    console.log('EMI Loan clicked');
  }
}
