import { useEffect, useState } from 'react';
import styles from './bookSection.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { allDaysBetween } from '../../js/daysInbetween';
/**
 * component that creates the book section, this section allows users to add amount of guests, choose dates and book a venue
 * @param {props} props
 */
export function BookSection(props) {
  const { venue, loadedBookings } = props;
  const [guestValue, setGuestValue] = useState(1);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [earliestCheckoutDate, setEarliestCheckoutDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  console.log(loadedBookings);
  const exludedDatesArray = allDaysBetween(bookedDates);
  console.log('ex', exludedDatesArray);
  useEffect(() => {
    const allBookedDates = loadedBookings.map((dates) => ({
      startDate: new Date(dates.dateFrom),
      endDate: new Date(dates.dateTo),
    }));
    setBookedDates(allBookedDates);
  }, [loadedBookings]);
  useEffect(() => {
    if (checkIn) {
      const nextDay = new Date(checkIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setEarliestCheckoutDate(nextDay);
    }
  }, [checkIn]);
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
          <p>Pick an available date (faded dates are unavailable)</p>
          <div className={styles.calendars}>
            <div className={styles.calendarCon}>
              <p>Check-In</p>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()}
                placeholderText="click to choose check-in"
                excludeDates={exludedDatesArray}
              ></DatePicker>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={styles.arrow}
              role="button"
              type="button"
            />
            <div className={styles.calendarCon}>
              <p>Check-Out</p>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                minDate={earliestCheckoutDate}
                placeholderText="click to choose check-out"
                excludeDates={exludedDatesArray}
              ></DatePicker>
            </div>
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
