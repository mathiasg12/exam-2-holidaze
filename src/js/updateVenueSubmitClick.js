import { allVenuesURL } from './URL';
import { createVenueObject } from './createVenueObject';
import { postOrUpdateVenue } from './postOrUpdateVenue';
/**
 * The function runs every time the update button is clicked.
 * The function then calls the createVenueObject function,
 * which creates an object. Afterward, the function calls the postOrUpdateVenue function,
 * which sends a POST or PUT request to the API with the newly created object. In this case, a PUT request is used
 * @param {array} data
 * @param {boolean} petsAllowed
 * @param {boolean} wifiIncluded
 * @param {boolean} parkingIncluded
 * @param {boolean} breakfastIncluded
 * @param {array} mediaArray
 * @param {state} setErrorMsg
 * @param {state} setLoading
 * @param {state} setError
 * @param {state} setSuccess
 * @param {string} id
 */
export async function onUpdateClick(
  data,
  petsAllowed,
  wifiIncluded,
  parkingIncluded,
  breakfastIncluded,
  mediaArray,
  setErrorMsg,
  setLoading,
  setError,
  setSuccess,
  id
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
  const URL = `${allVenuesURL}/${id}`;
  await postOrUpdateVenue(
    objectToApi,
    URL,
    setLoading,
    setError,
    setErrorMsg,
    setSuccess,
    'put'
  );
}
