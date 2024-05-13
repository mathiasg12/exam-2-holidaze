import { Helmet } from 'react-helmet';
import { SpecificSection } from '../../components/SpecificSection';
/**
 * component that creates the specific page, calls the SpecificSection component.
 */
export function Specific() {
  return (
    <main>
      <Helmet>
        <title>Holidaze | Venue specific</title>
        <meta
          name="description"
          content="Holidaze provides exclusive venues and experiences.
           Book your adventure now and retreat to breathtaking places.
            We are committed to providing memorable experiences tailored to your preferences,
             whether you are looking for a family vacation, a solo retreat, or a group vacation with friends. We have a venue for your needs."
        />
        <meta
          name="keywords"
          content="Venue,Booking,Vacation,Retreat,Family,Friends,Solo travel, Experiences, Memorable,Book,Rent,Stay,Exlusive,Budget,City"
        />
      </Helmet>
      <SpecificSection></SpecificSection>
    </main>
  );
}
