import { SignUpForm } from '../../components/SignUpForm';
import { HelmetProvider, Helmet } from 'react-helmet-async';
/**
 * component that creates the sign up page, calls the signUpForm component,
 * and uses React Helmet Async to change the title and to create meta description and keywords
 */
export function SignUpPage() {
  return (
    <main>
      <HelmetProvider>
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
      </HelmetProvider>
      <SignUpForm></SignUpForm>
    </main>
  );
}
