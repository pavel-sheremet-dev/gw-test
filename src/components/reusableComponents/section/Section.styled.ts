import styled from 'styled-components';

interface IStyledSectionProps {
  sectionType: 'basic' | 'withImage';
}

export const StyledSection = styled.section<IStyledSectionProps>`
  /* outline: 1px solid yellow; */
  position: relative;

  & .suptitle {
    margin-bottom: ${({ sectionType }) =>
      sectionType === 'basic' ? '20px' : '8px'};
  }

  & .title,
  & .description {
    margin-bottom: ${({ sectionType }) =>
      sectionType === 'basic' ? '20px' : '24px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & .suptitle {
      margin-bottom: ${({ sectionType }) =>
        sectionType === 'basic' ? '24px' : '8px'};
    }

    & .title,
    & .description {
      margin-bottom: 24px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  background-color: brown;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 368px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 670px;
  }

  & img {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div<IStyledSectionProps>`
  /* padding: 40px 20px; */
  width: 100%;
  padding: ${({ sectionType }) =>
    sectionType === 'basic' ? '0' : '40px 20px'};
  text-align: ${({ sectionType }) =>
    sectionType === 'basic' ? 'center' : 'start'};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    /* padding: 40px 32px; */
    padding: ${({ sectionType }) =>
      sectionType === 'basic' ? '0' : '40px 32px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    /* padding: 80px 20px; */
    padding: ${({ sectionType }) =>
      sectionType === 'basic' ? '0' : '80px 20px'};
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  line-height: 1.26;
  font-weight: 300;
`;

export const SupTitle = styled.p`
  font-size: 18px;
  line-height: 1.67;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 20px;
    line-height: 1.65;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.63;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 18px;
    line-height: 1.56;
  }
`;
