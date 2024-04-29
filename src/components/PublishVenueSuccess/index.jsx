import styles from './publishVenueSuccess.module.css';
export function PublishVenueSuccess(props) {
  const { setActiveMenuItem, setSuccess } = props;
  function handleResetForm() {
    setSuccess(false);
  }
  function handleSeeVenues() {
    setActiveMenuItem('myVenues');
  }
  return (
    <div className={styles.publishVenueSuccessContainer}>
      <h3>You have successfully published a venue</h3>
      <p>
        our venue is now active. People can view and book it for available
        dates. To see all your currently active venues, click on 'My Venues.' If
        you want to publish another venue, click on 'Publish Another Venue.
      </p>
      <div className={styles.BtnWrapper}>
        <button onClick={handleSeeVenues}>My Venues</button>
        <button onClick={handleResetForm}>Publish another venue</button>
      </div>
    </div>
  );
}
