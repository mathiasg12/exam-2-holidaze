import { useFilterStore } from '../../states/filterState';
import { ComfirmBtn } from '../ComfirmBtn';
import styles from './filterMenu.module.css';
export function FilterMenu(props) {
  const { clicked, onClickFunction } = props;
  const filterSettings = useFilterStore((state) => state.filterSettings);
  const changeMaxGuests = useFilterStore((state) => state.changeMaxGuests);
  function checkboxChange(inputClicked) {
    const checked = inputClicked.target.checked;
    const value = inputClicked.target.value;
    filterSettings(value, checked);
  }
  function optionChange(changedEvent) {
    const value = changedEvent.target.value;
    changeMaxGuests(value);
  }
  return (
    <div className={clicked ? styles.filterMenu : styles.filterMenuClosed}>
      <div className={styles.closeMenu} role="button" onClick={onClickFunction}>
        X
      </div>
      <div className={styles.filterMenuContentContainer}>
        <h3>Filter</h3>
        <div className={styles.amountOfGuestsCon}>
          <label htmlFor="Guests" className={styles.amountOfGuestsLabel}>
            Max amount of guests
          </label>
          <select
            id="amountOfGuests"
            name="Guests"
            className={styles.amountOfGuests}
            onChange={optionChange}
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
            />
            <label htmlFor="pets">Pets allowed</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="wifi"
              value="wifi"
              onClick={checkboxChange}
            />
            <label htmlFor="wifi">Wifi included</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="breakfast"
              value="breakfast"
              onClick={checkboxChange}
            />
            <label htmlFor="breakfast">Breakfast included</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="parking"
              value="parking"
              onClick={checkboxChange}
            />
            <label htmlFor="parking">Parking included</label>
          </div>
        </div>
        <ComfirmBtn onClickFunction={onClickFunction}></ComfirmBtn>
      </div>
    </div>
  );
}
