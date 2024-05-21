import styles from './bookingsOnMyVenues.module.css';
import { ErrorMessageNotSpecific } from '../ErrorMessageNotSpecific';
import { LoadingSpinner } from '../LoadingSpinner';
import { dateFormated } from '../../js/formatDates';
import { capText } from '../../js/capText';
/**
 * Component that creates the section for bookings on user's venues.
 * This includes an error message if something goes wrong, a loading spinner if the section is loading,
 * and the "Bookings on My Venue" section. If there are no bookings on a user's venue,
 * this message will show up instead: "There are currently no bookings on your venues yet." Otherwise, the bookings will be displayed in this section.
 * @param {props} props
 */
export function BookingsOnMyVenues(props) {
  const { error, loading, venues } = props;
  const loadedVenue = venues ? venues : {};
  const loadedBookings = venues.map((venue) => venue.bookings).flat();
  if (error) {
    return <ErrorMessageNotSpecific></ErrorMessageNotSpecific>;
  } else if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  } else {
    if (loadedVenue.length < 1) {
      return (
        <div>
          <div className={styles.headingSection}>
            <h2>Bookings on my venues</h2>
          </div>
          <h3 className={styles.noBookings}>
            There are currently no bookings on your venues yet
          </h3>
        </div>
      );
    } else {
      if (loadedBookings.length > 0) {
        return (
          <div>
            <div className={styles.headingSection}>
              <h2>Bookings on my venues</h2>
              <p>
                Is a venue missing from this list? That means there are
                currently no bookings for that venue
              </p>
            </div>
            {loadedVenue.map(
              (venue) =>
                venue.bookings.length > 0 && (
                  <div
                    key={venue.id}
                    className={styles.bookingsOnVenueContainer}
                  >
                    <div className={styles.headingEachCard}>
                      <p>Bookings on your venue:</p>
                      <p className={styles.venueName}>
                        {capText(venue.name, 30)}
                      </p>
                    </div>
                    {venue.bookings.map((booking) => (
                      <div className={styles.bookingCard} key={booking.id}>
                        <div>
                          <h4>Dates</h4>
                          <p>
                            Date from:{dateFormated(new Date(booking.dateFrom))}
                          </p>
                          <p>
                            Date to: {dateFormated(new Date(booking.dateTo))}
                          </p>
                        </div>
                        <div className={styles.customerDiv}>
                          <h4>Customer</h4>
                          <p>Name: {booking.customer.name}</p>
                          <p>Email: {booking.customer.email}</p>
                          <p>Guests staying: {booking.guests} </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        );
      } else {
        return (
          <div>
            <div className={styles.headingSection}>
              <h2>Bookings on my venues</h2>
            </div>
            <h3 className={styles.noBookings}>
              There are currently no bookings on your venues yet
            </h3>
          </div>
        );
      }
    }
  }
}
