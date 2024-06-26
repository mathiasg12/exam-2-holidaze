import { useEffect, useState } from 'react';
import styles from './venueManagerSection.module.css';
import { RentOutVenueForm } from '../RentOutVenueForm';
import { MyVenues } from '../MyVenues';
import { BookingsOnMyVenues } from '../BookingsOnMyVenues';
import { profileURL } from '../../js/URL';
import { useUpdateTriggerStore } from '../../states/updateTriggerState';
import { UpComingBookingsSection } from '../UpComingBookingsSection';
import { useFetchVenuesByProfile } from '../../hooks/FetchVenuesByProfile';
/**
 * component that creates the venue manager section, this component includes a menu where the manager can choose between three different admin sections.
 */
export function VenueManagerSection(props) {
  const { profile, name } = props;
  const [activeMenuItem, setActiveMenuItem] = useState('myVenues');
  const { error, loading, venues } = useFetchVenuesByProfile(profileURL, name);
  const update = useUpdateTriggerStore((state) => state.newUpdate);
  function handleClick(click) {
    const id = click.target.id;
    setActiveMenuItem(id);
  }
  useEffect(() => {
    if (activeMenuItem === 'myVenues') {
      update();
    }
  }, [activeMenuItem]);
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
          <button
            onClick={handleClick}
            className={
              activeMenuItem === 'myBookings'
                ? styles.managerMenuButtonActive
                : styles.managerMenuButton
            }
            id="myBookings"
          >
            My bookings
          </button>
        </div>
      </div>
      <div
        className={
          activeMenuItem === 'rentOut' ? styles.displayDiv : styles.divHide
        }
      >
        <RentOutVenueForm
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        ></RentOutVenueForm>
      </div>
      <div
        className={
          activeMenuItem === 'myVenues' ? styles.displayDiv : styles.divHide
        }
      >
        <MyVenues
          activeMenuItem={activeMenuItem}
          error={error}
          loading={loading}
          venues={venues}
        ></MyVenues>
      </div>
      <div
        className={
          activeMenuItem === 'bookingsOnMyVenues'
            ? styles.displayDiv
            : styles.divHide
        }
      >
        <BookingsOnMyVenues
          error={error}
          loading={loading}
          venues={venues}
        ></BookingsOnMyVenues>
      </div>
      <div>
        <div
          className={
            activeMenuItem === 'myBookings' ? styles.displayDiv : styles.divHide
          }
        >
          <UpComingBookingsSection
            profile={profile}
            error={error}
          ></UpComingBookingsSection>
        </div>
      </div>
    </section>
  );
}
