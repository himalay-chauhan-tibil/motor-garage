import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class CarDetailsComponent implements OnInit {
  carModel = '2023 Tesla Model S';
  rating = 4.5;
  price = '79,990';
  carDescription = `Experience the pinnacle of electric performance with the 2023 Tesla Model S. Boasting a sleek design, unparalleled acceleration, and cutting-edge technology, this vehicle redefines what it means to drive. From the advanced autopilot capabilities to the luxurious interior, every aspect of the Model S is crafted for excellence. Get ready to embark on a journey like no other.`;
  showFullDescription = false;
  stars: number[] = [];

  ngOnInit() {
    this.generateStars();
  }

  generateStars() {
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating % 1 >= 0.5;

    this.stars = Array(fullStars).fill(0);
    if (halfStar) {
      this.stars.push(0);
    }
  }

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
}
