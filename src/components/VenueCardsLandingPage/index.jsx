import styles from './venueCardLanding.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPerson } from '@fortawesome/free-solid-svg-icons';
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
              <Link
                key={venueObject.id}
                to={`specific/${venueObject.id}`}
                className={styles.venueCard}
              >
                <div className={styles.imgCon}>
                  <img
                    src={image}
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
                <div className={styles.starAndPersonContainer}>
                  <div className={styles.starCon}>
                    <p>
                      {venueObject.rating}/5
                      <FontAwesomeIcon icon={faStar} className={styles.star} />
                    </p>
                  </div>
                  <div className={styles.personCon}>
                    <p>
                      {venueObject.maxGuests}
                      <FontAwesomeIcon
                        icon={faPerson}
                        size="lg"
                        className={styles.person}
                      />
                    </p>
                  </div>
                </div>
                <div className={styles.priceCon}>
                  <p className={styles.price}>{venueObject.price}$</p>
                  <p>per night</p>
                </div>
              </Link>
            );
          })}
        </div>
        <MoreBtn onClick={handleLoadBtn} endReached={endReached}></MoreBtn>
      </div>
    );
  }
}
