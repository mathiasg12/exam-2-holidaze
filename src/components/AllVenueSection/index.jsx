import { SearchBarAndFilterSection } from '../SearchBarAndFilterSection';
import styles from './allVenueSection.module.css';
export function AllVenueSection() {
  return (
    <section className={styles.allVenueSection}>
      <h2>Venues</h2>
      <SearchBarAndFilterSection></SearchBarAndFilterSection>
    </section>
  );
}
