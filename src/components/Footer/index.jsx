import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';
export function Footer() {
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
              <NavLink to="/profile" className={styles.footerLink}>
                Rent out a venue
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
