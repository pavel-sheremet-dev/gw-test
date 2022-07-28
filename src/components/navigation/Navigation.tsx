import { INavigationItem } from 'data/navigation';
import { scroller } from 'react-scroll';

import { NavStyled } from './Navigation.styled';

interface IProps {
  items: INavigationItem[];
  className?: string;
  offset: number;
}

const Navigation = ({ items, className, offset }: IProps) => {
  const handleScroll = (id: string): void => {
    scroller.scrollTo(id, {
      duration: 1000,
      offset: -offset,
      smooth: 'easeOutQuint',
    });
  };

  return (
    <NavStyled className={className}>
      {!!items.length && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleScroll.bind(this, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </NavStyled>
  );
};

export default Navigation;
