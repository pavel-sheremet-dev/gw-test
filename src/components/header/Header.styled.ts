import styled from 'styled-components';

interface IStyledHeaderProps {
  position: 'absolute' | 'fixed';
  offset: number;
}

export const HeaderStyled = styled.header<IStyledHeaderProps>`
  position: ${({ position }) => position};
  top: 0;
  background-color: ${({ position }) =>
    position === 'fixed' ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  animation-name: ${({ position }) =>
    position === 'fixed' ? 'header-fadein' : 'header-fadeout'};
  animation-duration: ${({ theme, position }) =>
    `${theme.duration * (position === 'fixed' ? 4 : 2)}ms`};
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 0;

  .logo {
    margin-bottom: 12px;
  }

  .header-container {
    text-align: center;
    padding-top: 0;
    padding-bottom: 0;
    width: 100vw;
    max-width: ${({ theme }) => theme.breakPoints.desktop};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 14px 0;

    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      margin-bottom: 0;
    }
  }

  @keyframes header-fadein {
    0% {
      background-color: transparent;
      top: ${({ offset }) => `-${offset}px`};
    }
    50% {
      top: 0;
    }
    100% {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  @keyframes header-fadeout {
    0% {
      top: ${({ offset }) => `-${offset}px`};
    }
    100% {
      top: 0;
    }
  }
`;
