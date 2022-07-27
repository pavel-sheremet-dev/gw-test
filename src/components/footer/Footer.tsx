import SocialList, { ISocialLinks } from 'components/socialList/SocialList';
import Container from 'components/reusableComponents/container/Container';

import { FooterStyled } from './Footer.styled';

const socialsLinks: ISocialLinks = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  youtube: 'https://www.youtube.com/',
  linkedin: 'https://www.linkedin.com/',
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterStyled>
      <Container classNames={['footer-container']}>
        <SocialList socialsLinks={socialsLinks} className="list" />
        <small>Copyright © {year} - FinanceLedger</small>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
