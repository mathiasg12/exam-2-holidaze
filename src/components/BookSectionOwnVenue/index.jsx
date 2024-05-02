import { Link } from 'react-router-dom';
import styles from './bookSectionOwnVenue.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
/**
 * Component that renders a div containing a heading, paragraph, and a link element.
 * It tells users that they cant book their own venue. The link redirects them to the landing page.
 * This component is meant to be conditionally rendered and replaces the booking section
 * in the specific section component called on the venue specific page.
 */
export function BookSectionOwnVenue() {
  return (
    <div className={styles.ownVenueCon}>
      <h2>Look for available dates and book</h2>
      <p>
        Sorry, but you can't book your own venue on this site. If you're looking
        to make reservations, feel free to explore other listings. Happy
        booking!
      </p>
      <Link to={'/'} className={commonStyles.smallButtonLinkYellow}>
        Venues
      </Link>
    </div>
  );
}
