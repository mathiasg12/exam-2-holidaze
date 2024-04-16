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
        <div>
          <label htmlFor="Guests" hidden>
            Guests
          </label>
          <select
            id="amountOfGuests"
            name="Guests"
            className={styles.amountOfGuests}
            onChange={optionChange}
          >
            <option value="all">All</option>
            <option value="moreThan5">Guests &gt; 5</option>
            <option value="five">Guests = 5</option>
            <option value="four">Guests = 4</option>
            <option value="three">Guests = 3</option>
            <option value="two">Guests = 2</option>
            <option value="one">Guests = 1</option>
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
