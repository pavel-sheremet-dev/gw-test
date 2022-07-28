import styled from 'styled-components';
import { CSSProp } from 'styles/types';

export const ListStyled = styled.ul`
  & .item:not(:last-child) {
    margin-bottom: 20px;
  }

  & .image-wrapper {
    position: relative;
    transition: ${({ theme }) =>
      theme.transition({ property: CSSProp.transform })};
  }

  & .image-wrapper:hover {
    transform: scale(1.03);
    & .image-mask {
      background-color: rgba(0, 0, 0, 0.6);
    }

    & .link {
      opacity: 1;
    }

    & .link:hover {
      opacity: 0.8;
    }
  }

  & .image-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: ${({ theme }) =>
      theme.transition({ property: CSSProp.backgroundColor })};
  }

  & .picture-image {
    display: block;
    width: 100%;
  }

  & .socials {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .link {
    opacity: 0;
    transition: ${({ theme }) =>
      theme.transition({ property: CSSProp.opacity })};
  }

  & .name {
    margin-top: 16px;
    margin-bottom: 12px;
    font-size: 23px;
    line-height: 1.26;
  }

  & .position {
    font-size: 16px;
    line-height: 1.6;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;

    & .item:not(:last-child) {
      margin-bottom: 0;
    }

    & .name {
      margin-top: 14px;
      font-size: 25px;
      line-height: 1.28;
    }

    & .position {
      font-size: 18px;
      line-height: 1.56;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    grid-row-gap: 24px;
    grid-column-gap: 20px;

    & .item:not(:last-child) {
      margin-bottom: 0;
    }

    & .name {
      margin-top: 20px;
      font-size: 25px;
      line-height: 1.28;
    }
  }
`;
