import { useForm } from 'react-hook-form';
import styles from './rentOutVenueForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { RentOutVenueSchema } from '../../hooks/yupSchema';
import { useEffect, useState } from 'react';
import { createVenueObject } from '../../js/createVenueObject';
export function RentOutVenueForm() {
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [wifiIncluded, setWifiIncluded] = useState(false);
  const [parkingIncluded, setParkingIncluded] = useState(false);
  const [breakfastIncluded, setBreakfastIncuded] = useState(false);
  const [imageArray, setImageArray] = useState([]);
  const [imageError, setImageError] = useState('');
  function addImage(event) {
    event.preventDefault();
    const imageLink = document.getElementById('image').value;
    if (imageLink.length >= 5) {
      setImageArray([...imageArray, { url: imageLink }]);
    } else if (imageLink.length === 0) {
      setImageError('You have not given a image link (optional)');
    } else {
      setImageError(
        'Please add a valid image URL that is more than 5 characters (optional)'
      );
    }
  }
  function imageOnChange() {
    setImageError('');
  }
  function removeImage(event) {
    const idOfObjectToRemove = event.target.id;
    const indexToRemove = imageArray.indexOf(idOfObjectToRemove);
    imageArray.splice(indexToRemove, 1);
    setImageArray([...imageArray]);
  }
  useEffect(() => {
    console.log('imgA', imageArray);
  }, [imageArray]);
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
          <label htmlFor="image">Image link (optional)</label>
          <p className={styles.errorMsg}>{imageError}</p>
          <div className={styles.addImageWrapper}>
            <input
              type="text"
              name="image"
              id="image"
              onChange={imageOnChange}
            />
            <button onClick={addImage}>Add</button>
          </div>
          <div>
            <p>images added (click the link to remove)</p>
            {imageArray.map((link, index) => {
              return (
                <p
                  key={link.url + index}
                  role="button"
                  type="button"
                  id={link.url + index}
                  onClick={removeImage}
                  className={styles.imageLink}
                >
                  {link.url}
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
