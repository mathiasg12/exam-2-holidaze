import { useEffect, useState } from 'react';
import { PublishVenueFormCheckboxes } from '../PublishVenueFormCheckboxes';
import styles from './editForm.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { useForm } from 'react-hook-form';
import { RentOutVenueSchema } from '../../hooks/yupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { onUpdateClick } from '../../js/updateVenueSubmitClick';
import { capText } from '../../js/capText';
import { RentOutAndEditFormInputs } from '../RentOutAndEditFormInputs';
/**
 * function that returns the component for the edit form, the edit form allow users to update their venues or delete them
 * @param {props} props
 */
export function EditFormVenue(props) {
  const {
    venueToEdit,
    setEdit,
    error,
    setError,
    setLoading,
    errorMsg,
    setErrorMsg,
    setSuccess,
    setDeleteThisVenue,
    id,
    success,
  } = props;
  const loadedLocation = venueToEdit.location ? venueToEdit.location : {};
  const loadedMeta = venueToEdit.meta ? venueToEdit.meta : {};
  const loadedMedia = venueToEdit.media ? venueToEdit.media : {};
  const [petsAllowed, setPetsAllowed] = useState(loadedMeta.pets || false);
  const [wifiIncluded, setWifiIncluded] = useState(loadedMeta.wifi || false);
  const [newImageArray, setNewImageArray] = useState(loadedMedia || []);
  const [imageInputValue, setImageInputValue] = useState('');
  const [parkingIncluded, setParkingIncluded] = useState(
    loadedMeta.parking || false
  );
  const [breakfastIncluded, setBreakfastIncuded] = useState(
    loadedMeta.breakfast || false
  );
  const [nameOfVenue, setNameOfVenue] = useState(venueToEdit.name || '');
  const [descOfVenue, setDescOfVenue] = useState(venueToEdit.description || '');
  const [priceOfVenue, setPriceOfVenue] = useState(venueToEdit.price || 0);
  const [addressOfVenue, setAddressOfVenue] = useState(
    loadedLocation.address || ''
  );
  const [cityOfVenue, setCityOfVenue] = useState(loadedLocation.city || '');
  const [countryOfVenue, setCountryOfVenue] = useState(
    loadedLocation.country || ''
  );
  const [maxGuestsOfVenue, setMaxGuestsOfVenue] = useState(
    venueToEdit.maxGuests || 0
  );
  function handleChangedMetaValue(metaValue, setMetaValue) {
    setMetaValue(!metaValue);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RentOutVenueSchema) });
  function handleCancelClick(e) {
    e.preventDefault();
    reset();
    setNewImageArray([]);
    setEdit(false);
  }
  useEffect(() => {
    if (success) {
      setNewImageArray([]);
      setEdit(false);
    }
  }, [success]);
  return (
    <form
      className={styles.editForm}
      onSubmit={handleSubmit((data) => {
        onUpdateClick(
          data,
          petsAllowed,
          wifiIncluded,
          parkingIncluded,
          breakfastIncluded,
          newImageArray,
          setErrorMsg,
          setLoading,
          setError,
          setSuccess,
          id
        );
      })}
    >
      <h3 className={styles.headingH3}>
        Update your Venue: {capText(venueToEdit.name, 30)}
      </h3>
      <p className={error ? commonStyles.errorMsg : styles.errorHide}>
        {errorMsg}
      </p>
      <RentOutAndEditFormInputs
        errors={errors}
        register={register}
        newImageArray={newImageArray}
        setNewImageArray={setNewImageArray}
        imageInputValue={imageInputValue}
        setImageInputValue={setImageInputValue}
        nameOfVenue={nameOfVenue}
        descOfVenue={descOfVenue}
        setNameOfVenue={setNameOfVenue}
        setDescOfVenue={setDescOfVenue}
        priceOfVenue={priceOfVenue}
        setPriceOfVenue={setPriceOfVenue}
        addressOfVenue={addressOfVenue}
        setAddressOfVenue={setAddressOfVenue}
        cityOfVenue={cityOfVenue}
        setCityOfVenue={setCityOfVenue}
        countryOfVenue={countryOfVenue}
        setCountryOfVenue={setCountryOfVenue}
        maxGuestsOfVenue={maxGuestsOfVenue}
        setMaxGuestsOfVenue={setMaxGuestsOfVenue}
      ></RentOutAndEditFormInputs>
      <PublishVenueFormCheckboxes
        petsAllowed={petsAllowed}
        setPetsAllowed={setPetsAllowed}
        breakfastIncluded={breakfastIncluded}
        setBreakfastIncuded={setBreakfastIncuded}
        parkingIncluded={parkingIncluded}
        setParkingIncluded={setParkingIncluded}
        wifiIncluded={wifiIncluded}
        setWifiIncluded={setWifiIncluded}
        handleChangedMetaValue={handleChangedMetaValue}
      ></PublishVenueFormCheckboxes>
      <div className={styles.errorCon}>
        <p className={error ? commonStyles.errorValidation : styles.errorHide}>
          {errorMsg}
        </p>
      </div>
      <div>
        <input
          type="submit"
          value="Update"
          className={`${commonStyles.bigButtonYellow} ${commonStyles.smallMarginBottom}`}
        />
      </div>
      <button
        onClick={handleCancelClick}
        className={`${commonStyles.smallButtonYellow} ${commonStyles.smallMarginBottom} ${commonStyles.noMarginTop} ${commonStyles.buttonWhite}`}
      >
        Cancel
      </button>
      <button
        className={`${commonStyles.dangerButton} ${styles.deleteBtn}`}
        onClick={() => {
          setDeleteThisVenue(true);
        }}
      >
        Delete Venue
      </button>
    </form>
  );
}
