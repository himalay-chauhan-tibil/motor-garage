import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class JoinPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToSignupPage() {
    this.router.navigate(['signup']);
  }

}