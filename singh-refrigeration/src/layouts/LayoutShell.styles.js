import styled from 'styled-components';
import { theme } from '../theme';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
`;

// HEADER
export const Header = styled.header`
  background: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
`;

export const HeaderTop = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: white;
  padding: 0.75rem 0;
  font-size: 0.875rem;
`;

export const HeaderTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CompanyMeta = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.75rem;

    span:nth-child(n+2) {
      display: none;
    }
  }
`;

export const HeaderMain = styled.div`
  padding: 1rem 0;
`;

export const HeaderMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const LogoMark = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentDark});
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.25rem;
  letter-spacing: -0.05em;
  border-radius: ${theme.radius.sm};
  box-shadow: ${theme.shadows.md};
  transition: all 0.2s ease;
  border: 2px solid ${theme.colors.gold};

  ${Logo}:hover & {
    box-shadow: ${theme.shadows.lg};
    transform: scale(1.02);
    border-color: ${theme.colors.goldDark};
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LogoSubtitle = styled.div`
  font-size: 0.75rem;
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.625rem;
  }
`;

export const NavMain = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  font-weight: 600;
  color: ${theme.colors.text};
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 3px;
    background: ${theme.colors.accent};
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

export const NavDropdown = styled.div`
  position: relative;
`;

export const DropdownArrow = styled.span`
  font-size: 0.625rem;
  margin-left: 0.25rem;
  transition: transform 0.2s ease;
  display: inline-block;

  ${NavDropdown}:hover & {
    transform: rotate(180deg);
  }
`;

export const MegaMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  box-shadow: ${theme.shadows.xl};
  min-width: 600px;
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-width: 90vw;
    left: 5vw;
    transform: none;
  }

  @media (max-width: 768px) {
    min-width: 95vw;
    left: 2.5vw;
  }
`;

export const MegaMenuContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: ${theme.colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MegaMenuSection = styled.div`
  background: ${theme.colors.white};
  padding: 2rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${theme.colors.surfaceRaised};
  }

  h4 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.primary};
  }

  p {
    font-size: 0.875rem;
    color: ${theme.colors.textSecondary};
    margin-bottom: 1rem;
  }
`;

export const MegaMenuLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.accent};
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  transition: gap 0.2s ease;

  &:hover {
    gap: 0.75rem;
  }
`;

export const BtnPrimary = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  padding: 0.75rem 2rem;
  font-weight: 700;
  border-radius: ${theme.radius.sm};
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  box-shadow: ${theme.shadows.sm};
  border: 2px solid ${theme.colors.accent};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: ${theme.colors.accentDark};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.md};
    border-color: ${theme.colors.gold};
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.5rem;
    font-size: 0.75rem;
  }
`;

export const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// MOBILE NAV
export const MobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.white};
  z-index: 9999;
  padding: 2rem;
  overflow-y: auto;
`;

export const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MobileNavLink = styled.div`
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${theme.colors.text};
  border-radius: ${theme.radius.sm};
  transition: all 0.2s ease;

  &:hover, &.active {
    background: ${theme.colors.surfaceRaised};
    color: ${theme.colors.accent};
  }
`;

export const MobileNavSection = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: ${theme.colors.surfaceRaised};
  border-radius: ${theme.radius.sm};

  h4 {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${theme.colors.textSecondary};
    margin-bottom: 0.75rem;
  }
`;

export const MobileNavSublink = styled.div`
  display: block;
  padding: 0.75rem;
  font-size: 1rem;
  color: ${theme.colors.text};
  border-radius: ${theme.radius.sm};
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.accent};
  }
`;

// FOOTER
export const Footer = styled.footer`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  color: white;
  margin-top: auto;
`;

export const FooterMain = styled.div`
  padding: 4rem 0 3rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterBrand = styled.div`
  max-width: 400px;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;

export const FooterLogo = styled.div`
  width: 50px;
  height: 50px;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  border-radius: ${theme.radius.sm};
`;

export const FooterCol = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.875rem;
        transition: color 0.2s ease;
        text-decoration: none;

        &:hover {
          color: ${theme.colors.white};
        }
      }
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
`;

export const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const FooterCredit = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
`;

export const AffobeLink = styled.a`
  color: ${theme.colors.accentLight};
  font-weight: 700;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.white};
    text-shadow: 0 0 8px rgba(166, 180, 58, 0.2);
  }
`;
