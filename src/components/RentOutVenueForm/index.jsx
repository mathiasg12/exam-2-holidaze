import { useForm } from 'react-hook-form';
import styles from './rentOutVenueForm.module.css';
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
  const [imageError, setImageError] = useState('');
  useEffect(() => {
    if (activeMenuItem !== 'rentOut') {
      setSuccess(false);
    }
  }, [activeMenuItem]);
  function handleChangedMetaValue(metaValue, setMetaValue) {
    setMetaValue(!metaValue);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RentOutVenueSchema) });
  if (!loading && !success) {
    return (
      <div>
        <form
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
              error,
              loading,
              reset,
              setImageArray,
              imageArray
            );
          })}
        >
          <h3>Rent out a Venue</h3>
          <h4 className={styles.errorMsg}>{errorMsg}</h4>
          <div className={styles.inputWrapper}>
            <label htmlFor="image">Image link (optional)</label>
            <p className={styles.errorMsg}>{imageError}</p>
            <div className={styles.addImageWrapper}>
              <input
                type="text"
                name="image"
                id="image"
                onChange={() => {
                  imageOnChange(setImageError);
                }}
              />
              <button
                onClick={(event) =>
                  addImage(event, setImageArray, imageArray, setImageError)
                }
              >
                Add
              </button>
            </div>
            <div>
              <p
                className={
                  imageArray.length >= 1
                    ? styles.imageLinkInfo
                    : styles.imageLinkHide
                }
              >
                images added (click the link to remove)
              </p>
              {imageArray.map((link, index) => {
                return (
                  <p
                    key={link.url + index}
                    role="button"
                    type="button"
                    id={link.url + index}
                    onClick={(event) => {
                      removeImage(event, imageArray, setImageArray);
                    }}
                    className={styles.imageLink}
                  >
                    {link.url.substring(0, 20)}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Name</label>
            <p className={styles.errorMsg}>{errors.name?.message}</p>
            <input type="text" name="name" id="name" {...register('name')} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="desc">Description</label>
            <p className={styles.errorMsg}>{errors.description?.message}</p>
            <textarea
              name="desc"
              id="desc"
              cols="20"
              rows="10"
              {...register('description')}
            ></textarea>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="price">Price per night in $</label>
            <p className={styles.errorMsg}>{errors.price?.message}</p>
            <input
              type="number"
              name="price"
              id="price"
              {...register('price')}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="address">adress</label>
            <p className={styles.errorMsg}>{errors.address?.message}</p>
            <input
              type="text"
              name="adress"
              id="adress"
              {...register('address')}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="city">City</label>
            <p className={styles.errorMsg}>{errors.city?.message}</p>
            <input type="text" name="city" id="city" {...register('city')} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="country">Country</label>
            <p className={styles.errorMsg}>{errors.country?.message}</p>
            <input
              type="text"
              name="country"
              id="country"
              {...register('country')}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="maxGuestsAllowed">Max Guests</label>
            <p className={styles.errorMsg}>{errors.maxGuests?.message}</p>
            <input
              type="number"
              name="maxGuestsAllowed"
              id="maxGuestsAllowed"
              {...register('maxGuests')}
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
            <input
              type="submit"
              value="Publish"
              className={styles.publishBtn}
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
