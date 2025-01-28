import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToLoginPage() {
    this.router.navigate(['login']);
  }

}
