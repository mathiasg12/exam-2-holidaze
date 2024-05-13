import { useForm } from 'react-hook-form';
import styles from './rentOutVenueForm.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { RentOutVenueSchema } from '../../hooks/yupSchema';
import { useEffect, useState } from 'react';
import { PublishVenueSuccess } from '../PublishVenueSuccess';
import { LoadingSpinner } from '../LoadingSpinner';
import { onSubmitClick } from '../../js/publishVenueSubmit';
import { PublishVenueFormCheckboxes } from '../PublishVenueFormCheckboxes';
import { RentOutAndEditFormInputs } from '../RentOutAndEditFormInputs';
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
  const [nameOfVenue, setNameOfVenue] = useState('');
  const [descOfVenue, setDescOfVenue] = useState('');
  const [priceOfVenue, setPriceOfVenue] = useState(0);
  const [addressOfVenue, setAddressOfVenue] = useState('');
  const [cityOfVenue, setCityOfVenue] = useState('');
  const [countryOfVenue, setCountryOfVenue] = useState('');
  const [maxGuestsOfVenue, setMaxGuestsOfVenue] = useState('');
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
        <h3 className={styles.rentOutHeading}>Rent out a Venue</h3>
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
          <h4 className={error ? commonStyles.errorMsg : styles.errorHide}>
            {errorMsg}
          </h4>
          <RentOutAndEditFormInputs
            errors={errors}
            register={register}
            newImageArray={imageArray}
            setNewImageArray={setImageArray}
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
