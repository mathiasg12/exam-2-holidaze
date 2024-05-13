import { useEffect, useState } from 'react';
import styles from './bookSection.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { allDaysBetween } from '../../js/daysInbetween';
import { calculateVenuePrice } from '../../js/calculateVenuePrice';
import { createBookingObject } from '../../js/createBookingObject';
import { handleRemoveGuest, handleAddGuest } from '../../js/addAndRemoveGuest';
import { bookVenue } from '../../js/bookVenueFunctionality';
import { bookingsURL } from '../../js/URL';
import { BookingSuccess } from '../BookingSuccess';
import { LoadingSpinner } from '../LoadingSpinner';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [checkInError, setCheckInError] = useState(false);
  const [checkOutError, setCheckOutError] = useState(false);
  const [total, setTotal] = useState('Total:');
  const [maxGuestLabelContent, setMaxGuestsLabelContent] = useState(
    ` How many are staying? (min 1 and max ${venue.maxGuests})`
  );
  const exludedDatesArray = allDaysBetween(bookedDates);
  const checkInOrOutErrorMsg = 'Please select a valid date';
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
  function removeErrorMessage() {
    setMessage('');
    setError(false);
  }
  useEffect(() => {
    if (checkIn && checkOut !== null && checkOut > checkIn) {
      const stayPeriode = allDaysBetween([
        { startDate: checkIn, endDate: checkOut },
      ]);
      const total = calculateVenuePrice(stayPeriode, venue.price);
      setTotal(`Total: ${total}$`);
    } else {
      setTotal('Total:');
    }
  }, [checkIn, checkOut]);
  async function handleBookVenue() {
    if (checkIn === null) {
      setCheckInError(true);
      setCheckOutError(false);
    } else if (checkOut === null) {
      setCheckInError(false);
      setCheckOutError(true);
    } else if (checkOut < checkIn) {
      setCheckOutError(true);
      setError(true);
      setMessage('Check-out needs to be after check-in');
    } else {
      const object = createBookingObject(
        checkIn,
        checkOut,
        guestValue,
        venue.id
      );
      await bookVenue(
        bookingsURL,
        object,
        setError,
        setLoading,
        setMessage,
        setSuccess
      );
      setCheckInError(false);
      setCheckOutError(false);
      setCheckIn(null);
      setCheckOut(null);
    }
  }
  if (loading) {
    return (
      <div className={styles.bookSection}>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  } else {
    return (
      <div className={styles.bookSection}>
        <h2>Look for available dates and book</h2>
        <h3 className={!error ? styles.message : commonStyles.errorMsg}>
          {message}
        </h3>
        <div
          className={
            !success ? styles.hideSuccessOverlay : styles.successOverlay
          }
        >
          <BookingSuccess setSuccess={setSuccess}></BookingSuccess>
        </div>
        <div className={styles.AllInputWrapper}>
          <div className={styles.BookSectionInputCon}>
            <p>Pick an available date (faded dates are unavailable)</p>
            <div className={styles.calendars}>
              <div className={styles.calendarCon}>
                <p
                  id="checkIn"
                  className={
                    !checkInError
                      ? styles.CheckInAndOut
                      : styles.errorCheckInAndOut
                  }
                >
                  {!checkInError ? 'Check-in' : checkInOrOutErrorMsg}
                </p>
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => {
                    setCheckIn(date);
                    removeErrorMessage();
                    setCheckInError(false);
                  }}
                  minDate={new Date()}
                  placeholderText="click to choose check-in"
                  excludeDates={exludedDatesArray}
                  className={
                    !checkInError
                      ? styles.datePicker
                      : ` ${styles.datePicker} ${styles.datePickerError}`
                  }
                ></DatePicker>
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.arrow}
                role="button"
                type="button"
              />
              <div className={styles.calendarCon}>
                <p
                  id="checkOut"
                  className={
                    !checkOutError
                      ? styles.CheckInAndOut
                      : styles.errorCheckInAndOut
                  }
                >
                  {!checkOutError ? 'Check-Out' : checkInOrOutErrorMsg}
                </p>
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => {
                    setCheckOut(date);
                    removeErrorMessage();
                    setCheckOutError(false);
                  }}
                  minDate={earliestCheckoutDate}
                  placeholderText="click to choose check-out"
                  excludeDates={exludedDatesArray}
                  className={
                    !checkOutError ? styles.datePicker : styles.datePickerError
                  }
                ></DatePicker>
              </div>
            </div>
          </div>
          <div className={styles.amountOfGuestsCon}>
            <p className={styles.maxGuestsLabel}>{maxGuestLabelContent}</p>
            <div className={styles.BookSectionAmountOfGuests}>
              <button
                className={styles.minusButton}
                onClick={() =>
                  handleRemoveGuest(
                    guestValue,
                    setGuestValue,
                    venue,
                    setMaxGuestsLabelContent
                  )
                }
              >
                -
              </button>
              <p>{guestValue}</p>
              <button
                className={styles.plusButton}
                onClick={() =>
                  handleAddGuest(
                    guestValue,
                    setGuestValue,
                    venue,
                    setMaxGuestsLabelContent
                  )
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <h3 id="total" className={styles.total}>
            {total}
          </h3>
        </div>
        <button
          className={commonStyles.smallButtonYellow}
          onClick={handleBookVenue}
          disabled={success}
        >
          Book now
        </button>
      </div>
    );
  }
}
