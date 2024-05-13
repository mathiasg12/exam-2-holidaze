import { RentOutLink } from '../RentOutLink';
import styles from './welcomeMessage.module.css';
/**
 * component that creates the welcoming message, this includes a h1,h2,p and a button
 */
export function WelcomeMessage() {
  return (
    <div className={styles.welcomeSection}>
      <div className={styles.WelcomeMessageContainer}>
        <h1>Welcome to Holidaze</h1>
        <h2>Booking made easy and affordable</h2>
        <div className={styles.buttonContainer}>
          <p>Are you a venue manager that want to rent out a venue?</p>
          <RentOutLink></RentOutLink>
        </div>
      </div>
    </div>
  );
}
