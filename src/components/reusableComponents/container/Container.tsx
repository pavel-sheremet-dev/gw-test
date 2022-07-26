import React from 'react';
import { StyledContainer } from './Container.styled';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  classNames?: string[];
  sectionType?: 'basic' | 'withImage';
  backgroundColor?: string;
}

const Container = ({
  style = {},
  classNames,
  children,
  sectionType = 'basic',
  backgroundColor = 'transparent',
}: Props) => {
  return (
    <StyledContainer
      style={style}
      className={
        classNames ? [...classNames, sectionType].join(' ') : sectionType
      }
      sectionType={sectionType}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
