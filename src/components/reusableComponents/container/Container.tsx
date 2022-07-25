import React from 'react';
import { StyledContainer } from './Container.styled';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Container = ({ style = {}, className, children }: Props) => {
  return (
    <StyledContainer style={style} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
