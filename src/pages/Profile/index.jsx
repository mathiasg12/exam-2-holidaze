import { useEffect, useState } from 'react';
import { ProfileUserSection } from '../../components/ProfileUserSection';
import { UpComingBookingsSection } from '../../components/UpComingBookingsSection';
import { useFetchUserProfile } from '../../hooks/FetchUserProfile';
import { profileURL } from '../../js/URL';
import { VenueManagerSection } from '../../components/VenueManagerSection';
import { Helmet, HelmetProvider } from 'react-helmet-async';
/**
 * component that creates the profile page calls the profileUserSection component and eighter the upComingBookingsSection or venueManagerSection component depending on if the user is
 * a manager or not the component also uses React Helmet Async to dynamically change the title and to create meta description and keywords
 */
export function Profile() {
  const { loading, error, profile } = useFetchUserProfile(profileURL);
  const loadedProfile = profile ? profile : {};
  const [isVenueManager, setIsVenueManager] = useState(false);
  useEffect(() => {
    if (loadedProfile.venueManager === true) {
      setIsVenueManager(true);
    }
  }, [loadedProfile.venueManager]);

  if (loading) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  } else if (!loading && loadedProfile) {
    return (
      <main>
        <HelmetProvider>
          <Helmet>
            <title>{`Holidaze | Profile | Logged in as: ${loadedProfile.name}`}</title>
            <meta
              name="description"
              content="Manage your Holidaze profile, access your upcoming bookings, your venues,
            your profile information, and upcoming bookings on your venues, all in one place "
            />
            <meta
              name="keywords"
              content="Profile, Holidaze, Holidaze profile, Bookings, Upcoming bookings, Venues, Edit venue, Travel,Holiday,Rental"
            />
          </Helmet>
        </HelmetProvider>
        <ProfileUserSection profile={profile}></ProfileUserSection>
        {!isVenueManager ? (
          <UpComingBookingsSection
            profile={profile}
            error={error}
          ></UpComingBookingsSection>
        ) : (
          <VenueManagerSection profile={profile}></VenueManagerSection>
        )}
      </main>
    );
  }
}
