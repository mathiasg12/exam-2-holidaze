import { Link } from 'react-router-dom';
import styles from './rentOutLink.module.css';
export function RentOutLink() {
  return (
    <Link to="/profile" className={styles.rentOutLink}>
      Rent out a venue
    </Link>
  );
}
