import { Link } from 'react-router-dom';
import { capText } from '../../js/capText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPerson } from '@fortawesome/free-solid-svg-icons';
import styles from './venueCard.module.css';
/**
 * component that creates the venue card link, the cards uses two props, the venueObject itself and the image that is used on the card
 * @param {props} props
 */
export function VenueCard(props) {
  const { venueObject, image } = props;
  return (
    <Link
      key={venueObject.id}
      to={`/specific/${venueObject.id}`}
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
      <h3>{capText(venueObject.name, 30)}</h3>
      <div className={styles.included}>
        {venueObject.meta.breakfast && (
          <p className={styles.breakfast}>Breakfast</p>
        )}
        {venueObject.meta.pets && <p className={styles.pets}>Pets</p>}
        {venueObject.meta.parking && <p className={styles.parking}>Parking</p>}
        {venueObject.meta.wifi && <p className={styles.wifi}>Wifi</p>}
      </div>
      <div className={styles.loactionContainer}>
        <p className={styles.locationP}>
          {venueObject.location.city
            ? capText(venueObject.location.city, 60) + ','
            : ' unknown, '}
        </p>
        <p className={styles.locationP}>
          {venueObject.location.country
            ? capText(venueObject.location.country, 60)
            : 'unknown'}
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
}
