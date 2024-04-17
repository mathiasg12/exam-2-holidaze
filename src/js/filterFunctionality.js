/**
 * function that uses the meta object in each object to filter thrue and return a new array where the meta values matches the users filter setting
 * @param {array} array
 * @param {array} metaKeyArray
 * @returns array
 */
export function filterMetaValues(array, metaKeyArray) {
  const filteredArray = array.filter((object) => {
    return metaKeyArray.every((metaKey) => object.meta[metaKey] === true);
  });
  return filteredArray;
}
/**
 * function that takes three parameters, array which is the array to filter, metaKeyArray which is the array with filter keys, and maxGuests which is a string,
 * telling the function how many maxGuest the filtered objects should contain, the function uses the filterMetaValues function above which filter out the objects that
 * dont match the meta keys, so an array first gets filtered by the function above then by max guests in this function, then returns a new array with all the filter criteria met
 * @param {array} array
 * @param {array} metaKeyArray
 * @param {string} maxGuests
 * @returns array
 */
export function filteredVenues(array, metaKeyArray, maxGuests) {
  if (maxGuests === 'all') {
    const filteredArrayWithMaxGuests = filterMetaValues(array, metaKeyArray);
    return filteredArrayWithMaxGuests;
  } else if (maxGuests === 'moreThan5') {
    const filteredArrayWithMaxGuests = filterMetaValues(
      array,
      metaKeyArray
    ).filter((object) => object.maxGuests > 5);
    return filteredArrayWithMaxGuests;
  } else if (maxGuests === 'five') {
    const filteredArrayWithMaxGuests = filterMetaValues(
      array,
      metaKeyArray
    ).filter((object) => object.maxGuests === 5);
    return filteredArrayWithMaxGuests;
  } else if (maxGuests === 'four') {
    const filteredArrayWithMaxGuests = filterMetaValues(
      array,
      metaKeyArray
    ).filter((object) => object.maxGuests === 4);
    return filteredArrayWithMaxGuests;
  } else if (maxGuests === 'three') {
    const filteredArrayWithMaxGuests = filterMetaValues(
      array,
      metaKeyArray
    ).filter((object) => object.maxGuests === 3);
    return filteredArrayWithMaxGuests;
  } else if (maxGuests === 'two') {
    const filteredArrayWithMaxGuests = filterMetaValues(
      array,
      metaKeyArray
    ).filter((object) => object.maxGuests === 2);
    return filteredArrayWithMaxGuests;
  } else if (maxGuests === 'one') {
    const filteredArrayWithMaxGuests = filterMetaValues(
      array,
      metaKeyArray
    ).filter((object) => object.maxGuests === 1);
    return filteredArrayWithMaxGuests;
  }
}
