import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SWIPER_CONFIG } from '../../../shared/configs';
import SwiperCore, { Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Virtual]);

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
    this.swiper?.swiperRef.slideNext(200);
  }

  slidePerv(): void {
    this.swiper?.swiperRef.slidePrev(200);
  }
}
