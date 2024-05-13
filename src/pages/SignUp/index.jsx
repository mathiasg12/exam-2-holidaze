import { Helmet } from 'react-helmet';
import { SignUpForm } from '../../components/SignUpForm';
/**
 * component that creates the sign up page, calls the signUpForm component.
 */
export function SignUpPage() {
  return (
    <main>
      <Helmet>
        <title>Holidaze | Sign up</title>
        <meta
          name="description"
          content=" Sign up to Holidaze and get access to a ton of venues all around the globe. Book your dream venue, manage your bookings, or rent out your own venue"
        />
        <meta
          name="keywords"
          content="Sign in, Sign up, Rental, Travel, Rent out, Venue, Holidaze, Vacation, Holidaze Sign up, Booking,Manage Venue, Manage Booking"
        />
      </Helmet>
      <SignUpForm></SignUpForm>
    </main>
  );
}
