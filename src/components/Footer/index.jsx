import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';
import { useLoggedInStore } from '../../states/loggedInState';
/**
 * component that creates the footer, the footer has contact information aswell as links to the landing page and profile page
 * for logged in users, if the user is not logged in the links changes to landing page, login page and signup page
 */
export function Footer() {
  const isLoggedIn = useLoggedInStore((state) => state.loggedIn);
  const name = localStorage.getItem('name');
  return (
    <footer>
      <div className={styles.footerElementsContainer}>
        <div className={styles.footerSection}>
          <ul>
            <li>
              <NavLink to="/" className={styles.footerLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={isLoggedIn ? styles.displayNone : styles.footerLink}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={isLoggedIn ? styles.displayNone : styles.footerLink}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/profile/${name}`}
                className={!isLoggedIn ? styles.displayNone : styles.footerLink}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact info</h3>
          <p>Email: Holidaze@gmail.com</p>
          <p>Mobile: +47 545 777 22</p>
          <p>copyright&copy; Mathias Gauslå</p>
        </div>
      </div>
    </footer>
  );
}
