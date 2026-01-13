import styled from 'styled-components';
import { theme } from '../theme';

export const HomePage = styled.div``;

export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TrustItem = styled.div`
  background: ${theme.colors.white};
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.surfaceRaised};
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    margin: ${theme.spacing.md} 0 ${theme.spacing.sm};
    color: ${theme.colors.primary};
  }

  p {
    font-size: 0.9375rem;
    color: ${theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
  }
`;

export const TrustIcon = styled.div`
  color: ${theme.colors.accent};
  display: inline-block;
`;

export const CategoryGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.xl};
`;

export const CEOSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CEOCard = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: ${theme.spacing['3xl']};
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: ${theme.colors.accent};
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

export const CEOImageWrapper = styled.div`
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const CEOImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: ${theme.gradients.light};
  border-radius: ${theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.lg};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${theme.gradients.overlayAccent};
  }
`;

export const CEOInitials = styled.div`
  font-size: 6rem;
  font-weight: 900;
  color: ${theme.colors.accent};
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 4rem;
  }
`;

export const CEOBadge = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.gold};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: ${theme.radius.sm};
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  box-shadow: ${theme.shadows.md};
  white-space: nowrap;
  border: 2px solid ${theme.colors.goldDark};
`;

export const CEOContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing.xl};
  position: relative;
`;

export const CEOQuoteIcon = styled.div`
  color: ${theme.colors.accent};
  opacity: 0.2;
  position: absolute;
  top: -1rem;
  left: -0.5rem;
`;

export const CEOQuote = styled.blockquote`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${theme.colors.textSecondary};
  font-style: italic;
  position: relative;
  padding-left: ${theme.spacing.xl};
  border-left: 4px solid ${theme.colors.accent};
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const CEOInfo = styled.div`
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border};
`;

export const CEOName = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

export const CEOTitle = styled.p`
  font-size: 1rem;
  color: ${theme.colors.accent};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${theme.spacing.md};
`;

export const CEOCredentials = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.sm};
  }
`;

export const CredentialItem = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
  font-weight: 600;
`;

export const CredentialDivider = styled.span`
  color: ${theme.colors.borderStrong};
  font-size: 0.75rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const CEOAchievements = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.xl};
  background: ${theme.colors.surfaceRaised};
  border-radius: ${theme.radius.lg};
  border: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const AchievementItem = styled.div`
  text-align: center;
`;

export const AchievementNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${theme.colors.accent};
  line-height: 1;
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const AchievementLabel = styled.div`
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['3xl']};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TeamMemberCard = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  padding: ${theme.spacing['2xl']};
  text-align: center;
  transition: all ${theme.transitions.normal};
  position: relative;
  overflow: hidden;
  box-shadow: ${theme.shadows.md};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: ${theme.colors.accent};
  }

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-8px);
  }
`;

export const TeamMemberImage = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  margin: 0 auto ${theme.spacing.xl};
  background: ${theme.gradients.light};
  border-radius: ${theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${theme.colors.border};
  transition: all ${theme.transitions.slow};
  position: relative;
  overflow: hidden;

  ${TeamMemberCard}:hover & {
    border-color: ${theme.colors.accent};
    transform: scale(1.02);
  }
`;

export const TeamInitials = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${theme.colors.accent};
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const TeamMemberName = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

export const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: ${theme.colors.accent};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${theme.spacing.md};
`;

export const TeamMemberDesc = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: rgba(0, 102, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.radius.lg};
  padding: ${theme.spacing.xl};
  transition: all ${theme.transitions.slow};
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(0, 102, 255, 0.08);
    border-color: ${theme.colors.accentLight};
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }

  h3 {
    font-size: 1.125rem;
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.9375rem;
    margin: 0;
  }
`;

export const ServiceNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${theme.colors.gold};
  line-height: 1;
  margin-bottom: ${theme.spacing.md};
  opacity: 0.8;
`;

export const ServicesCTA = styled.div`
  text-align: center;
`;

export const ServicesButton = styled.button`
  display: inline-block;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all ${theme.transitions.normal};
  border-radius: ${theme.radius.sm};
  box-shadow: none;
  border: 2px solid ${theme.colors.white};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.sm};
    border-color: ${theme.colors.gold};
  }
`;

export const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const IndustryItem = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  overflow: hidden;
  transition: all ${theme.transitions.normal};
  box-shadow: ${theme.shadows.sm};

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-8px);

    .industry-image img {
      transform: scale(1.08);
    }
  }

  .industry-image {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    background: ${theme.colors.surfaceRaised};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${theme.transitions.slow};
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    line-height: 1.4;
    margin: 0;
    padding: ${theme.spacing.lg};
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    h4 {
      font-size: 0.9375rem;
      padding: ${theme.spacing.md};
    }
  }
`;

export const CTAContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CTAText = styled.div`
  flex: 1;

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    margin-bottom: ${theme.spacing.md};
  }

  p {
    font-size: 1.125rem;
    opacity: 0.95;
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
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  background: ${theme.colors.white};
  color: ${theme.colors.accent};
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all ${theme.transitions.normal};
  white-space: nowrap;
  border-radius: ${theme.radius.sm};
  box-shadow: none;
  border: 2px solid ${theme.colors.white};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.02) translateY(-2px);
    box-shadow: ${theme.shadows.sm};
    border-color: ${theme.colors.gold};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
