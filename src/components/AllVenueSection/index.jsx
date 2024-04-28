import { useState } from 'react';
import { useFetchAllVenues } from '../../hooks/FetchAllVenues';
import { filteredVenues } from '../../js/filterFunctionality';
import { useFilterStore } from '../../states/filterState';
import { SearchBarAndFilterSection } from '../SearchBarAndFilterSection';
import styles from './allVenueSection.module.css';
import { ActiveFilters } from '../FiltersActive';
import { allVenuesURL } from '../../js/URL';
import { VenueCardsLandingPage } from '../VenueCardsLandingPage';
import { LoadingSpinner } from '../LoadingSpinner';
/**
Here's the corrected version:

* The VenueSection component creates the venue section. It uses the useFetchAllVenues hook to fetch data from the API.
  It then displays the content from the API in the venue section. If a user uses the search bar, a new array is made.
  It then uses either the search array or the whole array to create a new array with the filter settings and then displays this array.
  The component also handles error messages and displays loading if the loading state from the fetch hook is true.
 */
export function AllVenueSection() {
  const { venues, error, loading } = useFetchAllVenues(allVenuesURL, false);
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
        <LoadingSpinner></LoadingSpinner>
      </section>
    );
  } else if (error) {
    return (
      <section className={styles.allVenueSection}>
        <h2>Sorry an error has occured, please try again later</h2>
      </section>
    );
  } else if (!loading && !error) {
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
              <div>
                <h3>{filteredLoadedVenues.length} Venues available</h3>
                <ActiveFilters></ActiveFilters>
              </div>
            ) : (
              <div>
                <div className={styles.resultsContainer}>
                  <h3>{filteredLoadedVenues.length} Results for your search</h3>
                  <button onClick={handleBackToAllVenuesBtnClick}>
                    Back to all venues
                  </button>
                </div>
                <ActiveFilters></ActiveFilters>
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
