import { Link } from 'react-router-dom';
import styles from './signUpForm.module.css';
export function SignUpForm() {
  // const { resp, loading } = useRegisterUser(registerURL, object);
  // const loadedResp = resp ? resp : {};
  // if (!loading) {
  //   console.log(loadedResp);
  // }
  return (
    <section className={styles.singUpSection}>
      <h1>Sign up</h1>
      <form>
        <div className={styles.inputCon}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className={styles.input}></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className={styles.input}></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="image">Image URl</label>
          <input type="text" name="image" className={styles.input}></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
          ></input>
        </div>
        <div className={styles.inputCon}>
          <label htmlFor="rePassword">Repeat Password</label>
          <input
            type="password"
            name="rePassword"
            className={styles.input}
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
              defaultChecked
            ></input>
            <label htmlFor="manager">Venue manager</label>
            <input type="radio" id="manager" name="userType" value="manager" />
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
