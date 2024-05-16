import { Link, useNavigate } from 'react-router-dom';
import styles from './loginForm.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../hooks/yupSchema';
import { loginFunctionality } from '../../js/loginfunctionality';
import { LoginURL } from '../../js/URL';
import { useEffect, useState } from 'react';
import { useLoggedInStore } from '../../states/loggedInState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ClickHereLink } from '../ClickHereLink';
import { useProfileAvatar } from '../../states/profileAvatarState';
/**
 * component that creates the login form, the component validates and allows users to login when they press the login button if all validation passes, the component
 * has a useffect that runs every time the loggedIn state changes, if loggedIn === true the page redirects to the profile page
 */
export function LoginForm() {
  const [errorActive, setErrorActive] = useState(false);
  const loginTrue = useLoggedInStore((state) => state.login);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Sorry an error has occured please try again later'
  );
  const [loggedIn, setLoggedIn] = useState(false);
  const setProfileAvatar = useProfileAvatar((state) => state.setProfileImage);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    await loginFunctionality(
      email,
      password,
      LoginURL,
      setErrorMessage,
      setErrorActive,
      setLoggedIn,
      reset,
      setProfileAvatar
    );
  };
  function handleEyeClick() {
    setPasswordVisible(!passwordVisible);
  }
  useEffect(() => {
    if (loggedIn) {
      const name = localStorage.getItem('name');
      navigate(`/profile/${name}`);
      loginTrue();
    }
  }, [loggedIn, navigate, loginTrue]);
  return (
    <section className={styles.loginSection}>
      <div className={styles.imgWrapper}>
        <img src="/pictures/ImageOfNature.jpg" alt="welcome back" />
        <h1 className={styles.loginH1}>Welcome back!</h1>
      </div>
      <div className={styles.loginFormContainer}>
        <p
          className={
            errorActive ? commonStyles.errorMsg : styles.errorActiveNone
          }
        >
          {errorMessage}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputCon}>
            <label htmlFor="emailInput">Email</label>
            <p className={commonStyles.errorValidation}>
              {errors.email?.message}
            </p>
            <input
              type="text"
              name="email"
              id="emailInput"
              className={
                !errors.email
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }
              {...register('email')}
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
                className={styles.inputPassword}
                {...register('password')}
              ></input>
              <FontAwesomeIcon
                id="eyeSymbolPassword"
                icon={passwordVisible ? faEye : faEyeSlash}
                className={styles.eye}
                type="button"
                role="button"
                onClick={handleEyeClick}
              ></FontAwesomeIcon>
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            className={commonStyles.bigButtonYellow}
          ></input>
          <ClickHereLink
            linkTo="/signUp"
            text="Don't have an account?"
            className={styles.clickHereLink}
          ></ClickHereLink>
        </form>
      </div>
    </section>
  );
}
