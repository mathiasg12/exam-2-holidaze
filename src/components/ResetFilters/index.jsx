import { useFilterStore } from '../../states/filterState';
import styles from './resetfilter.module.css';
export function ResetFilters() {
  const clearFilter = useFilterStore((state) => state.clearFilter);
  function handleClick() {
    clearFilter();
    const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckBoxes.forEach((checkBox) => {
      checkBox.checked = false;
    });
  }
  return (
    <button className={styles.resetBtn} onClick={handleClick}>
      Reset filters
    </button>
  );
}
