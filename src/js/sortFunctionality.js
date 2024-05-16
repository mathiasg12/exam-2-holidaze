/**
 * Two functions that deal with sorting. The first function sorts in descending order,
 * and the second function sorts in ascending order. Each takes two parameters: the first is the array that should be sorted,
 * and the second is the property to sort
 * @param {array} array
 * @param {string} sortItem
 */
export function sortVenuesDecending(array, sortItem) {
  const sortedArray = array.sort((a, b) => {
    if (a[sortItem] > b[sortItem]) {
      return -1;
    } else if (a[sortItem] < b[sortItem]) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedArray;
}
export function sortVenuesAcending(array, sortItem) {
  const sortedArray = array.sort((a, b) => {
    if (a[sortItem] > b[sortItem]) {
      return 1;
    } else if (a[sortItem] < b[sortItem]) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedArray;
}
