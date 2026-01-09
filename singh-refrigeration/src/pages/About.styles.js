import styled from 'styled-components';
import { theme } from '../theme';

export const AboutPage = styled.div`
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

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${theme.spacing['3xl']};
  align-items: start;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: ${theme.colors.textSecondary};
    margin: 0;
  }
`;

export const StatsCard = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['2xl']};
  position: sticky;
  top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    position: static;
  }
`;

export const StatLarge = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.radius.lg};
  background: ${theme.gradients.light};
  border: 1px solid ${theme.colors.border};
`;

export const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: ${theme.colors.accent};
  line-height: 1;
  margin-bottom: ${theme.spacing.md};
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CapabilityCard = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing['2xl']};
  text-align: center;
  transition: all ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.md};
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin: ${theme.spacing.lg} 0 ${theme.spacing.md};
  }

  p {
    font-size: 0.875rem;
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
  }
`;

export const CapabilityIcon = styled.div`
  color: ${theme.colors.accent};
  display: inline-block;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ValueItem = styled.div`
  text-align: center;

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    margin: 0 0 ${theme.spacing.md};
  }

  p {
    font-size: 0.875rem;
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
  }
`;
