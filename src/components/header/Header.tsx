import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation/Navigation';
import Container from 'components/reusableComponents/container/Container';
import { HeaderStyled } from './Header.styled';

const items: string[] = ['Home', 'About', 'Cases', 'Blog', 'Contact'];

const Header = () => {
  return (
    <HeaderStyled>
      <Container classNames={['header-container']}>
        <Logo className="logo" />
        <Navigation items={items} />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
