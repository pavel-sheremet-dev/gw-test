import { CSSProp } from 'styles/types';

import styled from 'styled-components';

interface IInputProps {
  isError: boolean;
}

export const LabelStyled = styled.label`
  position: relative;
  display: block;
  height: 72px;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.inputPlaceholder};

  & .label {
    position: absolute;
    z-index: 6;
    top: 42px;
    left: 8px;
    transition: ${({ theme }) => theme.transition({ property: CSSProp.top })};
  }

  & .label.label-fixed {
    top: 5px;
  }

  & .required {
    color: ${({ theme }) => theme.colors.required};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 18px;
  }
`;

export const InputStyled = styled.input<IInputProps>`
  position: absolute;
  bottom: 0;
  z-index: 5;
  display: block;
  padding: 5px 8px;
  width: 100%;
  height: 40px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.backgroundColor1};
  ${({ isError, theme }) =>
    isError ? ` outline: 1px solid ${theme.colors.required};` : ''};
  border: none;
  transition: ${({ theme }) =>
    theme.transition({ property: CSSProp.backgroundColor })};

  &:focus {
    background-color: ${({ theme }) => theme.colors.backgroundColor1};
  }

  &:focus + .label {
    top: 5px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: calc(100% - 12px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: calc(100% - 22px);
  }
`;

export const Error = styled.span`
  position: absolute;
  display: flex;
  align-items: flex-end;
  z-index: 0;
  bottom: 0;
  bottom: -25px;
  font-size: 16px;
  line-height: 1.25;
`;
