import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './searchBar.module.css';
export function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <input placeholder="Search for a venue"></input>
      <div className={styles.magnifyingGlass}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
