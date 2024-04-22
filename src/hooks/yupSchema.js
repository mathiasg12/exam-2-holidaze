import * as yup from 'yup';
/**
 * yup schema for sign up form and login form
 */
export const SignUpSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      '^[a-zA-Z0-9._%+-]+@stud.noroff.no$',
      'email must follow this format example@stud.noroff.no'
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be minimum 8 characters long'),
  repeatPassword: yup
    .string()
    .required('Repeat password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
export const LoginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      '^[a-zA-Z0-9._%+-]+@stud.noroff.no$',
      'email must follow this format example@stud.noroff.no'
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be minimum 8 characters long'),
});
