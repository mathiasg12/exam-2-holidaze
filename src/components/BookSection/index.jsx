import { useState } from 'react';
import styles from './bookSection.module.css';
/**
 * component that creates the book section, this section allows users to add amount of guests, choose dates and book a venue
 * @param {props} props
 */
export function BookSection(props) {
  const { venue } = props;
  const [guestValue, setGuestValue] = useState(1);
  const maxGuestFloat = parseFloat(venue.maxGuests);
  function handleAddGuest() {
    document.getElementById(
      'maxGuestsLabel'
    ).innerText = `How many are staying? (min 1 and max ${venue.maxGuests})`;
    if (guestValue + 1 > maxGuestFloat) {
      setGuestValue(1);
      document.getElementById(
        'maxGuestsLabel'
      ).innerText = `Max ${venue.maxGuests} guests`;
    } else {
      setGuestValue(guestValue + 1);
    }
  }
  function handleRemoveGuest() {
    document.getElementById(
      'maxGuestsLabel'
    ).innerText = `How many are staying? (min 1 and max ${venue.maxGuests})`;
    if (guestValue - 1 <= 0) {
      document.getElementById('maxGuestsLabel').innerText = `Atleast 1 guest`;
      setGuestValue(1);
    } else {
      setGuestValue(guestValue - 1);
    }
  }
  return (
    <div className={styles.bookSection}>
      <h2>Look for available dates and book</h2>
      <div className={styles.AllInputWrapper}>
        <div className={styles.BookSectionInputCon}>
          <div className={styles.BookSectionInputAndLabel}>
            <label htmlFor="from">From</label>
            <input name="from" type="date" className={styles.inputDate}></input>
          </div>
          <div className={styles.BookSectionInputAndLabel}>
            <label htmlFor="to">To</label>
            <input name="to" type="date" className={styles.inputDate}></input>
          </div>
        </div>
        <div className={styles.amountOfGuestsCon}>
          <p id="maxGuestsLabel" className={styles.maxGuestsLabel}>
            How many are staying? (min 1 and max {venue.maxGuests})
          </p>
          <div className={styles.BookSectionAmountOfGuests}>
            <button className={styles.minusButton} onClick={handleRemoveGuest}>
              -
            </button>
            <p>{guestValue}</p>
            <button className={styles.plusButton} onClick={handleAddGuest}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className={styles.total}>
        <p>Total: </p>
      </div>
      <button className={styles.bookButton}>Book now</button>
    </div>
  );
}
