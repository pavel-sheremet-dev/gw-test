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
