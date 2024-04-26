import { UpComingBookingsCard } from '../UpComingBookingsCard';
import styles from './UpComingBookingsSection.module.css';
/**
 * component that creates the up Coming booking section, this section allow users to see their up coming bookings.
 * @param {props} props
 */
export function UpComingBookingsSection(props) {
  const { profile } = props;
  const loadedProfile = profile ? profile : {};

  return (
    <section>
      <h2 className={styles.bookingsHeading}>My Bookings</h2>
      <UpComingBookingsCard profile={loadedProfile}></UpComingBookingsCard>
    </section>
  );
}
