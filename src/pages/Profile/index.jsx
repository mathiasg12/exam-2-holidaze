import { useEffect, useState } from 'react';
import { ProfileUserSection } from '../../components/ProfileUserSection';
import { UpComingBookingsSection } from '../../components/UpComingBookingsSection';
import { useFetchUserProfile } from '../../hooks/FetchUserProfile';
import { profileURL } from '../../js/URL';
import { VenueManagerSection } from '../../components/VenueManagerSection';
/**
 * component that creates the profile page calls the profileUserSection component and eighter the upComingBookingsSection or venueManagerSection component depending on if the user is
 * a manager or not
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
