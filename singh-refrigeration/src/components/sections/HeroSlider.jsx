import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import s1 from '../../assets/s1.jpeg';
import s2 from '../../assets/s2.jpeg';
import * as S from './HeroSlider.styles';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: s1,
      badge: 'Since 1978',
      title: 'Industrial Refrigeration',
      titleAccent: 'Engineered for Excellence',
      description: 'Complete cold storage solutions, industrial refrigeration systems, and thermal insulation products. Trusted by industries across India for over 45 years.',
    },
    {
      id: 2,
      image: s2,
      badge: '45+ Years Experience',
      title: 'Cold Storage Solutions',
      titleAccent: 'Built to Last',
      description: 'From design to installation, we deliver turnkey cold storage projects with cutting-edge technology and unmatched reliability.',
    },
  ];

  return (
    <S.HeroSliderSection>
      <S.HeroSwiper as={Swiper}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1000}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <S.HeroSlide style={{ backgroundImage: `url(${slide.image})` }}>
              <S.HeroSlideOverlay />
              <div className="container">
                <S.HeroSlideContent>
                  <S.HeroBadge>{slide.badge}</S.HeroBadge>
                  <S.HeroTitle>
                    {slide.title}
                    <br />
                    <S.HeroTitleAccent>{slide.titleAccent}</S.HeroTitleAccent>
                  </S.HeroTitle>
                  <S.HeroDescription>{slide.description}</S.HeroDescription>
                  <S.HeroActions>
                    <Link to="/products" style={{textDecoration: 'none'}}>
                      <S.BtnHeroPrimary as="span">Explore Products</S.BtnHeroPrimary>
                    </Link>
                    <Link to="/contact" style={{textDecoration: 'none'}}>
                      <S.BtnHeroSecondary as="span">Get Consultation</S.BtnHeroSecondary>
                    </Link>
                  </S.HeroActions>
                </S.HeroSlideContent>
              </div>
            </S.HeroSlide>
          </SwiperSlide>
        ))}
      </S.HeroSwiper>
      
      <S.HeroStatsWrapper>
        <div className="container">
          <S.HeroStats>
            <S.HeroStat>
              <S.HeroStatValue>45+</S.HeroStatValue>
              <S.HeroStatLabel>Years Experience</S.HeroStatLabel>
            </S.HeroStat>
            <S.HeroStat>
              <S.HeroStatValue>1000+</S.HeroStatValue>
              <S.HeroStatLabel>Projects Delivered</S.HeroStatLabel>
            </S.HeroStat>
            <S.HeroStat>
              <S.HeroStatValue>100%</S.HeroStatValue>
              <S.HeroStatLabel>Client Satisfaction</S.HeroStatLabel>
            </S.HeroStat>
          </S.HeroStats>
        </div>
      </S.HeroStatsWrapper>
    </S.HeroSliderSection>
  );
}
