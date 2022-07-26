import SocialList, { SocialItemData } from 'components/socialList/SocialList';
import Container from 'components/reusableComponents/container/Container';

import { FooterStyled } from './Footer.styled';

import linkedinIconUrl from 'assets/images/svg/linkedin.svg';
import youtubeIconUrl from 'assets/images/svg/youtube.svg';
import twitterIconUrl from 'assets/images/svg/twiter.svg';
import facebookIconUrl from 'assets/images/svg/facebook.svg';

const listData: SocialItemData[] = [
  {
    id: 'id-1',
    iconUrl: facebookIconUrl,
    link: 'https://www.facebook.com/',
    alt: 'facebook icon',
  },
  {
    id: 'id-2',
    iconUrl: twitterIconUrl,
    link: 'https://twitter.com/',
    alt: 'twitter icon',
  },
  {
    id: 'id-3',
    iconUrl: youtubeIconUrl,
    link: 'https://www.youtube.com/',
    alt: 'youtube icon',
  },
  {
    id: 'id-4',
    iconUrl: linkedinIconUrl,
    link: 'https://www.linkedin.com/',
    alt: 'linedin icon',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterStyled>
      <Container classNames={['footer-container']}>
        <SocialList listData={listData} className="list" />
        <small>Copyright © {year} - FinanceLedger</small>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
