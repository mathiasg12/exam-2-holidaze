import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { AddAndRemoveImage } from '../AddAndRemoveImageUpdateForm';
import styles from './rentOutAndEditFormInputs.module.css';
export function RentOutAndEditFormInputs(props) {
  const {
    errors,
    register,
    newImageArray,
    setNewImageArray,
    imageInputValue,
    setImageInputValue,
    nameOfVenue,
    descOfVenue,
    setNameOfVenue,
    setDescOfVenue,
    priceOfVenue,
    setPriceOfVenue,
    addressOfVenue,
    setAddressOfVenue,
    cityOfVenue,
    setCityOfVenue,
    countryOfVenue,
    setCountryOfVenue,
    maxGuestsOfVenue,
    setMaxGuestsOfVenue,
  } = props;
  return (
    <div className={styles.inputContainer}>
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
    </div>
  );
}
