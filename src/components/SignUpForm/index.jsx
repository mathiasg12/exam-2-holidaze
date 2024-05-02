import { Link, useNavigate } from 'react-router-dom';
import styles from './signUpForm.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerURL } from '../../js/URL';
import { SignUpSchema } from '../../hooks/yupSchema';
import { createSignUpObject } from '../../js/createSignUpObject';
import { useEffect, useState } from 'react';
import { signUpFunction } from '../../js/signUpFunctionality';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useLoggedInStore } from '../../states/loggedInState';
/**
 * component that creates the signup form and handles inputs from the user, if the submit button is pressed a new user is created and the user is logged in automatically, the component
 * has a useffect that runs every time the loggedIn state changes, if loggedIn === true the page redirects to the profile page
 */
export function SignUpForm() {
  const [errorActive, setErrorActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const loginTrue = useLoggedInStore((state) => state.login);
  const [errorMessage, setErrorMessage] = useState(
    'error please try again later'
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(SignUpSchema) });
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
      setLoggedIn,
      reset
    );
  };
  function handleEyeClick() {
    setPasswordVisible(!passwordVisible);
  }
  function handleEyeClickRepeatPassword() {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  }
  useEffect(() => {
    if (loggedIn) {
      navigate('/profile');
      loginTrue();
    }
  }, [loggedIn]);
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
          <div className={styles.eyeAndInputWrapper}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              className={styles.inputPassword}
              {...register('password')}
            ></input>
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              onClick={handleEyeClick}
              className={styles.eye}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="rePassword">Repeat Password</label>
          <p>{errors.repeatPassword?.message}</p>
          <div className={styles.eyeAndInputWrapper}>
            <input
              type={repeatPasswordVisible ? 'text' : 'password'}
              name="rePassword"
              className={styles.inputPassword}
              {...register('repeatPassword')}
            ></input>
            <FontAwesomeIcon
              icon={repeatPasswordVisible ? faEye : faEyeSlash}
              onClick={handleEyeClickRepeatPassword}
              className={styles.eye}
            ></FontAwesomeIcon>
          </div>
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
        <input
          type="submit"
          value="Sign up"
          className={commonStyles.bigButtonYellow}
        />
        <div className={styles.linkCon}>
          <p>Already a user?</p>
          <Link to="/login">Click here</Link>
        </div>
      </form>
    </section>
  );
}
