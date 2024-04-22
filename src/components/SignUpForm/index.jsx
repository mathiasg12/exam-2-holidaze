import { Link } from 'react-router-dom';
import styles from './signUpForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerURL } from '../../js/URL';
import { ValidationSchema } from '../../hooks/yupSchema';
import { createSignUpObject } from '../../js/createSignUpObject';
import { useState } from 'react';
import { signUpFunction } from '../../js/signUpFunctionality';
/**
 * component that creates the signup form and handles inputs from the user, if the submit button is pressed a new user is created
 */
export function SignUpForm() {
  const [errorActive, setErrorActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'error please try again later'
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(ValidationSchema) });
  const OnSubmit = async (data) => {
    const object = createSignUpObject(
      data.name,
      data.email,
      data.password,
      data.image,
      data.userType
    );
    await signUpFunction(
      registerURL,
      object,
      setErrorActive,
      setErrorMessage,
      reset
    );
  };
  return (
    <section className={styles.singUpSection}>
      <h1>Sign up</h1>
      <p
        id="errorWithform"
        className={
          !errorActive ? styles.errorWithFormNone : styles.errorWithForm
        }
      >
        {errorMessage}
      </p>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className={styles.inputCon}>
          <label htmlFor="email">Email</label>
          <p>{errors.email?.message}</p>
          <input
            type="text"
            name="email"
            className={styles.input}
            id="email"
            {...register('email')}
          ></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="name">Name</label>
          <p>{errors.name?.message}</p>
          <input
            type="text"
            name="name"
            className={styles.input}
            id="name"
            {...register('name')}
          ></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="image">
            Image URL (optional: a default is given if left empty)
          </label>
          <input
            type="text"
            name="image"
            className={styles.input}
            id="image"
            {...register('image')}
          ></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="password">Password</label>
          <p>{errors.password?.message}</p>
          <input
            type="password"
            name="password"
            className={styles.input}
            id="password"
            {...register('password')}
          ></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="rePassword">Repeat Password</label>
          <p>{errors.repeatPassword?.message}</p>
          <input
            type="password"
            name="rePassword"
            className={styles.input}
            {...register('repeatPassword')}
          ></input>
        </div>
        <fieldset>
          <legend>What kind of user are you registrering?</legend>
          <div className={styles.inputCon}>
            <label htmlFor="customer">Customer</label>
            <input
              type="radio"
              name="userType"
              id="customer"
              value="customer"
              {...register('userType')}
              defaultChecked
            ></input>
            <label htmlFor="manager">Venue manager</label>
            <input
              type="radio"
              id="manager"
              name="userType"
              value="manager"
              {...register('userType')}
            />
          </div>
        </fieldset>
        <input type="submit" value="Sign up" className={styles.submitBtn} />
        <div className={styles.linkCon}>
          <p>Already a user?</p>
          <Link to="/login">Click here</Link>
        </div>
      </form>
    </section>
  );
}
