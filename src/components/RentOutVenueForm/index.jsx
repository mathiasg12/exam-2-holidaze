import { useForm } from 'react-hook-form';
import styles from './rentOutVenueForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { RentOutVenueSchema } from '../../hooks/yupSchema';
import { useState } from 'react';
import { createVenueObject } from '../../js/createVenueObject';
export function RentOutVenueForm() {
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [wifiIncluded, setWifiIncluded] = useState(false);
  const [parkingIncluded, setParkingIncluded] = useState(false);
  const [breakfastIncluded, setBreakfastIncuded] = useState(false);
  function handleChangedMetaValue(metaValue, setMetaValue) {
    setMetaValue(!metaValue);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RentOutVenueSchema) });
  async function onSubmitClick(data) {
    const objectToApi = createVenueObject(
      data.name,
      data.description,
      data.price,
      data.address,
      data.city,
      data.country,
      data.maxGuests,
      petsAllowed,
      wifiIncluded,
      parkingIncluded,
      breakfastIncluded
    );
    console.log('object:', objectToApi);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <h3>Rent out a Venue</h3>
        <div className={styles.inputWrapper}>
          <label htmlFor="image">Image link</label>
          <div className={styles.addImageWrapper}>
            <input type="text" name="image" id="image" />
            <button>Add</button>
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
          <input type="number" name="price" id="price" {...register('price')} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="adress">adress</label>
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
        <div className={styles.included}>
          <h4>Included</h4>
          <div>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={petsAllowed}
              onChange={() =>
                handleChangedMetaValue(petsAllowed, setPetsAllowed)
              }
            />
            <label htmlFor="pets">Pets allowed</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfastIncluded}
              onChange={() =>
                handleChangedMetaValue(breakfastIncluded, setBreakfastIncuded)
              }
            />
            <label htmlFor="breakfast">Breakfast included</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="parking"
              id="parking"
              checked={parkingIncluded}
              onChange={() =>
                handleChangedMetaValue(parkingIncluded, setParkingIncluded)
              }
            />
            <label htmlFor="parking">Parking included</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="wifi"
              id="wifi"
              checked={wifiIncluded}
              onChange={() =>
                handleChangedMetaValue(wifiIncluded, setWifiIncluded)
              }
            />
            <label htmlFor="wifi">Wifi included</label>
          </div>
        </div>
        <div>
          <input type="submit" value="Publish" className={styles.publishBtn} />
        </div>
      </form>
    </div>
  );
}
