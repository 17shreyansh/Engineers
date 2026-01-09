import styled from 'styled-components';
import { theme } from '../theme';

export const ServicesPage = styled.div`
  min-height: 100vh;
`;

export const PageHero = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing['4xl']} 0 ${theme.spacing['3xl']};
  text-align: center;
`;

export const PageHeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin: 0 0 ${theme.spacing.lg};
  }

  p {
    font-size: 1.25rem;
    opacity: 0.95;
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing['2xl']};
  transition: all ${theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: ${theme.colors.accent};
    transition: height ${theme.transitions.normal};
  }

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.md};
    transform: translateY(-4px);

    &::before {
      height: 100%;
    }
  }
`;

export const ServiceCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

export const ServiceNumber = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: ${theme.colors.gold};
  line-height: 1;
  opacity: 0.6;
  min-width: 60px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
  line-height: 1.3;
`;

export const ServiceDescription = styled.p`
  font-size: 0.9375rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0 0 ${theme.spacing.lg};
`;

export const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.sm};

  li {
    font-size: 0.875rem;
    color: ${theme.colors.textSecondary};
    padding: ${theme.spacing.sm} 0;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};

    &::before {
      content: '✓';
      color: ${theme.colors.accent};
      font-weight: 700;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing['3xl']};
  background: ${theme.colors.white};
  border-radius: ${theme.radius.xl};
  box-shadow: ${theme.shadows.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CTAText = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin: 0 0 ${theme.spacing.md};
  }

  p {
    font-size: 1.125rem;
    color: ${theme.colors.textSecondary};
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const CTAButton = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  padding: ${theme.spacing.lg} ${theme.spacing['2xl']};
  border-radius: ${theme.radius.sm};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.sm};
    background: ${theme.colors.accentDark};
    border-color: ${theme.colors.gold};
  }
`;
