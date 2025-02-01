import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-car-ad-header',
  templateUrl: './car-ad-header.component.html',
  styleUrls: ['./car-ad-header.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class CarAdHeaderComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  goBack() {
    this.navCtrl.back();
  }

  shareAd() {
    // Implement share functionality here
    console.log('Share button clicked');
  }


}
