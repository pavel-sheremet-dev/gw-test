import { FontLoadContext } from 'context/FontLoadContext';
import React, { useContext } from 'react';
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
  const fontLoaded = useContext(FontLoadContext);
  const fontLoadedClass: 'fontloaded' | 'fontNotLoaded' = fontLoaded
    ? 'fontloaded'
    : 'fontNotLoaded';

  return (
    <StyledContainer
      style={style}
      className={
        classNames
          ? [...classNames, sectionType, fontLoadedClass].join(' ')
          : [sectionType, fontLoadedClass].join(' ')
      }
      sectionType={sectionType}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
