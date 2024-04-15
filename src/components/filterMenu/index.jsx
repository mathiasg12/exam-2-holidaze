import { ComfirmBtn } from '../ComfirmBtn';
import styles from './filterMenu.module.css';
export function FilterMenu(props) {
  const { clicked, onClickFunction } = props;
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
          >
            <option value="all">All</option>
            <option value=">5">Guests &gt; 5</option>
            <option value="5">Guests = 5</option>
            <option value="4">Guests = 4</option>
            <option value="3">Guests = 3</option>
            <option value="2">Guests = 2</option>
            <option value="1">Guests = 1</option>
          </select>
        </div>
        <div>
          <p>Included</p>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" name="pets" />
            <label htmlFor="pets">Pets allowed</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" name="wifi" />
            <label htmlFor="wifi">Wifi included</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" name="breakfast" />
            <label htmlFor="breakfast">Breakfast included</label>
          </div>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" name="parking" />
            <label htmlFor="parking">Parking included</label>
          </div>
        </div>
        <ComfirmBtn onClickFunction={onClickFunction}></ComfirmBtn>
      </div>
    </div>
  );
}
