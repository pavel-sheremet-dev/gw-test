import styled from 'styled-components';
import { CSSProp } from 'styles/types';

export const FooterStyled = styled.footer`
  & .footer-container {
    background-color: ${({ theme }) => theme.colors.defaultFontColor};
    padding-top: 20px;
    padding-bottom: 20px;
  }

  & .list {
    margin: 0 auto 8px auto;
  }

  & .link {
    transition: ${({ theme }) =>
      theme.transition({ property: CSSProp.opacity })};
  }

  & .link:hover {
    opacity: 0.8;
  }

  & small {
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryFontColor};
    font-size: 16px;
    line-height: 1.63;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & small {
      font-size: 18px;
      line-height: 1.56;
    }
  }
`;
