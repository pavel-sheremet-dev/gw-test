import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation/Navigation';
import Container from 'components/reusableComponents/container/Container';
import { PageFormatContext } from 'context/PageFormatContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { HeaderStyled } from './Header.styled';

import { navItems } from 'data/navigation';

const Header = () => {
  const [position, setPosition] = useState<'absolute' | 'fixed'>('absolute');

  const pageFormat = useContext(PageFormatContext);

  const isMobile = pageFormat === 'mobile' || pageFormat === 'response';
  const changePositionTrigger = isMobile ? 120 : 70;

  const isFixedPositioin = useRef<null | boolean>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const offset = Number(headerRef.current?.offsetHeight);

  useEffect(() => {
    const handleScroll = () => {
      if (isFixedPositioin.current) {
        if (window.scrollY < changePositionTrigger) {
          setPosition('absolute');
          console.log('to rel');
          isFixedPositioin.current = false;
          return;
        }
      } else {
        if (window.scrollY > changePositionTrigger) {
          setPosition('fixed');
          console.log('to fix');
          isFixedPositioin.current = true;
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [changePositionTrigger, position]);

  return (
    <HeaderStyled
      ref={headerRef}
      position={position}
      offset={changePositionTrigger}
    >
      <div></div>
      <Container classNames={['header-container']}>
        <Logo className="logo" />
        <Navigation items={navItems} offset={offset} />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
