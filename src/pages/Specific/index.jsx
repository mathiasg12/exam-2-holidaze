import { SpecificSection } from '../../components/SpecificSection';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useFetchAllVenues } from '../../hooks/FetchAllVenues';
import { allVenuesURL } from '../../js/URL';
import { useParams } from 'react-router-dom';
/**
 * Component that creates the specific page, calls the SpecificSection component, and uses React Helmet Async to dynamically change the title and to create meta description and keywords
 */
export function Specific() {
  const { id } = useParams();
  const { venues, error, loading } = useFetchAllVenues(
    allVenuesURL + `/${id}`,
    true
  );
  const venueName = venues.name ? venues.name : 'Holidaze Venue';
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>{`Holidaze | ${venueName}`}</title>
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
      </HelmetProvider>
      <SpecificSection
        venues={venues}
        error={error}
        loading={loading}
      ></SpecificSection>
    </main>
  );
}
