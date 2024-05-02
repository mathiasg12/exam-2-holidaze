import { Link } from 'react-router-dom';
import styles from './rentOutLink.module.css';
/**
 * component that creates a link to the profile page
 */
export function RentOutLink() {
  const name = localStorage.getItem('name');
  return (
    <Link to={name ? '/profile' : '/login'} className={styles.rentOutLink}>
      Rent out a venue
    </Link>
  );
}
