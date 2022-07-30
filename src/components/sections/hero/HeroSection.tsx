import supportsWebP from 'supports-webp';

import Button from 'components/reusableComponents/buttons/Button';
import Container from 'components/reusableComponents/container/Container';
import { StyledSection } from './HeroSection.styled';
import { ReactComponent as BtnIcon } from 'assets/images/svg/btn-arrow.svg';
import { NavId } from 'data/navigation';
import { useEffect, useState } from 'react';

// let supportWebp: boolean = false;

interface IProps {
  scrollId?: NavId;
}

const HeroSection = ({ scrollId }: IProps) => {
  const [supportWebp, setSupportWebp] = useState(true);

  useEffect(() => {
    supportsWebP.then(supported => setSupportWebp(supported));
  }, []);

  return (
    <StyledSection className={scrollId} supportWebp={supportWebp}>
      <Container classNames={['hero-container']}>
        <h1 className="title">The Sky Is The Limit</h1>
        <p className="synopsis">We provide world class financial assistance</p>
        <Button
          className="hero-button"
          icon={<BtnIcon />}
          color={'main'}
          text="Read More"
          type={'button'}
          onClick={() => {}}
        />
      </Container>
    </StyledSection>
  );
};

export default HeroSection;
