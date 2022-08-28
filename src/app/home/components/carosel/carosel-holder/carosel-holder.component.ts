import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SWIPER_CONFIG } from '../../../shared/configs';
import SwiperCore, { Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-carosel-holder',
  templateUrl: './carosel-holder.component.html',
  styleUrls: ['./carosel-holder.component.scss'],
})
export class CaroselHolderComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  config: SwiperOptions = SWIPER_CONFIG;

  constructor() {}

  ngOnInit(): void {}

  slideNext(): void {
    this.swiper?.swiperRef.slideNext(500);
  }

  slidePerv(): void {
    this.swiper?.swiperRef.slidePrev(500);
  }
}
