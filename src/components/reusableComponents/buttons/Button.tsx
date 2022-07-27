import { PageFormatContext } from 'context/PageFormatContext';
import { CSSProperties, useContext } from 'react';
import { ButtonStyled } from './Buttons.styled';

export type ColorType = 'main' | 'secondary';

interface IProps {
  type: 'button' | 'submit' | 'reset';
  icon?: JSX.Element;
  text: string;
  transparent?: boolean;
  color?: ColorType;
  onClick?(): void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
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
  disabled,
}: IProps) => {
  const pageFormat = useContext(PageFormatContext);

  const isMobile = pageFormat === 'mobile' || pageFormat === 'response';

  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      color={color}
      transparent={transparent}
      className={className}
      style={style}
      hasIcon={Boolean(icon)}
      disabled={disabled}
    >
      {icon && !isMobile && icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
