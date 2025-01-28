import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
  constructor(private router: Router) { }

  navigateToJoinPage() {
    console.log('navigateToJoinPage');
    this.router.navigate(['/join']);
  }
}