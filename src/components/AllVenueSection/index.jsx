import { useFetchAllVenues } from '../../hooks/FetchAllVenues';
import { SearchBarAndFilterSection } from '../SearchBarAndFilterSection';
import { VenueCardsLandingPage } from '../venueCardsLandingPage';
import styles from './allVenueSection.module.css';
export function AllVenueSection() {
  const { venues, error, loading } = useFetchAllVenues(
    'https://v2.api.noroff.dev/holidaze/venues'
  );
  const loadedVenues = venues && venues.data ? venues.data : [];
  console.log(loadedVenues);
  if (loading || !loadedVenues) {
    return (
      <section className={styles.allVenueSection}>
        <div>Loading...</div>
      </section>
    );
  } else if (error) {
    return (
      <section className={styles.allVenueSection}>
        <h2>Sorry an error has occured, please try again later</h2>
      </section>
    );
  } else if (!loading) {
    return (
      <section className={styles.allVenueSection}>
        <h2>Venues</h2>
        <SearchBarAndFilterSection
          className={styles.searchAndFilter}
        ></SearchBarAndFilterSection>
        <VenueCardsLandingPage
          className={styles.venues}
          arrayOfVenues={loadedVenues}
        ></VenueCardsLandingPage>
      </section>
    );
  }
}
