import styles from './venueInfoSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPerson } from '@fortawesome/free-solid-svg-icons';
import { ListItems } from '../ListItemsFromArray';
import { capText } from '../../js/capText';
/**
 * function that returns a component which containts the information section about the venue, the compoent
 * @param {props} props
 */
export function VenueInfo(props) {
  const { venue, owner, location } = props;
  const metaObject = venue.meta ? venue.meta : {};
  const metaArray = Object.entries(metaObject);
  const filterMetaArray = metaArray
    .filter(([key, value]) => value === true)
    .map(([key]) => key);
  return (
    <div className={styles.venueInfoCon}>
      <h1>{capText(venue.name, 30)}</h1>
      <div>
        <p>
          {venue.rating}/5
          <FontAwesomeIcon icon={faStar} />
        </p>
      </div>
      <div className={styles.loactionAndOwnerCon}>
        <p className={styles.locationAddress}>
          Location: {location.address}, {location.city}, {location.country}
        </p>
        <p className={styles.venueManager}>Venue manager: {owner.name}</p>
      </div>
      <div className={styles.descCon}>
        <p>{venue.description}</p>
      </div>
      <div className={styles.includesCon}>
        <h3>Includes</h3>
        <ul>
          {filterMetaArray.map((eachMeta) => (
            <ListItems value={eachMeta} key={eachMeta}></ListItems>
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
