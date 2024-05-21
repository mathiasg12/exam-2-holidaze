import { Link } from 'react-router-dom';
import styles from './notFoundPageContent.module.css';
/**
 * The NotFoundPageContent component returns a heading, a paragraph, and a link back to the landing page. This component is
 * rendered on the "404 Page Not Found" page.
 */
export function NotFoundPageContent() {
  return (
    <section className={styles.contentContainer}>
      <h1>Oops, sorry but this page does not exist</h1>
      <p>
        We are sorry, but the page you are looking for cannot be found. If you
        need assistance, please feel free to contact us. If you are looking for
        a venue, feel free to browse our venues at the venue page.
      </p>
      <Link to="/" className={styles.backToVenueLink}>
        Back to Venues
      </Link>
    </section>
  );
}
