import { RentOutLink } from '../RentOutLink';
import styles from './welcomeMessage.module.css';
export function WelcomeMessage() {
  return (
    <div className={styles.WelcomeMessageContainer}>
      <h1>Welcome to Holidaze</h1>
      <h2>Booking made easy and affordable</h2>
      <div className={styles.buttonContainer}>
        <p>Are you a venue manager that want to rent out a venue?</p>
        <RentOutLink></RentOutLink>
      </div>
    </div>
  );
}
