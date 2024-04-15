import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import styles from './filterBtn.module.css';
export function FilterBtn() {
  return (
    <button className={styles.filterBtn}>
      Filter <FontAwesomeIcon icon={faSort} />{' '}
    </button>
  );
}
