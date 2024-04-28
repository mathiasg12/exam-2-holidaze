import { useParams } from 'react-router-dom';
import { useFetchAllVenues } from '../../hooks/FetchAllVenues';
import { allVenuesURL } from '../../js/URL';
import { ImageCarousel } from '../ImageCarousel';
import styles from './specificSection.module.css';
import { VenueInfo } from '../VenueInfoSection';
import { BookSection } from '../BookSection';
import { useLoggedInStore } from '../../states/loggedInState';
import { BookSectionNotLoggedIn } from '../BookSectionNotLoggedIn';
import { LoadingSpinner } from '../LoadingSpinner';
/**
 * the specific section component handles and displays errors,loading and the specific venue a user has clicked on, the component calls three other components
 */
export function SpecificSection() {
  const { id } = useParams();
  const isloggedIn = useLoggedInStore((state) => state.loggedIn);
  const { venues, error, loading } = useFetchAllVenues(
    allVenuesURL + `/${id}`,
    true
  );
  const loadedVenue = venues ? venues : {};
  const loadedVenueOwner = venues.owner ? venues.owner : {};
  const loadedVenueBookigs = venues.bookings ? venues.bookings : [];
  const loadedLocation = venues.location ? venues.location : {};
  if (loading || !loadedVenue) {
    return (
      <section className={styles.specificSectionLoading}>
        <LoadingSpinner></LoadingSpinner>
      </section>
    );
  } else if (error) {
    return (
      <section className={styles.specificSection}>
        <h2>Sorry an error has occured, please try again later</h2>
      </section>
    );
  } else {
    return (
      <section className={styles.specificSection}>
        <ImageCarousel
          imageArray={loadedVenue.media}
          className={styles.imageCar}
        ></ImageCarousel>
        <VenueInfo
          venue={loadedVenue}
          owner={loadedVenueOwner}
          location={loadedLocation}
          className={styles.venueInfo}
        ></VenueInfo>
        {isloggedIn ? (
          <BookSection
            venue={loadedVenue}
            className={styles.bookSection}
            loadedBookings={loadedVenueBookigs}
          ></BookSection>
        ) : (
          <BookSectionNotLoggedIn></BookSectionNotLoggedIn>
        )}
      </section>
    );
  }
}
