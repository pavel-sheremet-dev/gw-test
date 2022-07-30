import styled from 'styled-components';

interface IStyledContainer {
  sectionType: 'basic' | 'withImage';
  backgroundColor: string;
}

export const StyledContainer = styled.div<IStyledContainer>`
  /* outline: 1px solid green; */
  position: relative;
  margin: 0 auto;
  padding: ${({ sectionType }) =>
    sectionType === 'basic' ? '40px 20px' : '0'};
  width: 100vw;
  color: ${({ sectionType, theme }) =>
    sectionType === 'basic'
      ? theme.colors.defaultFontColor
      : theme.colors.secondaryFontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  &.fontloaded h1,
  &.fontloaded h2,
  &.fontloaded h3,
  &.fontloaded h4,
  &.fontloaded h5,
  &.fontloaded h6,
  &.fontloaded p,
  &.fontloaded button,
  &.fontloaded span,
  &.fontloaded svg,
  &.fontloaded ul,
  &.fontloaded ol,
  &.fontloaded li {
    opacity: 1;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: ${({ theme }) => theme.breakPoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: ${({ theme }) => theme.breakPoints.tablet};
    padding: ${({ sectionType }) =>
      sectionType === 'basic' ? '40px 32px' : '0'};

    &.withImage {
      display: flex;
    }

    &.right {
      flex-direction: row-reverse;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: ${({ theme }) => theme.breakPoints.desktop};
    padding: ${({ sectionType }) =>
      sectionType === 'basic' ? '80px 28px' : '0'};
  }
`;
