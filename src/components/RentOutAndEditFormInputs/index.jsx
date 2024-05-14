import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { AddAndRemoveImage } from '../AddAndRemoveImageUpdateForm';
import styles from './rentOutAndEditFormInputs.module.css';
/**
 * Component that handles the different inputs in the "rent out" and "edit" form.
 * Most inputs are type text, price and maxGuest input are type number for better mobile optimization.
 * The number inputs also use "onWheel={(e) => e.target.blur()}" to remove focus from the input when the user scrolls.
 * This is to improve UX so the user doesn't accidentally scroll a different value when scrolling up or down the form.
 * @param {props} props
 */
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
          onChange={(e) => {
            setNameOfVenue(e.target.value);
          }}
          type="text"
          name="name"
          id="name"
          defaultValue={nameOfVenue}
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
          onChange={(e) => {
            setDescOfVenue(e.target.value);
          }}
          name="desc"
          id="desc"
          cols="20"
          rows="10"
          defaultValue={descOfVenue}
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
          onChange={(e) => {
            setPriceOfVenue(e.target.value);
          }}
          onWheel={(e) => e.target.blur()}
          defaultValue={priceOfVenue}
          type="number"
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
        <label htmlFor="adress">Address</label>
        <p className={commonStyles.errorValidation}>
          {errors.address?.message}
        </p>
        <input
          onChange={(e) => {
            setAddressOfVenue(e.target.value);
          }}
          defaultValue={addressOfVenue}
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
        <p className={commonStyles.errorValidation}>{errors.city?.message}</p>
        <input
          onChange={(e) => {
            setCityOfVenue(e.target.value);
          }}
          defaultValue={cityOfVenue}
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
          onChange={(e) => {
            setCountryOfVenue(e.target.value);
          }}
          defaultValue={countryOfVenue}
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
          onChange={(e) => {
            setMaxGuestsOfVenue(e.target.value);
          }}
          onWheel={(e) => e.target.blur()}
          defaultValue={maxGuestsOfVenue}
          type="number"
          id="maxGuestsAllowed"
          name="maxGuestsAllowed"
          {...register('maxGuests')}
          className={
            !errors.maxGuests
              ? commonStyles.input
              : `${commonStyles.errorInput} ${commonStyles.input}`
          }
        />
      </div>
    </div>
  );
}
