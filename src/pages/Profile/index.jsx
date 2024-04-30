import { useEffect, useState } from 'react';
import { ProfileUserSection } from '../../components/ProfileUserSection';
import { UpComingBookingsSection } from '../../components/UpComingBookingsSection';
import { useFetchUserProfile } from '../../hooks/FetchUserProfile';
import { profileURL } from '../../js/URL';
import { VenueManagerSection } from '../../components/VenueManagerSection';

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
  } else if (error) {
    return (
      <main>
        <div>
          <h2>Sorry An error has occured, please try again later</h2>
        </div>
      </main>
    );
  } else if (!error && !loading && loadedProfile) {
    return (
      <main>
        <ProfileUserSection profile={profile}></ProfileUserSection>
        {!isVenueManager ? (
          <UpComingBookingsSection profile={profile}></UpComingBookingsSection>
        ) : (
          <VenueManagerSection></VenueManagerSection>
        )}
      </main>
    );
  }
}
