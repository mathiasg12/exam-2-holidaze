import { useState } from 'react';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { allVenuesURL } from '../../js/URL';
import { useUpdateTriggerStore } from '../../states/updateTriggerState';
import styles from './deleteThisVenueMessage.module.css';
import { deleteBookingAndVenues } from '../../js/deleteBookingAndVenues';
import { LoadingSpinner } from '../LoadingSpinner';
/**
 * component that returns the delete message, making sure a user did not press delete by accident, this component gives the user a message and then two options, eighter
 * go back to editing the venue or delete it, if a user clicks delete the delete function is called which sends a delete request to the api
 * @param {props} props
 */
export function DeleteVenueMessage(props) {
  const { setDeleteThisVenue, id } = props;
  const update = useUpdateTriggerStore((state) => state.newUpdate);
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  async function onDeleteVenueClick() {
    await deleteBookingAndVenues(
      `${allVenuesURL}/`,
      id,
      update,
      setMessage,
      setLoadingDelete,
      setMessageVisible
    );
  }
  if (!loadingDelete) {
    return (
      <div className={styles.deleteMessageContainer}>
        <h3> You are about to delete this venue</h3>
        <h4
          className={
            messageVisible ? commonStyles.errorMsg : styles.messageHide
          }
        >
          {message}
        </h4>
        <p>
          If you delete this venue, you cannot regret this decision are you sure
          you want to delete this venue?
        </p>
        <div className={styles.btnContainer}>
          <button
            className={`${commonStyles.buttonWhite} ${styles.cancelBtn}`}
            onClick={() => {
              setDeleteThisVenue(false);
            }}
          >
            No, go back{' '}
          </button>
          <button
            className={`${commonStyles.dangerButton} ${styles.deleteBtn}`}
            onClick={onDeleteVenueClick}
          >
            Yes, Delete this venue
          </button>
        </div>
      </div>
    );
  } else {
    return <LoadingSpinner></LoadingSpinner>;
  }
}
