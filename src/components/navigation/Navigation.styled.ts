import styled from 'styled-components';
import { CSSProp } from 'styles/types';

export const NavStyled = styled.nav`
  & ul {
    display: inline-flex;
  }

  & li {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.63;
    color: ${({ theme }) => theme.colors.secondaryFontColor};
  }

  & a {
    display: block;
    text-align: center;
    position: relative;
    padding: 0px 6px;
    cursor: pointer;

    &:focus::after,
    &:hover::after {
      opacity: 1;
    }
  }

  & a::after {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    transition: ${({ theme }) =>
      theme.transition({ property: CSSProp.opacity })};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & li {
      font-size: 18px;
      line-height: 1.56;
    }
    & a {
      padding: 0 10px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    & a {
      padding: 0 20px;
    }
  }
`;
