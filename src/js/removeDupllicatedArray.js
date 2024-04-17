/**
 * function that takes an array and remove duplicates, so no two objects with the same id can exist in the array at the same time
 * @param {array} arrayToRemoveDuplicates
 * @returns array
 */
export function nonDuplicatedVenues(arrayToRemoveDuplicates) {
  const nonDuplicatedArray = [];
  const nonDuplicatedIds = [];
  arrayToRemoveDuplicates.filter((newVenue) => {
    if (!nonDuplicatedIds.includes(newVenue.id)) {
      nonDuplicatedIds.push(newVenue.id);
      nonDuplicatedArray.push(newVenue);
      return true;
    }
    return false;
  });
  return nonDuplicatedArray;
}
