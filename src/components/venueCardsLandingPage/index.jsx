import styles from './venueCardLandingPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MoreBtn } from '../MoreBtn';
import { useEffect, useState } from 'react';
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
      console.log(pageNr);
      setPageNr((previousPageNr) => previousPageNr + 1);
    } else {
      setEndReached(true);
    }
  }
  return (
    <div className={styles.venueAndBtnCon}>
      <div className={styles.venueCardSection}>
        {currentPage.map((venueObject) => (
          <Link
            to={`venueSpecific/${venueObject.id}`}
            className={styles.venueCard}
            key={venueObject.id}
          >
            <div className={styles.imgCon}>
              <img
                src={venueObject.media[0].url}
                alt="venue"
                onError={(errorEvent) => {
                  errorEvent.target.src = '../pictures/noImage.jpg';
                }}
              />
            </div>
            <h3>{venueObject.name}</h3>
            <div className={styles.included}>
              {venueObject.meta.breakfast && (
                <p className={styles.breakfast}>Breakfast</p>
              )}
              {venueObject.meta.pets && <p className={styles.pets}>Pets</p>}
              {venueObject.meta.parking && (
                <p className={styles.parking}>Parking</p>
              )}
              {venueObject.meta.wifi && <p className={styles.wifi}>Wifi</p>}
            </div>
            <div className={styles.loactionContainer}>
              <p>
                {venueObject.location.address
                  ? venueObject.location.address + ','
                  : 'unknown,'}
              </p>
              <p>
                {venueObject.location.city
                  ? venueObject.location.city
                  : ' unknown'}
              </p>
            </div>
            <div>
              <p>
                {venueObject.rating}/5
                <FontAwesomeIcon icon={faStar} />
              </p>
            </div>
            <div className={styles.priceCon}>
              <p className={styles.price}>{venueObject.price}$</p>
              <p>per night</p>
            </div>
          </Link>
        ))}
      </div>
      <MoreBtn onClick={handleLoadBtn} endReached={endReached}></MoreBtn>
    </div>
  );
}
