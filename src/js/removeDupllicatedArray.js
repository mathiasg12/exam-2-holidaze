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
