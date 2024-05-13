import { Helmet } from 'react-helmet';
import { LoginForm } from '../../components/LoginForm';
import styles from './loginPage.module.css';
/**
 * component that creates the login page, calls the loginForm component.
 */
export function LoginPage() {
  return (
    <main className={styles.loginMain}>
      <Helmet>
        <title>Holidaze | Login</title>
        <meta
          name="description"
          content="Login to Holidaze and get access to a ton of venues all around the globe. Book your dream venue, manage your bookings, or rent out your venue"
        />
        <meta
          name="keywords"
          content="Secure,Login,Sign up, User login, Holidaze login, Holidaze, Travel,Destination, Booking,Manage Venue, Manage Booking "
        />
      </Helmet>
      <LoginForm></LoginForm>
    </main>
  );
}
