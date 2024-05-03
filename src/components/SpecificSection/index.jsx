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
import { BookSectionOwnVenue } from '../BookSectionOwnVenue';
import { ErrorMessageNotSpecific } from '../ErrorMessageNotSpecific';
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
  const userName = localStorage.getItem('name');
  let imageMedia = [{ url: '../pictures/noImage.jpg' }];
  if (Array.isArray(loadedVenue.media) && loadedVenue.media.length > 0) {
    imageMedia = loadedVenue.media;
  }
  console.log(loadedVenue);
  if (loading || !loadedVenue) {
    return (
      <section className={styles.specificSectionLoading}>
        <LoadingSpinner></LoadingSpinner>
      </section>
    );
  } else if (error) {
    return (
      <section className={styles.specificSection}>
        <ErrorMessageNotSpecific></ErrorMessageNotSpecific>
      </section>
    );
  } else {
    return (
      <section className={styles.specificSection}>
        <ImageCarousel
          imageArray={imageMedia}
          className={styles.imageCar}
        ></ImageCarousel>
        <VenueInfo
          venue={loadedVenue}
          owner={loadedVenueOwner}
          location={loadedLocation}
          className={styles.venueInfo}
        ></VenueInfo>
        {isloggedIn ? (
          userName !== loadedVenueOwner.name ? (
            <BookSection
              venue={loadedVenue}
              className={styles.bookSection}
              loadedBookings={loadedVenueBookigs}
            ></BookSection>
          ) : (
            <BookSectionOwnVenue></BookSectionOwnVenue>
          )
        ) : (
          <BookSectionNotLoggedIn></BookSectionNotLoggedIn>
        )}
      </section>
    );
  }
}
