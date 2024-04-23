import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import { useLoggedInStore } from '../../states/loggedInState';
/**
 * the navigation component, includes links, takes a prop called clicked which is true or false depending if the user has clicked the hamburger icon.
 * @param {prop} props
 */
export function Nav(props) {
  const { clicked } = props;
  const isLoggedIn = useLoggedInStore((state) => state.loggedIn);
  const logOut = useLoggedInStore((state) => state.logOut);
  return (
    <nav className={styles.nav} id="Nav">
      <ul className={clicked ? styles.navUlVisible : styles.navUl}>
        <li className={styles.navLi}>
          <NavLink to="/" className={styles.navLink}>
            Venues
          </NavLink>
        </li>
        <li className={isLoggedIn ? styles.displayNone : styles.navLi}>
          <NavLink to="/login" className={styles.navLink}>
            Login
          </NavLink>
        </li>
        <li className={isLoggedIn ? styles.displayNone : styles.navLi}>
          <NavLink to="/signUp" className={styles.navLink}>
            Sign up
          </NavLink>
        </li>
        <li className={!isLoggedIn ? styles.displayNone : styles.navLi}>
          <NavLink to="/profile" className={styles.navLink}>
            Profile
          </NavLink>
        </li>
        <li className={!isLoggedIn ? styles.displayNone : styles.navLi}>
          <p
            onClick={logOut}
            type="button"
            role="button"
            className={styles.navButton}
          >
            LogOut
          </p>
        </li>
      </ul>
    </nav>
  );
}
