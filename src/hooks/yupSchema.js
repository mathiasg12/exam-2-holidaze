import * as yup from 'yup';
/**
 * yup schema for "sign up" form," login" form,  "change avatar" form and the "rent out a venue form".
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
export const ChangeAvatarSchema = yup.object({
  url: yup
    .string()
    .required(
      'please enter a valid URL or use the exit button to close the form'
    ),
});
export const RentOutVenueSchema = yup.object({
  name: yup.string().required('The venue needs a name'),
  description: yup
    .string()
    .required('Please write a short description about the venue.')
    .min(4, 'Description needs to be at least 4 characters.')
    .max(150, 'Description needs to be shorter than 150 characters.'),
  price: yup
    .number('Price needs to be a number')
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Please enter a price per night')
    .min(1, 'Price needs to be at least 1$')
    .max(10000, 'Price cannot be greater than 10 000$'),
  address: yup
    .string()
    .required('please enter the address of your venue')
    .min(4, 'Address needs to be at least 4 characters long'),
  city: yup
    .string()
    .required('please enter the city of your venue')
    .min(2, 'Name of the city needs to be at least 2 characters long'),
  country: yup
    .string()
    .required('Please enter the name of the country your venue is located')
    .min(4, 'Name of the country needs to be at least 4 characters long'),
  maxGuests: yup
    .number('Max guest needs to be a number')
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(
      'Please enter the maximum amount of guests that can stay in your venue'
    )
    .min(1, 'your venue needs to be able for at least 1 guest')
    .max(100, 'A venue cannot accommodate more than 100 guests'),
});
