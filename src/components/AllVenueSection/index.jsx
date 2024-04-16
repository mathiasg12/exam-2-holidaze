import { useFetchAllVenues } from '../../hooks/FetchAllVenues';
import { filteredVenues } from '../../js/filterFunctionality';
import { useFilterStore } from '../../states/filterState';
import { SearchBarAndFilterSection } from '../SearchBarAndFilterSection';
import { VenueCardsLandingPage } from '../venueCardsLandingPage';
import styles from './allVenueSection.module.css';
export function AllVenueSection() {
  const { venues, error, loading } = useFetchAllVenues(
    'https://v2.api.noroff.dev/holidaze/venues'
  );
  const filterValues = useFilterStore((state) => state.metaArray);
  const maxGuests = useFilterStore((state) => state.maxGuests);
  console.log(maxGuests);
  const loadedVenues = venues && venues ? venues : [];
  const filteredLoadedVenues = filteredVenues(
    loadedVenues,
    filterValues,
    maxGuests
  );
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
          arrayOfVenues={filteredLoadedVenues}
        ></VenueCardsLandingPage>
      </section>
    );
  }
}
