import { Link } from 'react-router-dom';
import styles from './BookSectionNotLoggedIn.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
/**
 * Component that renders a div containing a heading, paragraph, and a link element.
 * It prompts users to log in to book a venue. The link redirects them to the login page.
 * This component is meant to be conditionally rendered and replaces the booking section
 * in the specific section component called on the venue specific page.
 */
export function BookSectionNotLoggedIn() {
  return (
    <div className={styles.notLoggedInContainer}>
      <h2>You need to log in to book this venue</h2>
      <p>
        Discover available dates for this venue and easily make bookings by
        logging in. Click the button below to proceed to the login page
      </p>
      <Link to="/login" className={commonStyles.smallButtonLinkYellow}>
        Login
      </Link>
    </div>
  );
}
