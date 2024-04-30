import { useState } from 'react';
import { calculateVenuePrice } from '../../js/calculateVenuePrice';
import { allDaysBetween } from '../../js/daysInbetween';
import { dateFormated } from '../../js/formatDates';
import styles from './upComingBookigsCard.module.css';
import { useUpdateTriggerStore } from '../../states/updateTriggerState';
import { bookingsURL } from '../../js/URL';
import { LoadingSpinner } from '../LoadingSpinner';
import { deleteBookingAndVenues } from '../../js/deleteBookingAndVenues';
/**
 * A component that generates individual cards displaying upcoming bookings.
 * Each card includes an image and information about the booking, along with a delete button,
 * When a user clicks the delete button,
 * the deleteBooking function is invoked to remove their booking. The component manages loading states, and if an error occurs during deletion, an error message is displayed.
 * @param {props} props
 */
export function UpComingBookingsCard(props) {
  const { profile } = props;
  const loadedBookingsArray = profile.bookings ? profile.bookings : [];
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [message, setMessage] = useState('error error error error error error');
  const [deleteOverlayKey, setDeleteOverlayKey] = useState('');
  const updateBookings = useUpdateTriggerStore((state) => state.newUpdate);
  function onExitButtonClick() {
    setMessageVisible(!messageVisible);
  }
  function onCancelClick(e) {
    const id = e.target.id;
    setDeleteOverlayKey(id);
  }
  async function onCancelReservationClick() {
    await deleteBookingAndVenues(
      bookingsURL,
      deleteOverlayKey,
      updateBookings,
      setMessage,
      setLoadingDelete,
      setMessageVisible
    );
  }
  function onGoBackBtnClick() {
    setDeleteOverlayKey('');
  }
  if (loadingDelete) {
    return (
      <div className={styles.loading}>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  } else {
    if (loadedBookingsArray.length >= 1) {
      return (
        <div className={styles.allBookingsCon}>
          <div className={messageVisible ? styles.error : styles.messageHide}>
            <div className={styles.exitBtn}>
              <button onClick={onExitButtonClick}>X</button>
            </div>
            <p>{message}</p>
          </div>
          <p className={styles.totalBookings}>
            Total bookings: {loadedBookingsArray.length}
          </p>
          {loadedBookingsArray.map((booking) => {
            const dateInbetween = allDaysBetween([
              {
                startDate: new Date(booking.dateFrom),
                endDate: new Date(booking.dateTo),
              },
            ]);
            const totalPrice = calculateVenuePrice(
              dateInbetween,
              booking.venue.price
            );
            return (
              <div className={styles.upComingBookingsCard} key={booking.id}>
                <div className={styles.upComingBookingsCardContentWrapper}>
                  <div
                    className={
                      deleteOverlayKey === booking.id
                        ? styles.deleteOverlay
                        : styles.deleteOverlayHide
                    }
                  >
                    <p>
                      You are about to cancel your reservation. Are you sure?
                    </p>
                    <div>
                      <button
                        onClick={onGoBackBtnClick}
                        className={styles.goBackBtn}
                      >
                        No, go back
                      </button>
                      <button
                        onClick={onCancelReservationClick}
                        className={styles.cancelSureBtn}
                      >
                        Yes, cancel my reservation
                      </button>
                    </div>
                  </div>
                  <div className={styles.imgCon}>
                    <img
                      src={booking.venue.media[0].url}
                      alt="venue"
                      onError={(errorEvent) => {
                        errorEvent.target.src = '../pictures/noImage.jpg';
                      }}
                    />
                  </div>
                  <div className={styles.bookingInfoAndBtnWrapper}>
                    <h3>Your reservation at: {booking.venue.name}</h3>

                    <div className={styles.bookingInfoContainer}>
                      <div className={styles.checkInCheckOutWrapper}>
                        <div className={styles.checkInCheckOut}>
                          <p>Check-In</p>
                          <p>{dateFormated(new Date(booking.dateFrom))}</p>
                        </div>
                        <div className={styles.checkInCheckOut}>
                          <p>Check-Out</p>
                          <p>{dateFormated(new Date(booking.dateTo))}</p>
                        </div>
                      </div>
                      <div className={styles.guestAndPriceWrapper}>
                        <p>Guests: {booking.guests}</p>
                        <p>Price: {booking.venue.price}$ per night</p>
                      </div>
                      <p className={styles.total}>Total price: {totalPrice}$</p>
                    </div>
                    <div className={styles.btnCon}>
                      <button
                        id={booking.id}
                        className={styles.deleteBtn}
                        onClick={onCancelClick}
                      >
                        Cancel Reservation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={styles.noBookings}>
          <h3>You have made no bookings yet</h3>
        </div>
      );
    }
  }
}
