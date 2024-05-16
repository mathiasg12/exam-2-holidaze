import { useEffect } from 'react';
import { useFilterStore } from '../../states/filterState';
import { ComfirmBtn } from '../ComfirmBtn';
import styles from './filterMenu.module.css';
/**
* Component that creates the filter menu. The filter menu uses states from the filter cart to globally store filter settings.
  The filter menu contains an exit button, calls the confirm button component, select input for the amount of guests,
  and checkboxes for the different filter settings.*
 * @param {props} props
 */
export function FilterMenu(props) {
  const { clicked, onClickFunction, searched } = props;
  const filterSettings = useFilterStore((state) => state.filterSettings);
  const changeMaxGuests = useFilterStore((state) => state.changeMaxGuests);
  const maxGuests = useFilterStore((state) => state.maxGuests);
  const sorted = useFilterStore((state) => state.sorted);
  const changeSorted = useFilterStore((state) => state.changeSorted);
  const checkIfCheckboxIsChecked = useFilterStore(
    (state) => state.checkMetaArray
  );
  useEffect(() => {
    checkIfCheckboxIsChecked(useFilterStore.getState());
  }, []);
  if (searched) {
    checkIfCheckboxIsChecked(useFilterStore.getState());
  }
  function checkboxChange(inputClicked) {
    const checked = inputClicked.target.checked;
    const value = inputClicked.target.value;
    filterSettings(value, checked);
  }
  function maxGuestChange(changedEvent) {
    const value = changedEvent.target.value;
    changeMaxGuests(value);
  }
  function sortedChange(changedEvent) {
    const value = changedEvent.target.value;
    changeSorted(value);
  }
  return (
    <div className={clicked ? styles.filterMenu : styles.filterMenuClosed}>
      <div className={styles.closeMenu} role="button" onClick={onClickFunction}>
        X
      </div>
      <div className={styles.filterMenuContentContainer}>
        <h3>Filter</h3>
        <div className={styles.amountOfGuestsAndSortCon}>
          <label htmlFor="sort">Sorted by:</label>
          <select
            id="sort"
            name="sort"
            className={styles.amountOfGuestsAndSort}
            onChange={sortedChange}
            value={sorted}
          >
            <option value="newestFirst">Newest venues first</option>
            <option value="oldestFirst">Oldest venues first</option>
            <option value="priceLowtoHigh">Lowest price first</option>
            <option value="priceHighToLow">Highest price first</option>
            <option value="ratingLowToHigh">Lowest rating first</option>
            <option value="ratingHighToLow">Highest rating first</option>
          </select>
        </div>
        <div className={styles.amountOfGuestsAndSortCon}>
          <label htmlFor="amountOfGuests">Max amount of guests</label>
          <select
            id="amountOfGuests"
            name="Guests"
            className={styles.amountOfGuestsAndSort}
            onChange={maxGuestChange}
            value={maxGuests}
          >
            <option value="all">All</option>
            <option value="moreThan5">More than 5 guests</option>
            <option value="five">up to 5 guests</option>
            <option value="four">up to 4 guests</option>
            <option value="three">up to 3 guests</option>
            <option value="two">up to 2 guests</option>
            <option value="one">1 guest</option>
          </select>
        </div>
        <div>
          <p>Included</p>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="pets"
              value="pets"
              onClick={checkboxChange}
              id="petsCheckBox"
            />
            <label htmlFor="petsCheckBox">Pets allowed</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="wifi"
              value="wifi"
              onClick={checkboxChange}
              id="wifiCheckBox"
            />
            <label htmlFor="wifiCheckBox">Wifi included</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="breakfast"
              value="breakfast"
              onClick={checkboxChange}
              id="breakfastCheckBox"
            />
            <label htmlFor="breakfastCheckBox">Breakfast included</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="parking"
              value="parking"
              onClick={checkboxChange}
              id="parkingCheckBox"
            />
            <label htmlFor="parkingCheckBox">Parking included</label>
          </div>
        </div>
        <ComfirmBtn onClickFunction={onClickFunction}></ComfirmBtn>
      </div>
    </div>
  );
}
