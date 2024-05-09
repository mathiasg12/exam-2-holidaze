import { useForm } from 'react-hook-form';
import styles from './rentOutVenueForm.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { RentOutVenueSchema } from '../../hooks/yupSchema';
import { useEffect, useState } from 'react';
import { PublishVenueSuccess } from '../PublishVenueSuccess';
import { LoadingSpinner } from '../LoadingSpinner';
import {
  addImage,
  imageOnChange,
  removeImage,
} from '../../js/handleImagesVenueForm';
import { onSubmitClick } from '../../js/publishVenueSubmit';
import { PublishVenueFormCheckboxes } from '../PublishVenueFormCheckboxes';
import { AddAndRemoveImage } from '../AddAndRemoveImageUpdateForm';
/**
 * function that returns the "rent out venue" form, the form uses yup form controll
 * @param {props} props
 */
export function RentOutVenueForm(props) {
  const { activeMenuItem, setActiveMenuItem } = props;
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [wifiIncluded, setWifiIncluded] = useState(false);
  const [parkingIncluded, setParkingIncluded] = useState(false);
  const [breakfastIncluded, setBreakfastIncuded] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageArray, setImageArray] = useState([]);
  const [imageInputValue, setImageInputValue] = useState('');

  function handleChangedMetaValue(metaValue, setMetaValue) {
    setMetaValue(!metaValue);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RentOutVenueSchema) });
  useEffect(() => {
    if (activeMenuItem !== 'rentOut') {
      setSuccess(false);
      setImageArray([]);
      reset();
      setError(false);
    }
  }, [activeMenuItem]);
  if (!loading && !success) {
    return (
      <div>
        <form
          className={styles.rentOutVenueForm}
          onSubmit={handleSubmit((data) => {
            onSubmitClick(
              data,
              petsAllowed,
              wifiIncluded,
              parkingIncluded,
              breakfastIncluded,
              setLoading,
              setError,
              setErrorMsg,
              setSuccess,
              reset,
              setImageArray,
              imageArray
            );
          })}
        >
          <h3 className={styles.rentOutHeading}>Rent out a Venue</h3>
          <h4 className={error ? commonStyles.errorMsg : styles.errorHide}>
            {errorMsg}
          </h4>
          <AddAndRemoveImage
            newImageArray={imageArray}
            setNewImageArray={setImageArray}
            imageInputValue={imageInputValue}
            setImageInputValue={setImageInputValue}
          ></AddAndRemoveImage>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Name</label>
            <p className={commonStyles.errorValidation}>
              {errors.name?.message}
            </p>
            <input
              type="text"
              name="name"
              id="name"
              {...register('name')}
              className={
                !errors.name
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }
            />
          </div>
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
            <p className={commonStyles.errorValidation}>
              {errors.price?.message}
            </p>
            <input
              type="number"
              name="price"
              id="price"
              {...register('price')}
              className={
                !errors.price
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="address">Adress</label>
            <p className={commonStyles.errorValidation}>
              {errors.address?.message}
            </p>
            <input
              type="text"
              name="adress"
              id="adress"
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
            <p className={commonStyles.errorValidation}>
              {errors.city?.message}
            </p>
            <input
              type="text"
              name="city"
              id="city"
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
              type="text"
              name="country"
              id="country"
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
              type="number"
              name="maxGuestsAllowed"
              id="maxGuestsAllowed"
              {...register('maxGuests')}
              className={
                !errors.maxGuests
                  ? commonStyles.input
                  : `${commonStyles.errorInput} ${commonStyles.input}`
              }
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
            <p
              className={
                error ? commonStyles.errorValidation : styles.errorHide
              }
            >
              {errorMsg}
            </p>
          </div>
          <div>
            <input
              type="submit"
              value="Publish"
              className={commonStyles.bigButtonYellow}
            />
          </div>
        </form>
      </div>
    );
  } else if (success && !loading) {
    return (
      <PublishVenueSuccess
        setActiveMenuItem={setActiveMenuItem}
        setSuccess={setSuccess}
      ></PublishVenueSuccess>
    );
  } else {
    return <LoadingSpinner></LoadingSpinner>;
  }
}
