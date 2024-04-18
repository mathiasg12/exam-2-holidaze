import { useParams } from 'react-router-dom';
import { useFetchAllVenues } from '../../hooks/FetchAllVenues';
import { allVenuesURL } from '../../js/URL';
import { ImageCarousel } from '../ImageCarousel';
import styles from './specificSection.module.css';
import { VenueInfo } from '../VenueInfoSection';

export function SpecificSection() {
  const { id } = useParams();
  const { venues, error, loading } = useFetchAllVenues(
    allVenuesURL + `/${id}`,
    true
  );
  const loadedVenue = venues ? venues : {};
  const loadedVenueOwner = venues.owner ? venues.owner : {};
  const loadedLocation = venues.location ? venues.location : {};
  if (loading || !loadedVenue) {
    return (
      <section className={styles.specificSection}>
        <div>Loading...</div>
      </section>
    );
  } else if (error) {
    return (
      <section className={styles.specificSection}>
        <h2>Sorry an error has occured, please try again later</h2>
      </section>
    );
  } else {
    console.log(loadedVenue);
    return (
      <section className={styles.specificSection}>
        <ImageCarousel imageArray={loadedVenue.media}></ImageCarousel>
        <VenueInfo
          venue={loadedVenue}
          owner={loadedVenueOwner}
          location={loadedLocation}
        ></VenueInfo>
      </section>
    );
  }
}
