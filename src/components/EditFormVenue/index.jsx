import { useEffect, useState } from 'react';
import { PublishVenueFormCheckboxes } from '../PublishVenueFormCheckboxes';
import styles from './editForm.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { useForm } from 'react-hook-form';
import { RentOutVenueSchema } from '../../hooks/yupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddAndRemoveImage } from '../AddAndRemoveImageUpdateForm';
import { onUpdateClick } from '../../js/updateVenueSubmitClick';
import { capText } from '../../js/capText';
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
      <h4 className={error ? commonStyles.errorMsg : styles.errorHide}>
        {errorMsg}
      </h4>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name</label>
        <p className={commonStyles.errorValidation}>{errors.name?.message}</p>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={nameOfVenue}
          onChange={(e) => {
            setNameOfVenue(e.target.value);
          }}
          {...register('name')}
          className={
            !errors.name
              ? commonStyles.input
              : `${commonStyles.errorInput} ${commonStyles.input}`
          }
        />
      </div>
      <AddAndRemoveImage
        newImageArray={newImageArray}
        setNewImageArray={setNewImageArray}
        imageInputValue={imageInputValue}
        setImageInputValue={setImageInputValue}
      ></AddAndRemoveImage>
      <div className={styles.inputWrapper}>
        <label htmlFor="desc">Description</label>
        <p className={commonStyles.errorValidation}>
          {errors.description?.message}
        </p>
        <textarea
          name="desc"
          id="desc"
          cols="20"
          rows="10"
          defaultValue={descOfVenue}
          onChange={(e) => {
            setDescOfVenue(e.target.value);
          }}
          {...register('description')}
          className={
            !errors.description
              ? styles.inputDesc
              : `${styles.errorInputDesc} ${styles.inputDesc}`
          }
        ></textarea>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="price">Price per night in $</label>
        <p className={commonStyles.errorValidation}>{errors.price?.message}</p>
        <input
          defaultValue={priceOfVenue}
          type="number"
          id="price"
          onChange={(e) => {
            setPriceOfVenue(e.target.value);
          }}
          {...register('price')}
          className={
            !errors.price
              ? commonStyles.input
              : `${commonStyles.errorInput} ${commonStyles.input}`
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="address">Address</label>
        <p className={commonStyles.errorValidation}>
          {errors.address?.message}
        </p>
        <input
          defaultValue={addressOfVenue}
          type="text"
          name="adress"
          id="adress"
          onChange={(e) => {
            setAddressOfVenue(e.target.value);
          }}
          {...register('address')}
          className={
            !errors.address
              ? commonStyles.input
              : `${commonStyles.errorInput} ${commonStyles.input}`
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="city">City</label>
        <p className={commonStyles.errorValidation}>{errors.city?.message}</p>
        <input
          defaultValue={cityOfVenue}
          type="text"
          name="city"
          id="city"
          onChange={(e) => {
            setCityOfVenue(e.target.value);
          }}
          {...register('city')}
          className={
            !errors.city
              ? commonStyles.input
              : `${commonStyles.errorInput} ${commonStyles.input}`
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="country">Country</label>
        <p className={commonStyles.errorValidation}>
          {errors.country?.message}
        </p>
        <input
          defaultValue={countryOfVenue}
          type="text"
          name="country"
          id="country"
          onChange={(e) => {
            setCountryOfVenue(e.target.value);
          }}
          {...register('country')}
          className={
            !errors.country
              ? commonStyles.input
              : `${commonStyles.errorInput} ${commonStyles.input}`
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="maxGuestsAllowed">Max Guests</label>
        <p className={commonStyles.errorValidation}>
          {errors.maxGuests?.message}
        </p>
        <input
          defaultValue={maxGuestsOfVenue}
          className={
            !errors.maxGuests
              ? commonStyles.input
              : `${commonStyles.errorInput} ${commonStyles.input}`
          }
          type="number"
          name="maxGuestsAllowed"
          id="maxGuestsAllowed"
          {...register('maxGuests')}
          onChange={(e) => {
            setMaxGuestsOfVenue(e.target.value);
          }}
        />
      </div>
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
