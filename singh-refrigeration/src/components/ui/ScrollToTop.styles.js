import styled from 'styled-components';
import { theme } from '../../theme';

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 6rem;
  width: 56px;
  height: 56px;
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.accentDark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${theme.shadows.md};
  z-index: 999;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.gold};
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 4.5rem;
    width: 48px;
    height: 48px;
  }
`;
