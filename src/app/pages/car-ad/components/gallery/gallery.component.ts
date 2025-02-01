import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper', { static: false }) swiperRef!: ElementRef;
  swiper!: Swiper;
  images: string[] = [
    'https://placehold.co/600x400?text=Car+1',
    'https://placehold.co/600x400?text=Car+2',
    'https://placehold.co/600x400?text=Car+3',
    'https://placehold.co/600x400?text=Car+4',
    'https://placehold.co/600x400?text=Car+5',
    'https://placehold.co/600x400?text=Car+6',
  ];
  selectedImage!: string;

  swiperOptions: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    loop: true
  };

  ngOnInit() {
    this.selectedImage = this.images[0];
  }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperRef.nativeElement, this.swiperOptions);
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
