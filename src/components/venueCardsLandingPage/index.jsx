import styles from './venueCardLandingPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export function VenueCardsLandingPage(props) {
  const { arrayOfVenues } = props;
  return (
    <div className={styles.venueCardSection}>
      {arrayOfVenues.map((venueObject) => (
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
  );
}
