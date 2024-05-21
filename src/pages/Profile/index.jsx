import { useEffect, useState } from 'react';
import { ProfileUserSection } from '../../components/ProfileUserSection';
import { UpComingBookingsSection } from '../../components/UpComingBookingsSection';
import { useFetchUserProfile } from '../../hooks/FetchUserProfile';
import { profileURL } from '../../js/URL';
import { VenueManagerSection } from '../../components/VenueManagerSection';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { OthersProfileUserSection } from '../../components/ProfileOthersUserSection';
import { OtherProfileVenues } from '../../components/OtherProfileVenues';
/**
 * component that creates the profile page calls the profileUserSection component and eighter the upComingBookingsSection or venueManagerSection component depending on if the user is
 * a manager or not the component also uses React Helmet Async to dynamically change the title and to create meta description and keywords
 */
export function Profile() {
  const { name } = useParams();
  const ownName = localStorage.getItem('name');
  const { loading, error, profile } = useFetchUserProfile(profileURL, name);
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
    if (name === ownName) {
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
            <VenueManagerSection
              profile={profile}
              name={ownName}
            ></VenueManagerSection>
          )}
        </main>
      );
    } else {
      return (
        <main>
          <HelmetProvider>
            <Helmet>
              <title>{`Holidaze | Profile | viewing ${loadedProfile.name}'s profile`}</title>
              <meta
                name="description"
                content="Explore others Holidaze profile, see all their venues and profile information, all in one place "
              />
              <meta
                name="keywords"
                content="Profile, Holidaze, Holidaze profile, Bookings, Venues,Travel,Holiday,Rental"
              />
            </Helmet>
          </HelmetProvider>
          <OthersProfileUserSection
            profile={profile}
          ></OthersProfileUserSection>
          <OtherProfileVenues name={name}></OtherProfileVenues>
        </main>
      );
    }
  }
}
