import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledProductCard = styled.div`
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  overflow: hidden;
  transition: all ${theme.transitions.normal};
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${theme.colors.accent};
    transition: height ${theme.transitions.normal};
  }

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.md};
    transform: translateY(-4px);

    &::before {
      height: 6px;
    }
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: ${theme.colors.surfaceRaised};
  position: relative;
`;

export const ProductImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.gradients.light};
  color: ${theme.colors.accent};
  opacity: 0.6;
`;

export const ProductContent = styled.div`
  padding: ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  flex: 1;
`;

export const ProductTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
  line-height: 1.3;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

export const GetQuoteButton = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.radius.sm};
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.sm};
    background: ${theme.colors.accentDark};
    border-color: ${theme.colors.gold};
  }
`;
