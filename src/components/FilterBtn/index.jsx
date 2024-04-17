import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import styles from './filterBtn.module.css';
/**
 * the filter button component has a button and a filter icon
 * @param {props} props
 */
export function FilterBtn(props) {
  const { onClickFunction } = props;
  return (
    <button className={styles.filterBtn} onClick={onClickFunction}>
      Filter <FontAwesomeIcon icon={faSort} />{' '}
    </button>
  );
}
