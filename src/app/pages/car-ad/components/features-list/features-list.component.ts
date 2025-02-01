import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class FeaturesListComponent implements OnInit {
  features: string[] = [
    'Autopilot',
    '360° Camera',
    'Lane Assist',
    'Adaptive Cruise Control',
    'Heated Seats',
    'Wireless Charging',
    'Premium Sound System',
  ];

  constructor() { }

  ngOnInit() { }
}
