import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingSpinner } from '../LoadingSpinner';
import styles from './myVenues.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { EditVenue } from '../EdtiVenue';
import { ErrorMessageNotSpecific } from '../ErrorMessageNotSpecific';
import { useUpdateTriggerStore } from '../../states/updateTriggerState';
import { Link } from 'react-router-dom';
import { capText } from '../../js/capText';
/**
 * the MyVenues component displays a users active venues, the component handles erors, loading and the venue cards that are displayed to the user
 * @param {props} props
 */
export function MyVenues(props) {
  const { activeMenuItem, error, loading, venues } = props;
  const [edit, setEdit] = useState(false);
  const [indexOfEditVenue, setIndexOfEditVenue] = useState(0);
  const loadedVenues = venues ? venues : [];
  const update = useUpdateTriggerStore((state) => state.newUpdate);
  console.log(loadedVenues);
  function handleEditBtnClick(e) {
    const id = e.target.id;
    setIndexOfEditVenue(loadedVenues.findIndex((venue) => venue.id === id));
    setEdit(!edit);
  }
  useEffect(() => {
    if (activeMenuItem !== 'myVenues') {
      setEdit(false);
    }
  }, [activeMenuItem]);
  useEffect(() => {
    if (!edit) {
      update();
    }
  }, [edit]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  } else if (error) {
    return <ErrorMessageNotSpecific></ErrorMessageNotSpecific>;
  } else {
    if (loadedVenues.length < 1) {
      return (
        <div>
          <h3 className={styles.noVenues}>
            You have no active venues published yet
          </h3>
        </div>
      );
    } else {
      if (edit) {
        return (
          <EditVenue
            loadedVenues={loadedVenues}
            indexOfEditVenue={indexOfEditVenue}
            setEdit={setEdit}
            activeMenuItem={activeMenuItem}
          ></EditVenue>
        );
      } else {
        return (
          <div>
            <h2 className={styles.myVenueHeading}>My venues</h2>
            <div className={styles.MyVenuesContainer}>
              {loadedVenues.map((venue) => {
                let image = '../pictures/noImage.jpg';
                if (venue.media !== undefined && venue.media.length >= 1) {
                  image = venue.media[0].url;
                }
                return (
                  <div key={venue.id} className={styles.venueCard}>
                    <div className={styles.imgCon}>
                      <img
                        src={image}
                        alt="venue"
                        onError={(errorEvent) => {
                          errorEvent.target.src = '../pictures/noImage.jpg';
                        }}
                      />
                    </div>
                    <h3>{capText(venue.name, 30)}</h3>
                    <div className={styles.included}>
                      {venue.meta.breakfast && (
                        <p className={styles.breakfast}>Breakfast</p>
                      )}
                      {venue.meta.pets && <p className={styles.pets}>Pets</p>}
                      {venue.meta.parking && (
                        <p className={styles.parking}>Parking</p>
                      )}
                      {venue.meta.wifi && <p className={styles.wifi}>Wifi</p>}
                    </div>
                    <div className={styles.loactionContainer}>
                      <p>
                        {venue.location.address
                          ? venue.location.address + ','
                          : 'unknown,'}
                      </p>
                      <p>
                        {venue.location.country
                          ? venue.location.country
                          : ' unknown'}
                      </p>
                    </div>
                    <div className={styles.starAndPersonContainer}>
                      <div className={styles.personCon}>
                        <p>
                          {venue.maxGuests}
                          <FontAwesomeIcon
                            icon={faPerson}
                            size="lg"
                            className={styles.person}
                          />
                        </p>
                      </div>
                    </div>
                    <div className={styles.priceContainer}>
                      <p>{venue.price}$</p>
                      <p>per night</p>
                    </div>
                    <Link
                      className={styles.linkToVenue}
                      to={`/specific/${venue.id}`}
                    >
                      see venue
                    </Link>
                    <div className={styles.buttonCon}>
                      <button
                        className={`${commonStyles.smallButtonYellow} ${commonStyles.noMarginTop} ${commonStyles.smallMarginBottom}`}
                        id={venue.id}
                        onClick={handleEditBtnClick}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }
  }
}
