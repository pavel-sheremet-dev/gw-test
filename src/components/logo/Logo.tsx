import { ReactComponent as LogoIcon } from 'assets/images/svg/logo.svg';
import { LogoStyled } from './Logo.styled';

interface IProps {
  className?: string;
}

const Logo = ({ className }: IProps) => {
  return (
    <LogoStyled className={className} href="/">
      <div className="icon">
        <LogoIcon />
      </div>
      <span className="first-word">Finance</span>
      <span className="second-word">Ledger</span>
    </LogoStyled>
  );
};

export default Logo;
