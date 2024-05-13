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
 * The specific section component receives an error state, a loading state,
 * and the specific venue a user has clicked on as props and displays this to the user. The component calls three other components.
 */
export function SpecificSection(props) {
  const { venues, error, loading } = props;
  const isloggedIn = useLoggedInStore((state) => state.loggedIn);
  const loadedVenue = venues ? venues : {};
  const loadedVenueOwner = venues.owner ? venues.owner : {};
  const loadedVenueBookigs = venues.bookings ? venues.bookings : [];
  const loadedLocation = venues.location ? venues.location : {};
  const userName = localStorage.getItem('name');
  let imageMedia = [{ url: '../pictures/noImage.jpg' }];
  if (Array.isArray(loadedVenue.media) && loadedVenue.media.length > 0) {
    imageMedia = loadedVenue.media;
  }
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
