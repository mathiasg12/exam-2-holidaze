import { useState } from 'react';
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
  const loadedVenues = venues && venues ? venues : [];
  const [searched, setSearched] = useState(false);
  const [searchedArray, setSearchedArray] = useState([]);
  let filteredLoadedVenues = [];
  if (searched) {
    filteredLoadedVenues = filteredVenues(
      searchedArray,
      filterValues,
      maxGuests
    );
  } else {
    filteredLoadedVenues = filteredVenues(
      loadedVenues,
      filterValues,
      maxGuests
    );
  }
  function handleBackToAllVenuesBtnClick() {
    setSearched(false);
    document.getElementById('searchBar').value = '';
  }
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
          arrayToSearch={loadedVenues}
          setSearched={setSearched}
          searched={searched}
          setSearchedArray={setSearchedArray}
        ></SearchBarAndFilterSection>
        <div>
          <div className={styles.availableVenues}>
            {!searched ? (
              <h3>{filteredLoadedVenues.length} Venues available</h3>
            ) : (
              <div className={styles.resultsContainer}>
                <h3>{filteredLoadedVenues.length} Results for your search</h3>
                <button onClick={handleBackToAllVenuesBtnClick}>
                  Back to all venues
                </button>
              </div>
            )}
          </div>
          <VenueCardsLandingPage
            className={styles.venues}
            arrayOfVenues={filteredLoadedVenues}
          ></VenueCardsLandingPage>
        </div>
      </section>
    );
  }
}
