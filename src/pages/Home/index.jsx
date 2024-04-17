import { AllVenueSection } from '../../components/AllVenueSection';
import { WelcomeMessage } from '../../components/WelcomeMessage';
/**
 * component that creates the home page, calls the welcomeMessage component and allVenueSection component
 */
export function Home() {
  return (
    <main>
      <WelcomeMessage></WelcomeMessage>
      <AllVenueSection></AllVenueSection>
    </main>
  );
}
