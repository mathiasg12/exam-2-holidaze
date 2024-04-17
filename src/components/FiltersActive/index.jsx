import { useFilterStore } from '../../states/filterState';
import styles from './filterActive.module.css';
/**
 * component that creates the active filters div, this component counts the amount of active filters and displays them to the user,
 * it also contains a reset filter button which removes all checkboxes and calls the clearFilter state which clears all filter settings
 */
export function ActiveFilters() {
  const filterValues = useFilterStore((state) => state.metaArray);
  const maxGuests = useFilterStore((state) => state.maxGuests);
  const clearFilters = useFilterStore((state) => state.clearFilter);
  let numberOfFilters = 0;
  if (maxGuests !== 'all') {
    numberOfFilters = 1 + filterValues.length;
  } else {
    numberOfFilters = 0 + filterValues.length;
  }
  function handleBtnClick() {
    clearFilters();
    document.querySelectorAll("input[type='checkbox']").forEach((checkBox) => {
      checkBox.checked = false;
    });
  }
  return numberOfFilters > 0 ? (
    <div className={styles.activeFiltersContainer}>
      <p>Amount of Filters: {numberOfFilters}</p>
      <p
        className={styles.resetFilters}
        role="button"
        type="button"
        onClick={handleBtnClick}
      >
        Reset Filters
      </p>
    </div>
  ) : (
    ''
  );
}
