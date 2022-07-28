import { useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';

import InputField from 'components/forms/inputField/InputField';
import FormState from 'components/forms/formState/FormState';
import Button from 'components/reusableComponents/buttons/Button';

import { FormStyled } from './CallbackForm.styled';

import { encode, getValueFromStorage } from '../helpers';
import {
  formFieldsConfig,
  ICallbackState,
  StorageFormsKeys,
} from 'components/forms/config';

const fieldsOptions = formFieldsConfig.callback;
const initialStorageState = formFieldsConfig.callback.initialStorageState;

const formName = 'callback-form';
const netlifyConfig = { 'form-name': formName };

const CallbackForm = () => {
  const [initialValues, setInitialValues] = useState(() =>
    getValueFromStorage<StorageFormsKeys, Partial<ICallbackState>>(
      StorageFormsKeys.CALLBACK,
      initialStorageState,
    ),
  );

  return (
    <Formik
      initialValues={{
        ...fieldsOptions.initialValues,
        ...initialValues,
      }}
      validationSchema={fieldsOptions.validationSchema}
      onSubmit={(values, actions: FormikHelpers<ICallbackState>) => {
        const { email, name } = values;
        const data = {
          name,
          email: email.trim().toLowerCase(),
        };

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode<ICallbackState>({ ...data, ...netlifyConfig }),
        })
          .then(() => {
            alert('Success');
            sessionStorage.removeItem(StorageFormsKeys.CALLBACK);
            setInitialValues(initialStorageState);
            actions.resetForm();
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false));
      }}
      enableReinitialize
    >
      {({ isValid }: FormikProps<ICallbackState>) => (
        <FormStyled
          name={formName}
          data-netlify={true}
          data-netlify-honeypot="bot-field"
        >
          <input type={'hidden'} name={'form-name'} value={formName} />
          <InputField
            label={'Enter your name'}
            name={'name'}
            type="text"
            autoComplete="off"
            placeholder=""
          />
          <InputField
            label={'Enter Email'}
            name={'email'}
            type="text"
            required
            placeholder=""
          />

          <Button type={'submit'} text={'Send'} disabled={false}></Button>
          <FormState fieldsOptions={fieldsOptions} />
        </FormStyled>
      )}
    </Formik>
  );
};

export default CallbackForm;
