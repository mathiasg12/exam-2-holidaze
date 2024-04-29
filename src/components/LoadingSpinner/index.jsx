import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import styles from './loadingSpinner.module.css';

export function LoadingSpinner() {
  return (
    <div className={styles.loadingSpinner}>
      <FontAwesomeIcon icon={faHouse} />
      <p>Loading</p>
    </div>
  );
}
