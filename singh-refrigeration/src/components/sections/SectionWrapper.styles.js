import styled from 'styled-components';
import { theme } from '../../theme';

export const SectionWrapper = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: ${props => {
    if (props.$variant === 'elevated') return theme.colors.surfaceRaised;
    if (props.$variant === 'dark') return `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%)`;
    if (props.$variant === 'accent') return `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentDark})`;
    return theme.colors.surface;
  }};
  color: ${props => (props.$variant === 'dark' || props.$variant === 'accent') ? 'white' : 'inherit'};

  @media (max-width: 768px) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
  text-align: ${props => props.$align === 'center' ? 'center' : 'left'};
  max-width: ${props => props.$align === 'center' ? '800px' : 'none'};
  margin-left: ${props => props.$align === 'center' ? 'auto' : '0'};
  margin-right: ${props => props.$align === 'center' ? 'auto' : '0'};
`;

export const SectionSubtitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => {
    if (props.$dark) return 'rgba(255, 255, 255, 0.9)';
    return theme.colors.gold;
  }};
  margin-bottom: 0.75rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const SectionDescription = styled.p`
  font-size: 1rem;
  color: ${props => {
    if (props.$dark) return 'rgba(255, 255, 255, 0.9)';
    return theme.colors.textSecondary;
  }};
  line-height: 1.6;
  max-width: 700px;
  margin: 0;
  margin-left: ${props => props.$center ? 'auto' : '0'};
  margin-right: ${props => props.$center ? 'auto' : '0'};
`;
