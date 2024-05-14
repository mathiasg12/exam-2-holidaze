import { useNavigate } from 'react-router-dom';
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
import { ClickHereLink } from '../ClickHereLink';
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
    <section className={styles.signUpSection}>
      <div className={styles.imgWrapper}>
        <img src="/pictures/imageOfNature.jpg" alt="welcome" />
        <h1>Sign up and start your journey today!</h1>
      </div>
      <div className={styles.singUpSectionForm}>
        <p
          id="errorWithform"
          className={
            !errorActive ? styles.errorWithFormNone : commonStyles.errorMsg
          }
        >
          {errorMessage}
        </p>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className={styles.inputCon}>
            <label htmlFor="email">Email</label>
            <p className={commonStyles.errorValidation}>
              {errors.email?.message}
            </p>
            <input
              type="text"
              name="email"
              id="email"
              {...register('email')}
              className={
                !errors.email
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }
            ></input>
          </div>
          <div className={styles.inputCon}>
            <label htmlFor="name">Name</label>
            <p className={commonStyles.errorValidation}>
              {errors.name?.message}
            </p>
            <input
              type="text"
              name="name"
              id="name"
              {...register('name')}
              className={
                !errors.name
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }
            ></input>
          </div>
          <div className={styles.inputCon}>
            <label htmlFor="image">
              Image URL (optional: a default is given if left empty)
            </label>
            <input
              type="text"
              name="image"
              id="image"
              {...register('image')}
              className={commonStyles.input}
            ></input>
          </div>
          <div className={styles.inputCon}>
            <label htmlFor="password">Password</label>
            <p className={commonStyles.errorValidation}>
              {errors.password?.message}
            </p>
            <div
              className={`${styles.eyeAndInputWrapper} ${
                !errors.password
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }`}
            >
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                id="password"
                {...register('password')}
                className={styles.inputPassword}
              ></input>
              <FontAwesomeIcon
                icon={passwordVisible ? faEye : faEyeSlash}
                onClick={handleEyeClick}
                className={styles.eye}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className={styles.inputCon}>
            <label htmlFor="rePasswordInput">Repeat Password</label>
            <p className={commonStyles.errorValidation}>
              {errors.repeatPassword?.message}
            </p>
            <div
              className={`${styles.eyeAndInputWrapper} ${
                !errors.repeatPassword
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }`}
            >
              <input
                type={repeatPasswordVisible ? 'text' : 'password'}
                name="rePassword"
                id="rePasswordInput"
                {...register('repeatPassword')}
                className={styles.inputPassword}
              ></input>
              <FontAwesomeIcon
                icon={repeatPasswordVisible ? faEye : faEyeSlash}
                onClick={handleEyeClickRepeatPassword}
                className={styles.eye}
              ></FontAwesomeIcon>
            </div>
          </div>
          <fieldset className={styles.fieldsetSignUp}>
            <legend>What kind of user are you registrering?</legend>
            <div className={styles.inputConFieldset}>
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
          <ClickHereLink linkTo="/login" text="Already a user?"></ClickHereLink>
        </form>
      </div>
    </section>
  );
}
