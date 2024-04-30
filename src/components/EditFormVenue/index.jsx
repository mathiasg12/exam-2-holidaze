import { useState } from 'react';
import { PublishVenueFormCheckboxes } from '../PublishVenueFormCheckboxes';
import styles from './editForm.module.css';
import { useForm } from 'react-hook-form';
import { RentOutVenueSchema } from '../../hooks/yupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddAndRemoveImage } from '../AddAndRemoveImageUpdateForm';
import { onUpdateClick } from '../../js/updateVenueSubmitClick';
import { useUpdateTriggerStore } from '../../states/updateTriggerState';
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
  } = props;
  const loadedLocation = venueToEdit.location ? venueToEdit.location : {};
  const loadedMeta = venueToEdit.meta ? venueToEdit.meta : {};
  const loadedMedia = venueToEdit.media ? venueToEdit.media : {};
  const [petsAllowed, setPetsAllowed] = useState(loadedMeta.pets || false);
  const [wifiIncluded, setWifiIncluded] = useState(loadedMeta.wifi || false);
  const [newImageArray, setNewImageArray] = useState(loadedMedia || []);
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
  const update = useUpdateTriggerStore((state) => state.newUpdate);
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
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onUpdateClick(
          data,
          petsAllowed,
          wifiIncluded,
          parkingIncluded,
          breakfastIncluded,
          reset,
          setNewImageArray,
          newImageArray,
          setErrorMsg,
          setLoading,
          setError,
          setSuccess,
          id,
          error,
          setEdit,
          update
        );
      })}
    >
      <h3>Update your Venue: {venueToEdit.name}</h3>
      <h4 className={styles.errorMsg}>{errorMsg}</h4>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name</label>
        <p className={styles.errorMsg}>{errors.name?.message}</p>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={nameOfVenue}
          onChange={(e) => {
            setNameOfVenue(e.target.value);
          }}
          {...register('name')}
        />
      </div>
      <AddAndRemoveImage
        newImageArray={newImageArray}
        setNewImageArray={setNewImageArray}
      ></AddAndRemoveImage>
      <div className={styles.inputWrapper}>
        <label htmlFor="desc">Description</label>
        <p className={styles.errorMsg}>{errors.description?.message}</p>
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
        ></textarea>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="price">Price per night in $</label>
        <p className={styles.errorMsg}>{errors.price?.message}</p>
        <input
          defaultValue={priceOfVenue}
          type="number"
          id="price"
          onChange={(e) => {
            setPriceOfVenue(e.target.value);
          }}
          {...register('price')}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="address">adress</label>
        <p className={styles.errorMsg}>{errors.address?.message}</p>
        <input
          defaultValue={addressOfVenue}
          type="text"
          name="adress"
          id="adress"
          onChange={(e) => {
            setAddressOfVenue(e.target.value);
          }}
          {...register('address')}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="city">City</label>
        <p className={styles.errorMsg}>{errors.city?.message}</p>
        <input
          defaultValue={cityOfVenue}
          type="text"
          name="city"
          id="city"
          onChange={(e) => {
            setCityOfVenue(e.target.value);
          }}
          {...register('city')}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="country">Country</label>
        <p className={styles.errorMsg}>{errors.country?.message}</p>
        <input
          defaultValue={countryOfVenue}
          type="text"
          name="country"
          id="country"
          onChange={(e) => {
            setCountryOfVenue(e.target.value);
          }}
          {...register('country')}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="maxGuestsAllowed">Max Guests</label>
        <p className={styles.errorMsg}>{errors.maxGuests?.message}</p>
        <input
          defaultValue={maxGuestsOfVenue}
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
      <div>
        <input type="submit" value="Update" className={styles.updateBtn} />
      </div>
      <button onClick={handleCancelClick} className={styles.cancelBtn}>
        Cancel
      </button>
      <button
        className={styles.deleteBtn}
        onClick={() => {
          setDeleteThisVenue(true);
        }}
      >
        Delete Venue
      </button>
    </form>
  );
}