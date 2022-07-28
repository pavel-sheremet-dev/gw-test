import styled from 'styled-components';

import heroMobile from 'assets/images/hero/hero-mobile.jpg';
import heroMobile_2x from 'assets/images/hero/hero-mobile@2x.jpg';
import heroMobile_webp from 'assets/images/hero/hero-mobile.webp';
import heroMobile_2x_webp from 'assets/images/hero/hero-mobile@2x.webp';
import heroMobileAd from 'assets/images/hero/hero-mobile-ad.jpg';
import heroMobileAd_2x from 'assets/images/hero/hero-mobile-ad@2x.jpg';
import heroMobileAd_webp from 'assets/images/hero/hero-mobile-ad.webp';
import heroMobileAd_2x_webp from 'assets/images/hero/hero-mobile-ad@2x.webp';
import heroTablet from 'assets/images/hero/hero-tablet.jpg';
import heroTablet_2x from 'assets/images/hero/hero-tablet@2x.jpg';
import heroTablet_webp from 'assets/images/hero/hero-tablet.webp';
import heroTablet_2x_webp from 'assets/images/hero/hero-tablet@2x.webp';
import heroDesktop from 'assets/images/hero/hero-desktop.jpg';
import heroDesktop_2x from 'assets/images/hero/hero-desktop@2x.jpg';
import heroDesktop_webp from 'assets/images/hero/hero-desktop.webp';
import heroDesktop_2x_webp from 'assets/images/hero/hero-desktop@2x.webp';

interface IStyledProps {
  supportWebp: boolean;
}

export const StyledSection = styled.section<IStyledProps>`
  height: 533px;

  .hero-container {
    padding-top: 142px;
  }

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

  width: 100vw;
  margin: 0 auto;
  min-width: 320px;
  min-height: 533px;
  background-color: ${({ theme }) => theme.colors.black};
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    ${({ supportWebp }) =>
      supportWebp ? `url(${heroMobile_webp})` : `url(${heroMobile})`};

  background-repeat: no-repeat;
  background-size: auto 533px;
  background-position: top center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      ${({ supportWebp }) =>
        supportWebp ? `url(${heroMobile_2x_webp})` : `url(${heroMobile_2x})`};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    min-width: ${({ theme }) => theme.breakPoints.mobile};

    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      ${({ supportWebp }) =>
        supportWebp ? `url(${heroMobileAd_webp})` : `url(${heroMobileAd})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        ${({ supportWebp }) =>
          supportWebp
            ? `url(${heroMobileAd_2x_webp})`
            : `url(${heroMobileAd_2x})`};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    min-width: ${({ theme }) => theme.breakPoints.tablet};
    min-height: 1024px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      ${({ supportWebp }) =>
        supportWebp ? `url(${heroTablet_webp})` : `url(${heroTablet})`};
    background-size: auto 1024px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        ${({ supportWebp }) =>
          supportWebp ? `url(${heroTablet_2x_webp})` : `url(${heroTablet_2x})`};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: ${({ theme }) => theme.breakPoints.desktop};
    min-height: 768px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      ${({ supportWebp }) =>
        supportWebp ? `url(${heroDesktop_webp})` : `url(${heroDesktop})`};
    background-size: auto 768px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        ${({ supportWebp }) =>
          supportWebp
            ? `url(${heroDesktop_2x_webp})`
            : `url(${heroDesktop_2x})`};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    height: 1024px;

    .hero-container {
      padding-top: 407px;
    }

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

    .hero-container {
      padding-top: 279px;
    }
  }
`;
