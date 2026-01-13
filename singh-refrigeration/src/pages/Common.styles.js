import styled from 'styled-components';
import { theme } from '../theme';

// Contact Page
export const ContactPage = styled.div``;

export const PageHero = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: ${theme.colors.white};
  padding: ${theme.spacing['3xl']} 0;
  border-bottom: 4px solid ${theme.colors.accent};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 70% 30%, rgba(166, 180, 58, 0.1) 0%, transparent 50%);
  }
`;

export const PageHeroContent = styled.div`
  position: relative;
  z-index: 1;

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: ${theme.spacing.md};
  }

  p {
    font-size: 1.25rem;
    max-width: 800px;
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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

export const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.primary};
  }
`;

export const ContactTagline = styled.p`
  font-size: 1.0625rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xl};
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const ContactItem = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: flex-start;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  transition: all ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md};
    gap: ${theme.spacing.md};
  }
`;

export const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentDark});
  border-radius: ${theme.radius.sm};
  flex-shrink: 0;
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 50px;
    height: 50px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ContactItemContent = styled.div`
  flex: 1;

  h4 {
    font-size: 0.875rem;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.accent};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  p {
    color: ${theme.colors.text};
    line-height: 1.8;
    margin: 0.25rem 0;
    font-size: 1rem;
    font-weight: 500;

    &:first-of-type {
      margin-top: 0;
    }
  }

  a {
    color: ${theme.colors.text};
    text-decoration: none;
    transition: color ${theme.transitions.normal};

    &:hover {
      color: ${theme.colors.accent};
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    p {
      font-size: 0.875rem;
    }
  }
`;

export const ContactFormCard = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.sm};

  h3 {
    font-size: 1.75rem;
    margin-bottom: ${theme.spacing.xl};
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  label {
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${theme.colors.text};
  }

  input, select, textarea {
    padding: ${theme.spacing.md} ${theme.spacing.md};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius.md};
    font-family: inherit;
    font-size: 1rem;
    transition: all ${theme.transitions.normal};
    background: ${theme.colors.white};

    &:focus {
      outline: none;
      border-color: ${theme.colors.accent};
      box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
    }
  }

  textarea {
    resize: vertical;
  }
`;

export const SubmitButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all ${theme.transitions.normal};
  cursor: pointer;
  border-radius: ${theme.radius.sm};
  box-shadow: none;
  border: 2px solid ${theme.colors.accent};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.sm};
    background: ${theme.colors.accentDark};
    border-color: ${theme.colors.gold};
  }
`;

// Products & ProductCategory Pages
export const ProductsPage = styled.div``;

export const CategoryGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.xl};
`;

export const CategoryHero = styled.div`
  background: ${theme.colors.surfaceRaised};
  border-bottom: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xl} 0;
`;

export const CategoryHeroContent = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const CategoryHeroIcon = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  flex-shrink: 0;
  box-shadow: ${theme.shadows.md};
  color: ${theme.colors.accent};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100px;
    height: 100px;
  }
`;

export const CategoryHeroText = styled.div`
  flex: 1;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.primary};
  }
`;

export const CategoryHeroDescription = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.lg};
`;

export const CategoryHeroMeta = styled.div`
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border};
`;

export const CategoryHeroCount = styled.span`
  font-weight: 700;
  color: ${theme.colors.gold};
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.08em;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;
