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
