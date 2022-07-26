import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 216px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 216px;
  }
`;
