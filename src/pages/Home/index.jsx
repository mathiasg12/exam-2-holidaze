import { AllVenueSection } from '../../components/AllVenueSection';
import { WelcomeMessage } from '../../components/WelcomeMessage';

export function Home() {
  return (
    <main>
      <WelcomeMessage></WelcomeMessage>
      <AllVenueSection></AllVenueSection>
    </main>
  );
}
