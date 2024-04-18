import styles from './venueInfoSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPerson } from '@fortawesome/free-solid-svg-icons';
export function VenueInfo(props) {
  const { venue, owner, location } = props;
  const metaObject = venue.meta ? venue.meta : {};
  const metaArray = Object.entries(metaObject);
  const filterMetaArray = metaArray
    .filter(([key, value]) => value === true)
    .map(([key]) => key);
  return (
    <div className={styles.venueInfoCon}>
      <h1>{venue.name}</h1>
      <div>
        <p>
          {venue.rating}/5
          <FontAwesomeIcon icon={faStar} />
        </p>
      </div>
      <div className={styles.loactionAndOwnerCon}>
        <div className={styles.locationCon}>
          <p>Location:</p>
          <p className={styles.locationAddress}>
            {location.address}, {location.city}
          </p>
        </div>
        <div className={styles.venueManagerCon}>
          <p>Venue manager:</p>
          <p className={styles.venueManager}> {owner.name}</p>
        </div>
      </div>
      <div className={styles.descCon}>
        <p>{venue.description}</p>
      </div>
      <div className={styles.includesCon}>
        <h3>Includes</h3>
        <ul>
          {filterMetaArray.map((eachMeta) => (
            <li>{eachMeta}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>
          maximum amount of guests: {venue.maxGuests}
          <FontAwesomeIcon icon={faPerson} size="lg" />
        </p>
      </div>
      <h3>Price per night: {venue.price}$</h3>
    </div>
  );
}
