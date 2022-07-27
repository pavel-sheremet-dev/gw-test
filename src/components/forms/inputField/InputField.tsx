import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, InputHTMLAttributes } from 'react';
import { LabelStyled, InputStyled, Error } from './InputField.styled';
import { ReactComponent as WarningIcon } from 'assets/images/svg/worning.svg';

interface OtherProps {
  label: string;
}

type InputFieldType = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> &
  OtherProps;

const InputField = ({ label, required, ...props }: InputFieldType) => {
  const [field, meta] = useField(props);

  console.log(required);

  return (
    <>
      <LabelStyled>
        <InputStyled
          isError={meta.touched && Boolean(meta.error)}
          {...field}
          {...props}
        />
        <span
          className={field.value ? ['label', 'label-fixed'].join(' ') : 'label'}
        >
          {label}
          {required && meta.touched && meta.error ? (
            <span className="required">{'\u00A0'}*</span>
          ) : null}
        </span>
        {required && meta.touched && Boolean(meta.error) ? (
          <Error className="error">
            <WarningIcon />
            {'\u00A0'}
            {meta.error}
          </Error>
        ) : null}
      </LabelStyled>
    </>
  );
};

export default InputField;
