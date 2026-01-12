import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { LogoCarouselWrapper, LogoSlide } from './LogoCarousel.styles';

export default function LogoCarousel({ logos, title }) {
  return (
    <LogoCarouselWrapper>
      <h2>{title}</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        freeMode={true}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 40 },
          768: { slidesPerView: 4, spaceBetween: 50 },
          1024: { slidesPerView: 5, spaceBetween: 60 },
          1280: { slidesPerView: 6, spaceBetween: 70 }
        }}
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i}>
            <LogoSlide>
              <img src={logo} alt={`Logo ${i + 1}`} />
            </LogoSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </LogoCarouselWrapper>
  );
}
