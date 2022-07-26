import { NavStyled } from './Navigation.styled';

interface IProps {
  items: string[];
  className?: string;
}

const Navigation = ({ items, className }: IProps) => {
  return (
    <NavStyled className={className}>
      {!!items.length && (
        <ul>
          {items.map(item => (
            <li key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </NavStyled>
  );
};

export default Navigation;
