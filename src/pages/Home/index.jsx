import { Helmet } from 'react-helmet';
import { AllVenueSection } from '../../components/AllVenueSection';
import { WelcomeMessage } from '../../components/WelcomeMessage';
/**
 * component that creates the home page, calls the welcomeMessage component and allVenueSection component
 */
export function Home() {
  return (
    <main>
      <Helmet>
        <title>Holidaze | Home</title>
        <meta
          name="description"
          content="guarantee that you will find a venue that fits your needs. Our venues are located all around the world in a ton of exciting destinations.
           So book now and be ready for an unforgettable adventure with Holidaze. Plus,
           if you're a venue owner looking to rent out your space, look no further, Holidaze offers you the opportunity to showcase and rent out your venue effortlessly."
        />
        <meta
          name="keywords"
          content="Travel,Venue,Vacation,Holiday,Destination,Booking,Resort,Relaxation,Budget travel,Family,Friends,Solo travel,Family vacation,Luxury"
        />
      </Helmet>
      <WelcomeMessage></WelcomeMessage>
      <AllVenueSection></AllVenueSection>
    </main>
  );
}
