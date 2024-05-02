import { Link } from 'react-router-dom';
import styles from './bookingSuccess.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
/**
 * component that returns the success message overlay, this overlay includes a thank you message, close overlay buttons, and a link to the profile page
 * @param {props} props
 */
export function BookingSuccess(props) {
  const { setSuccess } = props;
  function exitOnClick() {
    setSuccess(false);
  }
  return (
    <div className={styles.successOverlay}>
      <p
        role="button"
        className={styles.exitBtn}
        type="button"
        onClick={exitOnClick}
      >
        X
      </p>
      <h2>Your booking was successful</h2>
      <p className={styles.successMessage}>
        Thank you for choosing to book with us! Your trust means a lot to us.
        We're thrilled to be a part of your upcoming experience. Remember, you
        can always view your upcoming bookings on your profile page.
      </p>
      <p></p>
      <Link
        to="/profile"
        className={`${commonStyles.smallButtonLinkYellow} ${commonStyles.smallMarginBottom}`}
      >
        Profile
      </Link>
      <p
        role="button"
        className={styles.closeBtn}
        onClick={exitOnClick}
        type="button"
      >
        Close
      </p>
    </div>
  );
}
