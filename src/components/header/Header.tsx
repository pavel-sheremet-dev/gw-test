import { useEffect, useRef, useState } from 'react';

import Container from 'components/reusableComponents/container/Container';
import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation/Navigation';

import { HeaderStyled } from './Header.styled';

import { navItems } from 'data/navigation';

export type PositionType = 'absolute' | 'fixed';

const Header = () => {
  const [position, setPosition] = useState<PositionType>('absolute');
  const [offset, setOffset] = useState(0);

  const isFixedPositioin = useRef<null | boolean>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setOffset(Number(headerRef.current?.offsetHeight ?? 0));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isFixedPositioin.current) {
        if (window.scrollY < offset) {
          setPosition('absolute');
          isFixedPositioin.current = false;
          return;
        }
      } else {
        if (window.scrollY > offset) {
          setPosition('fixed');
          isFixedPositioin.current = true;
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, position]);

  return (
    <HeaderStyled ref={headerRef} position={position} offset={offset}>
      <Container classNames={['header-container']}>
        <Logo className="logo" />
        <Navigation items={navItems} offset={offset} />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
