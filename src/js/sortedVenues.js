import { sortVenuesAcending, sortVenuesDecending } from './sortFunctionality';
/**
 * function that uses eighter sortVenuesDecending or sortVenuesAcending to sort venues depending on which sorting prefrence the user uses
 * @param {array} array
 * @param {string} sortBy
 * @returns
 */
export function sortedVenues(array, sortBy) {
  if (sortBy === 'newestFirst') {
    return sortVenuesDecending(array, 'created');
  } else if (sortBy === 'oldestFirst') {
    return sortVenuesAcending(array, 'created');
  } else if (sortBy === 'priceLowtoHigh') {
    return sortVenuesAcending(array, 'price');
  } else if (sortBy === 'priceHighToLow') {
    return sortVenuesDecending(array, 'price');
  } else if (sortBy === 'ratingLowToHigh') {
    return sortVenuesAcending(array, 'rating');
  } else if (sortBy === 'ratingHighToLow') {
    return sortVenuesDecending(array, 'rating');
  }
}
