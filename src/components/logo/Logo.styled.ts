import styled from 'styled-components';
import { CSSProp } from 'styles/types';

export const LogoStyled = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 32px;
  line-height: 1.31;
  transform: scale(1);
  transition: ${({ theme }) =>
    theme.transition({ property: CSSProp.transform })};

  &:hover,
  &:focus {
    transform: scale(1.02);
  }

  & svg {
    fill: ${({ theme }) => theme.colors.mainBrandColor};
  }

  & .first-word {
    margin-left: 6px;
    margin-right: 1px;
    color: ${({ theme }) => theme.colors.mainBrandColor};
  }

  & .second-word {
    color: ${({ theme }) => theme.colors.secondaryFontColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 35px;
    line-height: 1.2;

    & .first-word {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
