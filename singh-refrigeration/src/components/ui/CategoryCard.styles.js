import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledCategoryCard = styled.div`
  display: block;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: ${theme.spacing['2xl']};
  transition: all ${theme.transitions.normal};
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: ${theme.colors.accent};
    transition: width ${theme.transitions.normal};
  }

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.md};
    transform: translateX(4px);

    &::after {
      width: 100%;
    }
  }
`;

export const CategoryIcon = styled.div`
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.8;
  transition: all ${theme.transitions.normal};

  ${StyledCategoryCard}:hover & {
    opacity: 1;
    transform: scale(1.02);
  }
`;

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
`;

export const CategoryDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

export const CategoryMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border};
`;

export const ProductCount = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const CategoryArrow = styled.div`
  color: ${theme.colors.accent};
  transition: transform ${theme.transitions.normal};

  ${StyledCategoryCard}:hover & {
    transform: translateX(8px);
  }
`;
