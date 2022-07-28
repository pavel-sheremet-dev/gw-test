import Button from 'components/reusableComponents/buttons/Button';
import Container from 'components/reusableComponents/container/Container';
import { StyledSection } from './HeroSection.styled';
import { ReactComponent as BtnIcon } from 'assets/images/svg/btn-arrow.svg';
import { Element } from 'react-scroll';
import { NavId } from 'data/navigation';

const HeroSection = () => {
  const supportWebp = true;
  return (
    <StyledSection supportWebp={supportWebp}>
      <Element name={NavId.HOME}>
        <Container classNames={['hero-container']}>
          <h1 className="title">The Sky Is The Limit</h1>
          <p className="synopsis">
            We provide world class financial assistance
          </p>
          <Button
            className="hero-button"
            icon={<BtnIcon />}
            color={'main'}
            text="Read More"
            type={'button'}
            onClick={() => {}}
          />
        </Container>
      </Element>
    </StyledSection>
  );
};

export default HeroSection;
