import { INavigationItem } from 'data/navigation';
import { useState } from 'react';
import { Link } from 'react-scroll';

import { NavStyled } from './Navigation.styled';

interface IProps {
  items: INavigationItem[];
  className?: string;
  offset: number;
}

const Navigation = ({ items, className, offset }: IProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <NavStyled className={className}>
      {!!items.length && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link
                className={isFocused ? 'focused' : undefined}
                onFocus={(): void => setIsFocused(true)}
                activeClass="active-link"
                to={item.id}
                spy={true}
                smooth={true}
                // offset={-offset}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </NavStyled>
  );
};

export default Navigation;
