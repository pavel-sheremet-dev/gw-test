import { CSSProperties } from 'react';
import { ButtonStyled } from './Buttons.styled';

export type ColorType = 'main' | 'secondary';

interface IProps {
  type: 'button' | 'submit' | 'reset';
  icon?: JSX.Element;
  text: string;
  transparent?: boolean;
  color?: ColorType;
  onClick(): void;
  className?: string;
  style?: CSSProperties;
}

const Button = ({
  type,
  icon,
  text,
  transparent = false,
  color = 'main',
  onClick,
  className,
  style,
}: IProps) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      color={color}
      transparent={transparent}
      className={className}
      style={style}
      hasIcon={Boolean(icon)}
    >
      {icon && icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
