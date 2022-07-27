import { useEffect } from 'react';
import { useFormikContext } from 'formik';

import {
  IFormFieldsConfigObject,
  normalizeValues,
  whriteValuesToStorage,
} from 'components/forms/config';

interface IFormStateProps<T> {
  fieldsOptions: IFormFieldsConfigObject<T>;
  followField?: keyof T;
}

const FormState = <T,>({ fieldsOptions }: IFormStateProps<T>): null => {
  const { values } = useFormikContext<T>();

  useEffect(() => {
    normalizeValues<T>(fieldsOptions, values);
    whriteValuesToStorage<T>(fieldsOptions, values);
  }, [fieldsOptions, values]);

  return null;
};

export default FormState;
