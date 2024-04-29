import { allVenuesURL } from './URL';
import { createVenueObject } from './createVenueObject';
import { postVenue } from './postVenue';
/**
 * function that handles the submit click on the profile page when filling out the rent out a venue form, if a user clicks submit and the validation goes thrue the function will call,
 * the createVenueObject and use that object as a parameter for the postVenue function which posts the venue to the api,
 *  if the request is successfull the form resets and the imageArray is set to an empty array
 * @param {object} data
 * @param {boolean} petsAllowed
 * @param {boolean} wifiIncluded
 * @param {boolean} parkingIncluded
 * @param {boolean} breakfastIncluded
 * @param {state} setLoading
 * @param {state} setError
 * @param {state} setErrorMsg
 * @param {state} setSuccess
 * @param {boolean} error
 * @param {boolean} loading
 * @param {Function} reset
 * @param {state} setImageArray
 */
export async function onSubmitClick(
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
  mediaArray
) {
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
    breakfastIncluded,
    mediaArray
  );
  await postVenue(
    objectToApi,
    allVenuesURL,
    setLoading,
    setError,
    setErrorMsg,
    setSuccess
  );

  if (!error || !loading) {
    reset();
    setImageArray([]);
  }
}
