import { SwiperOptions } from 'swiper/types/swiper-options';

export const SWIPER_CONFIG: SwiperOptions = {
  slidesPerView: 1,
  navigation: false,
  virtual:true,
  allowTouchMove: true,
  autoplay: true,
  direction: 'horizontal',
  slideToClickedSlide: true,
};
