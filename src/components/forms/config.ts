import * as Yup from 'yup';

export enum StorageFormsKeys {
  CALLBACK = 'form-callback',
}

export interface IFormFieldsConfigObject<T> {
  initialValues: T;
  validationSchema: Yup.SchemaOf<T>;
  normalizeFields: (keyof T)[];
  storageKey: StorageFormsKeys;
  initialStorageState: Partial<T>;
}

export interface ICallbackState {
  name?: string;
  email: string;
}

export type Fields = ICallbackState;
// export type Fields = ICallbackState & OtherStates;

interface IFormFieldsConfig {
  callback: IFormFieldsConfigObject<ICallbackState>;
}

export const formFieldsConfig: IFormFieldsConfig = {
  callback: {
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(30, 'max 30 letters')
        .matches(/^[А-Яа-яґҐЁёІіЇїЄє'’ʼ\s\w-]{0,30}$/),
      email: Yup.string()
        .min(5, 'min 5 characters')
        .max(63, 'max 63')
        .email('Error mail format')
        .required('Field is required'),
    }),
    normalizeFields: ['name', 'email'],
    storageKey: StorageFormsKeys.CALLBACK,
    initialStorageState: { name: '', email: '' },
  },
};

export const normalizeValues = <T extends Partial<Fields>>(
  { normalizeFields }: IFormFieldsConfigObject<T>,
  values: T,
): void => {
  if (!normalizeFields.length) return;

  normalizeFields.forEach(field => {
    normalizeValue(field, values);
  });
};

const normalizeValue = <T extends Partial<Fields>>(
  value: keyof T,
  values: T,
) => {
  switch (value) {
    case 'name':
      values.name = values.name?.replace(/^[^А-Яа-яґҐЁёІіЇїЄє\w]/, '');
      break;

    case 'email':
      values.email = values.email?.replace(/^[^\w]/, '');
      break;

    default:
      throw new Error(
        `add case for "${String(
          value,
        )}" value normalize or don't use this key as argument of function "normalizeValues"`,
      );
  }
};

export const whriteValuesToStorage = <T extends Partial<Fields>>(
  { storageKey, initialStorageState }: IFormFieldsConfigObject<T>,
  values: T,
): void => {
  let storageValues = { ...initialStorageState };

  for (let field in initialStorageState) {
    storageValues[field] = values[field];
  }

  sessionStorage.setItem(storageKey, JSON.stringify(storageValues));
};
