import { useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';

import InputField from 'components/forms/inputField/InputField';
import FormState from 'components/forms/formState/FormState';
import {
  formFieldsConfig,
  ICallbackState,
  StorageFormsKeys,
} from 'components/forms/config';
import { FormStyled } from './CallbackForm.styled';
import { getValueFromStorage } from '../helpers';
import Button from 'components/reusableComponents/buttons/Button';

const fieldsOptions = formFieldsConfig.callback;
const initialStorageState = formFieldsConfig.callback.initialStorageState;

const CallbackForm = () => {
  const [initialValues, setInitialValues] = useState(() =>
    getValueFromStorage<StorageFormsKeys, Partial<ICallbackState>>(
      StorageFormsKeys.CALLBACK,
      initialStorageState,
    ),
  );

  return (
    <Formik
      initialValues={{ ...fieldsOptions.initialValues, ...initialValues }}
      validationSchema={fieldsOptions.validationSchema}
      onSubmit={(values, obj: FormikHelpers<ICallbackState>) => {
        const { email, name } = values;
        const data = {
          name,
          email: email.trim().toLowerCase(),
        };
        console.log(data);
        obj.setSubmitting(false);
        sessionStorage.removeItem(StorageFormsKeys.CALLBACK);
        setInitialValues(initialStorageState);
        obj.resetForm();
      }}
      enableReinitialize
    >
      {({ isValid }: FormikProps<ICallbackState>) => (
        <FormStyled>
          <InputField
            label={'Enter your name'}
            name={'name'}
            type="text"
            autoComplete="off"
            // placeholder="your@email.com"
          />
          <InputField
            label={'Enter Email'}
            name={'email'}
            type="text"
            required
            // placeholder="your@email.com"
          />

          <Button type={'submit'} text={'Send'} disabled={false}></Button>
          <FormState fieldsOptions={fieldsOptions} />
        </FormStyled>
      )}
    </Formik>
  );
};

export default CallbackForm;
