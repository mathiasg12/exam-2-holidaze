import { Link, useNavigate } from 'react-router-dom';
import styles from './loginForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../hooks/yupSchema';
import { loginFunctionality } from '../../js/loginfunctionality';
import { LoginURL } from '../../js/URL';
import { useEffect, useState } from 'react';
/**
 * component that creates the login form, the component validates and allows users to login when they press the login button if all validation passes, the component
 * has a useffect that runs every time the loggedIn state changes, if loggedIn === true the page redirects to the profile page
 */
export function LoginForm() {
  const [errorActive, setErrorActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Sorry an error has occured please try again later'
  );
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const onSubmit = async (data) => {
    console.log('data', data);
    const email = data.email;
    const password = data.password;
    await loginFunctionality(
      email,
      password,
      LoginURL,
      setErrorMessage,
      setErrorActive,
      setLoggedIn,
      reset
    );
  };
  useEffect(() => {
    if (loggedIn) {
      navigate('/profile');
    }
  }, [loggedIn]);
  return (
    <section className={styles.loginSection}>
      <h1>Login</h1>
      <p className={errorActive ? styles.errorActive : styles.errorActiveNone}>
        {errorMessage}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputCon}>
          <label htmlFor="email">Email</label>
          <p>{errors.email?.message}</p>
          <input
            type="text"
            name="email"
            className={styles.input}
            {...register('email')}
          ></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="password">Password</label>
          <p>{errors.password?.message}</p>
          <input
            type="password"
            name="password"
            className={styles.input}
            {...register('password')}
          ></input>
        </div>
        <input type="submit" value="Login" className={styles.loginBtn}></input>
        <div className={styles.linkCon}>
          <p>Don't have an account?</p>
          <Link to="/signUp">Click here</Link>
        </div>
      </form>
    </section>
  );
}
