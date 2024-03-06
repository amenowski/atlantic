import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Button from './Button';

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      watchSlidesProgress={true}
      className="pb-8 text-white"
    >
      <SwiperSlide className="relative flex justify-center">
        <img
          src={slide1}
          alt="Chairs"
          className="absolute h-[600px] w-full object-cover"
        />
        <div className="z-50 pt-28 text-center">
          <h2 className="mb-4 text-5xl font-normal tracking-wider sm:text-6xl">
            Liveable Luxury
          </h2>
          <p className="mb-8 text-sm tracking-widest sm:text-base">
            Combining quality with intentional design
          </p>
          <Button width="1/2" type="primary">
            browse seating
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex justify-end">
        <img src={slide2} alt="" className="h-[600px] w-full object-cover" />
        <div className="absolute p-14 text-right">
          <h2 className="mb-4 text-5xl font-normal tracking-wider sm:text-6xl">
            Stremlined Designs
          </h2>
          <p className="mb-8 text-sm tracking-widest sm:text-base">
            Sleek, stylish and sophisticated. The perfect match for your home.
          </p>
          <Button width="1/2" type="primary">
            browse seating
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex items-end">
        <img src={slide3} alt="" className="h-[600px] w-full object-cover" />
        <div className="absolute p-14">
          <h2 className="mb-4 text-5xl font-normal tracking-wider sm:text-6xl">
            Exceptional Quality
          </h2>
          <p className="mb-8 text-sm tracking-widest sm:text-base">
            We work with the world's finest materials.
          </p>
          <Button width="1/2" type="primary">
            browse seating
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
