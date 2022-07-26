import styled from 'styled-components';
import { CSSProp } from 'styles/types';

export const ListStyled = styled.ul`
  & li {
    opacity: 1;
    transition: ${({ theme }) =>
      theme.transition({ property: CSSProp.opacity })};
  }

  & li:hover {
    opacity: 0.8;
  }

  & li:not(:last-child) {
    margin-bottom: 20px;
  }

  & img {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;

    & li:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    grid-row-gap: 24px;
    grid-column-gap: 20px;

    & li:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
