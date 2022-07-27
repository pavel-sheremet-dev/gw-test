import { Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;

  & label {
    /* margin-top: 5px; */
    /* margin-bottom: 20px; */
  }

  & button[type='submit'] {
    margin-top: 32px;
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & button[type='submit'] {
      margin-top: 40px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    & button[type='submit'] {
      margin-top: 50px;
    }
  }
`;
