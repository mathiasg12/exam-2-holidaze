import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
/**
 * the navigation component, includes links, takes a prop called clicked which is true or false depending if the user has clicked the hamburger icon.
 * @param {prop} props
 */
export function Nav(props) {
  const { clicked } = props;
  return (
    <nav className={styles.nav} id="Nav">
      <ul className={clicked ? styles.navUlVisible : styles.navUl}>
        <li className={styles.navLi}>
          <NavLink to="/" className={styles.navLink}>
            Venues
          </NavLink>
        </li>
        <li className={styles.navLi}>
          <NavLink to="/login" className={styles.navLink}>
            Login
          </NavLink>
        </li>
        <li className={styles.navLi}>
          <NavLink to="/signUp" className={styles.navLink}>
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
