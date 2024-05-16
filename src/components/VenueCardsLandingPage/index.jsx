import styles from './venueCardLanding.module.css';
import { MoreBtn } from '../MoreBtn';
import { useEffect, useState } from 'react';
import { VenueCard } from '../VenueCard';
/**
 * component that displays the venue cards, the component also deals with pagination, and uses an useEffect to restet the page to 1 if the array changes
 * @param {array} props
 */
export function VenueCardsLandingPage(props) {
  const { arrayOfVenues } = props;
  const [pageNr, setPageNr] = useState(1);
  const [endReached, setEndReached] = useState(false);
  const venuesPerPage = 12;
  const startVenue = 0;
  const endVenue = pageNr * venuesPerPage;
  const currentPage = arrayOfVenues.slice(startVenue, endVenue);
  useEffect(() => {
    setEndReached(false);
    setPageNr(1);
  }, [arrayOfVenues]);
  function handleLoadBtn() {
    if (arrayOfVenues[endVenue]) {
      setPageNr((previousPageNr) => previousPageNr + 1);
    } else {
      setEndReached(true);
    }
  }
  if (arrayOfVenues.length < 1) {
    return (
      <div className={styles.noResults}>
        <h3>No results</h3>
      </div>
    );
  } else {
    return (
      <div className={styles.venueAndBtnCon}>
        <div className={styles.venueCardSection}>
          {currentPage.map((venueObject) => {
            let image = '../pictures/noImage.jpg';
            if (
              venueObject.media !== undefined &&
              venueObject.media.length >= 1
            ) {
              image = venueObject.media[0].url;
            }
            return (
              <VenueCard image={image} venueObject={venueObject}></VenueCard>
            );
          })}
        </div>
        <MoreBtn onClick={handleLoadBtn} endReached={endReached}></MoreBtn>
      </div>
    );
  }
}
