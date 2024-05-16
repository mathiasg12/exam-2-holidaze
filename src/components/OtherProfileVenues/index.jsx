import { useFetchVenuesByProfile } from '../../hooks/FetchVenuesByProfile';
import { profileURL } from '../../js/URL';
import { ErrorMessageNotSpecific } from '../ErrorMessageNotSpecific';
import { LoadingSpinner } from '../LoadingSpinner';
import { VenueCard } from '../VenueCard';
import styles from './otherProfileVenues.module.css';
/**
 * component that creates the section that displays other users venues on their profile page, calls the VenueCard component to display each venue
 * @param {props} props
 */
export function OtherProfileVenues(props) {
  const { name } = props;
  const { error, loading, venues } = useFetchVenuesByProfile(profileURL, name);
  const loadedVenues = venues ? venues : [];
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  } else if (error) {
    return <ErrorMessageNotSpecific></ErrorMessageNotSpecific>;
  } else {
    if (loadedVenues.length < 1) {
      return (
        <div>
          <h2 className={styles.myVenueHeading}>{name}' venues</h2>
          <h3 className={styles.noVenues}>
            They have no active venues published yet
          </h3>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h2 className={styles.myVenueHeading}>{name}' venues</h2>
          </div>
          <div className={styles.myVenuesContainer}>
            {loadedVenues.map((venue) => {
              let image = '../pictures/noImage.jpg';
              if (venue.media !== undefined && venue.media.length >= 1) {
                image = venue.media[0].url;
              }
              return <VenueCard image={image} venueObject={venue}></VenueCard>;
            })}
          </div>
        </div>
      );
    }
  }
}
