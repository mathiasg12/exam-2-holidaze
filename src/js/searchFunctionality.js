/**
 * function that filteres thrue an array and creates a new array based on what a user has searched on the function matches the search input to eighter the name of the venue,
 * or the city/country the venue is located in
 * @param {array} array
 * @param {string} searchValue
 * @returns array
 */
export function searchfunctionality(array, searchValue) {
  const searchedArray = array.filter((object) => {
    const objectLocation = object.location ? object.location : {};
    const nameValue = object.name.trim().toLowerCase();
    const searchValueLoweCase = searchValue.toLowerCase();
    const cityValue =
      objectLocation.city !== null
        ? objectLocation.city.trim().toLowerCase()
        : '';
    const countryValue =
      objectLocation.country !== null
        ? objectLocation.country.trim().toLowerCase()
        : '';
    return (
      nameValue.includes(searchValueLoweCase) ||
      cityValue.includes(searchValueLoweCase) ||
      countryValue.includes(searchValueLoweCase)
    );
  });
  return searchedArray;
}
