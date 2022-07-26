import Button from 'components/reusableComponents/buttons/Button';
import Container from 'components/reusableComponents/container/Container';
import { StyledSection } from './HeroSection.styled';
import { ReactComponent as BtnIcon } from 'assets/images/svg/btn-arrow.svg';

const HeroSection = () => {
  return (
    <StyledSection>
      <Container>
        <h1 className="title">The Sky Is The Limit</h1>
        <p className="synopsis">We provide world class financial assistance</p>
        <Button
          className="hero-button"
          icon={<BtnIcon />}
          color={'main'}
          text="Кнопка"
          type={'button'}
          onClick={() => {}}
        />
      </Container>
    </StyledSection>
  );
};

export default HeroSection;
