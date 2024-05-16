import styles from './profileOthersUserSection.module.css';
/**
 * component that returns the jsx for the first section of the profile page for others profile,
 *  this section contains an avatar picture, and info about the user.
 */
export function OthersProfileUserSection(props) {
  const { profile } = props;
  const loadedUserAvatar = profile.avatar ? profile.avatar : {};
  const loadedUserAvatarUrl = loadedUserAvatar.url ? loadedUserAvatar.url : {};
  return (
    <section className={styles.userSection}>
      <h1 className={styles.infoHeading}>{profile.name}</h1>
      <div className={styles.profileInfoWrapper}>
        <div className={styles.profilePictureContainer}>
          <img
            src={loadedUserAvatarUrl}
            alt="avatar"
            onError={(errorEvent) => {
              errorEvent.target.src = '../pictures/noImage.jpg';
            }}
            className={styles.profilePicture}
          />
        </div>
        <div className={styles.userWrapper}>
          <h2>User Info</h2>
          <div className={styles.infoDiv}>
            <p className={styles.boldP}>Name:</p>
            <p className={styles.regularP}> {profile.name}</p>
          </div>
          <div className={styles.infoDiv}>
            <p className={styles.boldP}>Email:</p>
            <p className={styles.regularP}>{profile.email}</p>
          </div>
          <div className={styles.infoDiv}>
            <p className={styles.boldP}>User type:</p>
            <p className={styles.regularP}>Venue Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}
