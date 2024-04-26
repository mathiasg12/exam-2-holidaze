import { ProfilePicture } from '../ProfilePicture';
import styles from './ProfileUserSection.module.css';
/**
 * component that returns the jsx for the first section of the profile page, this section contains a avatar picture, info about the user and a form, created by the ChangeAvatarForm component
 */
export function ProfileUserSection(props) {
  const { profile } = props;
  const loadedUser = profile ? profile : {};
  const loadedUserAvatar = profile.avatar ? profile.avatar : {};
  return (
    <section className={styles.userSection}>
      <h1>Profile</h1>
      <div className={styles.imageAndInfoWrapper}>
        <ProfilePicture image={loadedUserAvatar}></ProfilePicture>
        <div className={styles.userWrapper}>
          <h2>User Info</h2>
          <div className={styles.infoDiv}>
            <p className={styles.boldP}>Name:</p>
            <p className={styles.regularP}> {loadedUser.name}</p>
          </div>
          <div className={styles.infoDiv}>
            <p className={styles.boldP}>Email:</p>
            <p className={styles.regularP}>{loadedUser.email}</p>
          </div>
          <div className={styles.infoDiv}>
            <p className={styles.boldP}>User type:</p>
            <p className={styles.regularP}>
              {!loadedUser.venueManager ? 'Customer' : 'Venue Manager'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
