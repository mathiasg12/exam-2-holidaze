/**
 * Function that creates an object that is meant to be sent to the api when a venue manager is renting out a venue
 * @param {string} inputName
 * @param {string} inputDesc
 * @param {string} inputPrice
 * @param {string} inputAddress
 * @param {string} inputCity
 * @param {string} inputCountry
 * @param {string} inputGuests
 * @returns
 */
export function createVenueObject(
  inputName,
  inputDesc,
  inputPrice,
  inputAddress,
  inputCity,
  inputCountry,
  inputGuests,
  petsInc,
  wifiInc,
  parkingInc,
  breakfastInc
) {
  return {
    name: inputName,
    description: inputDesc,
    price: inputPrice,
    maxGuests: inputGuests,
    meta: {
      wifi: wifiInc,
      parking: parkingInc,
      breakfast: breakfastInc,
      pets: petsInc,
    },
    location: {
      address: inputAddress,
      city: inputCity,
      country: inputCountry,
    },
  };
}
