import styled from 'styled-components';
import { CSSProp } from 'styles/types';
import { ColorType } from './Button';

interface StyledProps {
  color: ColorType;
  transparent: boolean;
  hasIcon: boolean;
}

export const ButtonStyled = styled.button<StyledProps>`
  padding: 10px ${({ hasIcon }) => (hasIcon ? '30px' : '36px')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  border: ${({ theme, transparent }) =>
    transparent ? `1px solid ${theme.colors.secondaryFontColor}` : 'none'};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme, color, transparent }) =>
    transparent
      ? 'transparent'
      : color === 'main'
      ? theme.colors.mainBrandColor
      : theme.colors.secondaryBrandColor};
  transition: ${({ theme }) => theme.transition({ property: CSSProp.opacity })},
    ${({ theme }) => theme.transition({ property: CSSProp.backgroundColor })},
    ${({ theme }) => theme.transition({ property: CSSProp.color })};

  &[type]:hover,
  &[type]:focus {
    opacity: ${({ transparent }) => (transparent ? 1 : 0.9)};
    background-color: ${({ transparent, theme, color }) =>
      transparent
        ? theme.colors.secondaryFontColor
        : color === 'main'
        ? theme.colors.mainBrandColor
        : theme.colors.secondaryBrandColor};
    color: ${({ transparent, theme, color }) =>
      transparent
        ? color === 'main'
          ? theme.colors.mainBrandColor
          : theme.colors.secondaryBrandColor
        : theme.colors.secondaryFontColor};

    & svg {
      fill: ${({ transparent, theme, color }) =>
        transparent
          ? color === 'main'
            ? theme.colors.mainBrandColor
            : theme.colors.secondaryBrandColor
          : theme.colors.secondaryFontColor};
    }
  }

  & svg,
  & img {
    margin-right: 4px;
    fill: ${({ theme }) => theme.colors.secondaryFontColor};
    transition: ${({ theme }) => theme.transition({ property: CSSProp.fill })};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 18px;
    line-height: 1.56;
  }
`;
