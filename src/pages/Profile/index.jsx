import { ProfileUserSection } from '../../components/ProfileUserSection';
import { UpComingBookingsSection } from '../../components/UpComingBookingsSection';
import { useFetchUserProfile } from '../../hooks/FetchUserProfile';
import { profileURL } from '../../js/URL';

export function Profile() {
  const { loading, error, profile } = useFetchUserProfile(profileURL);
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
  } else if (!error && !loading) {
    return (
      <main>
        <ProfileUserSection profile={profile}></ProfileUserSection>
        <UpComingBookingsSection profile={profile}></UpComingBookingsSection>
      </main>
    );
  }
}
