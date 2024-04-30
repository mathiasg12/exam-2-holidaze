import { allVenuesURL } from './URL';
import { createVenueObject } from './createVenueObject';
import { postOrUpdateVenue } from './postOrUpdateVenue';
export async function onUpdateClick(
  data,
  petsAllowed,
  wifiIncluded,
  parkingIncluded,
  breakfastIncluded,
  reset,
  setImageArray,
  mediaArray,
  setErrorMsg,
  setLoading,
  setError,
  setSuccess,
  id,
  error,
  setEdit,
  update
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
  if (!error) {
    setImageArray([]);
    reset();
    setEdit(false);
    update();
  }
}
