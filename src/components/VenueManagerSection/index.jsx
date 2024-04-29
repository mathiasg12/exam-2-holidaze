import { useState } from 'react';
import styles from './venueManagerSection.module.css';
import { RentOutVenueForm } from '../RentOutVenueForm';
export function VenueManagerSection() {
  const [activeMenuItem, setActiveMenuItem] = useState('bookingsOnMyVenues');
  function handleClick(click) {
    const id = click.target.id;
    setActiveMenuItem(id);
  }
  return (
    <section>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonWrapper}>
          <button
            onClick={handleClick}
            className={
              activeMenuItem === 'bookingsOnMyVenues'
                ? styles.managerMenuButtonActive
                : styles.managerMenuButton
            }
            id="bookingsOnMyVenues"
          >
            Bookings on my Venues
          </button>
          <button
            className={
              activeMenuItem === 'myVenues'
                ? styles.managerMenuButtonActive
                : styles.managerMenuButton
            }
            onClick={handleClick}
            id="myVenues"
          >
            My venues
          </button>
          <button
            onClick={handleClick}
            className={
              activeMenuItem === 'rentOut'
                ? styles.managerMenuButtonActive
                : styles.managerMenuButton
            }
            id="rentOut"
          >
            Rent out a venue
          </button>
        </div>
      </div>
      <div
        className={
          activeMenuItem === 'rentOut' ? styles.displayDiv : styles.divHide
        }
      >
        <RentOutVenueForm></RentOutVenueForm>
      </div>
    </section>
  );
}
