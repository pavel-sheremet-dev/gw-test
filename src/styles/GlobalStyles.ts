import { createGlobalStyle } from 'styled-components';
import { CSSProp } from './types';

export const GlobalStyle = createGlobalStyle`

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

body {
  color: ${({ theme }) => theme.colors.defaultFontColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor1};
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  /* animation-name: fadein;
  animation-duration: 0.25s; */
}



h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
}

ul {
  padding-left: 0;
  list-style: none;
}

img,
svg
 {
  display: block;
}

button {
  border: none;
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  outline: none;
}

.list {
  list-style: none;
}

.isHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
}

.modal-wrapper {
  & button[title] {
    transition: ${({ theme }) =>
      theme.transition({ property: CSSProp.opacity })};
  }
  
  & button[title='First image'], & button[title='Last image']  {
    opacity: 0;
    pointer-events: none;
  };
}

`;
