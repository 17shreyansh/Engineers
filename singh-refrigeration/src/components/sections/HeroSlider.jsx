import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import img1 from '../../assets/slider/1.jpeg';
import img2 from '../../assets/slider/2.jpeg';
import img3 from '../../assets/slider/3.jpeg';
import img4 from '../../assets/slider/4.jpeg';
import img5 from '../../assets/slider/5.jpeg';
import certificate from '../../assets/certficate.jpeg';
import * as S from './HeroSlider.styles';

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: img1,
      badge: 'Since 1980',
      title: 'Industrial Refrigeration',
      titleAccent: 'Engineered for Excellence',
      description: 'Complete cold storage solutions, industrial refrigeration systems, and thermal insulation products. Trusted by industries across India for over 45 years.',
    },
    {
      id: 2,
      image: img2,
      badge: '45+ Years Experience',
      title: 'Cold Storage Solutions',
      titleAccent: 'Built to Last',
      description: 'From design to installation, we deliver turnkey cold storage projects with cutting-edge technology and unmatched reliability.',
    },
    {
      id: 3,
      image: img3,
      badge: 'Quality Assured',
      title: 'Premium Equipment',
      titleAccent: 'Industry Leading',
      description: 'State-of-the-art refrigeration equipment and automation systems for optimal performance.',
    },
    {
      id: 4,
      image: img4,
      badge: 'Expert Installation',
      title: 'Professional Service',
      titleAccent: 'Nationwide Coverage',
      description: 'Expert installation and maintenance services across India with dedicated support.',
    },
    {
      id: 5,
      image: img5,
      badge: 'Trusted Partner',
      title: 'Complete Solutions',
      titleAccent: 'End-to-End Support',
      description: 'Comprehensive cold storage solutions from consultation to after-sales service.',
    },
  ];

  return (
    <S.HeroSliderSection>
      <S.HeroSwiper as={Swiper}
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
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
        <div className="swiper-button-prev" style={{color: '#fff', left: '20px'}}>
          <ChevronLeft size={40} />
        </div>
        <div className="swiper-button-next" style={{color: '#fff', right: '20px'}}>
          <ChevronRight size={40} />
        </div>
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
          <S.CertificateContainer>
            <S.CertificateImage src={certificate} alt="Certificate" />
          </S.CertificateContainer>
        </div>
      </S.HeroStatsWrapper>
    </S.HeroSliderSection>
  );
}
