import { Link } from 'react-router-dom';
import styles from './searchOverlay.module.css';
import { capText } from '../../js/capText';
/**
 * component that creates the look ahead search overlay, the component maps thrue the search array and displays it.
 * @param {props} props
 */
export function SearchOverlay(props) {
  const { array, searchClicked } = props;
  if (array.length < 1) {
    return (
      <div
        className={searchClicked ? styles.noResultsHidden : styles.noResults}
      >
        <h3>No results</h3>
      </div>
    );
  } else {
    return (
      <div
        className={
          searchClicked
            ? styles.overlayContainerHidden
            : styles.overlayContainer
        }
      >
        {array.map((venueObject) => {
          let image = '../pictures/noImage.jpg';
          if (
            venueObject.media !== undefined &&
            venueObject.media.length >= 1
          ) {
            image = venueObject.media[0].url;
          }
          return (
            <Link
              to={`specific/${venueObject.id}`}
              key={venueObject.id}
              className={styles.overlayItems}
            >
              <div className={styles.imageAndHeadingCon}>
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
              </div>
              <div className={styles.pContainer}>
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
              <div className={styles.pContainer}>
                <p>{venueObject.price}$</p>
                <p>per night</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
