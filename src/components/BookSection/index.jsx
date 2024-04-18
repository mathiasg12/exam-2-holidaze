import { useState } from 'react';
import styles from './bookSection.module.css';
export function BookSection(props) {
  const { venue } = props;
  const [guestValue, setGuestValue] = useState(1);
  function handleChangeGuests(change) {
    let changeValue = change.target.value;
    document.getElementById(
      'amountOfGuests'
    ).innerText = `Amount of guests (max ${venue.maxGuests})`;
    if (changeValue <= venue.maxGuests) {
      setGuestValue(change.target.value);
    } else {
      if (parseFloat(changeValue) <= 0) {
        document.getElementById(
          'amountOfGuests'
        ).innerText = `Please add atleast 1 guest`;
        document.getElementById('guestInput').value = 1;
        setGuestValue(1);
      } else {
        setGuestValue(1);
        document.getElementById(
          'amountOfGuests'
        ).innerText = `Max ${venue.maxGuests} guests`;
        document.getElementById('guestInput').value = 1;
      }
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
        <div className={styles.BookSectionAmountOfGuests}>
          <label htmlFor="amountOfGuests" id="amountOfGuests">
            Amount of guests (max {venue.maxGuests})
          </label>
          <input
            name="amountOfGuests"
            type="number"
            className={styles.guests}
            placeholder="1"
            onChange={handleChangeGuests}
            id="guestInput"
          ></input>
        </div>
      </div>
      <div className={styles.total}>
        <p>Total: </p>
      </div>
      <button className={styles.bookButton}>Book now</button>
    </div>
  );
}
