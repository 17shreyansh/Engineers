import styled from 'styled-components';

export const LogoCarouselWrapper = styled.div`
  padding: 60px 0;
  overflow: hidden;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 40px;
    color: #1a1a1a;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }
  }

  .swiper {
    padding: 20px 0;
  }
`;

export const LogoSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 120px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  img {
    max-width: 100%;
    max-height: 80px;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 100px;
    padding: 15px;

    img {
      max-height: 60px;
    }
  }
`;
