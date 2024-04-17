/**
 * function that filteres thrue an array and creates a new array based on what a user has searched on
 * @param {array} array
 * @param {string} searchValue
 * @returns array
 */
export function searchfunctionality(array, searchValue) {
  const searchedArray = array.filter((object) => {
    const nameValue = object.name.trim().toLowerCase();
    const searchValueTrim = searchValue.toLowerCase();
    return nameValue.includes(searchValueTrim);
  });
  return searchedArray;
}
