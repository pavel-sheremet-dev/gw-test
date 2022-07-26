import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 533px;
  padding-top: 142px;
  background-color: brown;

  .title {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    max-width: 325px;
    text-align: center;
    font-weight: 300;
    font-size: 52px;
    line-height: 1.27;
    color: ${({ theme }) => theme.colors.fontColor3};
  }

  .synopsis {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    max-width: 245px;
    text-align: center;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.68;
    color: ${({ theme }) => theme.colors.fontColor3};
  }

  .hero-button {
    margin: 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    height: 1024px;
    padding-top: 407px;

    & .title {
      max-width: 600px;
      font-size: 55px;
      line-height: 1.2;
    }

    & .synopsis {
      max-width: 500px;
      margin-bottom: 41px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    height: 768px;
    padding-top: 279px;
  }
`;
