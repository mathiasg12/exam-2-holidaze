import styles from './venueInfoSection.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPerson } from '@fortawesome/free-solid-svg-icons';
import { ListItems } from '../ListItemsFromArray';
import { capText } from '../../js/capText';
import { Link } from 'react-router-dom';
import { useLoggedInStore } from '../../states/loggedInState';
/**
 * function that returns a component which containts the information section about the venue.
 * @param {props} props
 */
export function VenueInfo(props) {
  const { venue, owner, location } = props;
  const metaObject = venue.meta ? venue.meta : {};
  const metaArray = Object.entries(metaObject);
  const loadedOwnerAvatar = owner.avatar ? owner.avatar : '';
  const userName = owner.name;
  let isLoggedIn = useLoggedInStore((state) => state.loggedIn);
  let profileImage = '../pictures/noImage.jpg';
  if (loadedOwnerAvatar !== undefined) {
    profileImage = loadedOwnerAvatar.url;
  }
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
      <div className={styles.loactionCon}>
        <div className={styles.locationAddress}>
          <h3 className={styles.locationH3}>Location</h3>
          <div className={styles.locationContent}>
            <p className={styles.boldP}>Address:</p>
            <p>{location.address}</p>
          </div>
          <div className={styles.locationContent}>
            <p className={styles.boldP}>City:</p>
            <p>{location.city}</p>
          </div>
          <div className={styles.locationContent}>
            <p className={styles.boldP}>Country:</p>
            <p>{location.country}</p>
          </div>
        </div>
      </div>
      <div className={styles.ownerCon}>
        <h3 className={styles.venueManagerH3}>Venue Manager</h3>
        <div className={styles.avatarCon}>
          <img
            src={profileImage}
            alt="profile avatar"
            onError={(errorEvent) => {
              errorEvent.target.src = '../pictures/noImage.jpg';
            }}
          />
        </div>
        <div className={styles.venueManagerContent}>
          <p className={styles.boldP}>Name:</p>
          <p> {owner.name}</p>
        </div>
        <div className={styles.venueManagerContent}>
          <p className={styles.boldP}>Email:</p>
          <p> {owner.email}</p>
        </div>
        {isLoggedIn ? (
          <Link
            to={`/profile/${userName}`}
            className={commonStyles.smallButtonLinkYellow}
          >
            See Profile
          </Link>
        ) : (
          <div className={styles.loginToSeeProfileCon}>
            <p>You need to login to see their profile</p>
            <Link
              to={`/login`}
              className={`${commonStyles.smallButtonLinkYellow} ${commonStyles.noMarginTop}`}
            >
              Login
            </Link>
          </div>
        )}
      </div>

      <div className={styles.descCon}>
        <h3>Description</h3>
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
        <p className={styles.maxGuests}>
          Maximum amount of guests: {venue.maxGuests}
          <FontAwesomeIcon icon={faPerson} size="lg" />
        </p>
      </div>
      <h3>Price per night: {venue.price}$</h3>
    </div>
  );
}
