import { useEffect, useState } from 'react';
import { EditFormVenue } from '../EditFormVenue';
import { LoadingSpinner } from '../LoadingSpinner';
import { DeleteVenueMessage } from '../DeleteVenueMessage';
import { useUpdateTriggerStore } from '../../states/updateTriggerState';
/**
 * function which creates the edit venue section, it eighter returns the delete message or the edit venue form depending on the state "deleteThisVenue"
 * @param {props} props
 */
export function EditVenue(props) {
  const { loadedVenues, indexOfEditVenue, setEdit, activeMenuItem } = props;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [deleteThisVenue, setDeleteThisVenue] = useState(false);
  const venueToEdit = loadedVenues[indexOfEditVenue];
  const id = venueToEdit.id;
  useEffect(() => {
    if (activeMenuItem !== 'myVenues') {
      setDeleteThisVenue(false);
    }
  }, [activeMenuItem]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  } else {
    if (!deleteThisVenue) {
      return (
        <EditFormVenue
          venueToEdit={venueToEdit}
          setEdit={setEdit}
          setError={setError}
          error={error}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          loading={loading}
          setLoading={setLoading}
          success={success}
          setSuccess={setSuccess}
          setDeleteThisVenue={setDeleteThisVenue}
          id={id}
        ></EditFormVenue>
      );
    } else {
      return (
        <DeleteVenueMessage
          setDeleteThisVenue={setDeleteThisVenue}
          id={id}
        ></DeleteVenueMessage>
      );
    }
  }
}
