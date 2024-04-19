import { Link } from 'react-router-dom';
import styles from './loginForm.module.css';
export function LoginForm() {
  return (
    <section className={styles.loginSection}>
      <h1>Login</h1>
      <form>
        <div className={styles.inputCon}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className={styles.input}></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
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
