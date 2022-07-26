import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 0;

  .logo {
    margin-bottom: 12px;
  }

  .header-container {
    text-align: center;
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
`;
