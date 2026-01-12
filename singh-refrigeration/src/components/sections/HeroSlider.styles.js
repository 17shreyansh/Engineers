import styled from 'styled-components';
import { theme } from '../../theme';

export const HeroSliderSection = styled.section`
  position: relative;
  color: ${theme.colors.white};
`;

export const HeroSwiper = styled.div`
  width: 100%;
  height: 700px;
  position: relative;

  @media (max-width: 768px) {
    height: 600px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transition: all 0.2s ease;
  }

  .swiper-pagination-bullet-active {
    background: ${theme.colors.accent};
    width: 32px;
    border-radius: 6px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;

    &:hover {
      background: ${theme.colors.accent};
    }

    &::after {
      display: none;
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const HeroSlide = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 600px;
  }
`;

export const HeroSlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.85) 0%,
    rgba(26, 26, 26, 0.7) 50%,
    rgba(166, 180, 58, 0.2) 100%
  );
  z-index: 1;
`;

export const HeroSlideContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const HeroBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: ${theme.colors.gold};
  border: 2px solid ${theme.colors.goldDark};
  border-radius: ${theme.radius.sm};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
`;

export const HeroTitleAccent = styled.span`
  color: ${theme.colors.accent};
`;

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BtnHeroPrimary = styled.button`
  padding: 1rem 2.5rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all 0.2s ease;
  border-radius: ${theme.radius.sm};
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  box-shadow: none;
  border: 2px solid ${theme.colors.accent};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.sm};
    background: ${theme.colors.accentDark};
    border-color: ${theme.colors.gold};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const BtnHeroSecondary = styled.button`
  padding: 1rem 2.5rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all 0.2s ease;
  border-radius: ${theme.radius.sm};
  background: transparent;
  border: 2px solid ${theme.colors.white};
  color: ${theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const HeroStatsWrapper = styled.div`
  position: relative;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const HeroStat = styled.div`
  text-align: center;
`;

export const HeroStatValue = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: ${theme.colors.accent};
  line-height: 1;
  margin-bottom: 0.5rem;
`;

export const HeroStatLabel = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const CertificateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 2rem;
  }
`;

export const CertificateImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: ${theme.radius.md};
  box-shadow: ${theme.shadows.lg};

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 200px;
  }
`;
