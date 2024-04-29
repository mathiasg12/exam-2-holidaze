/**
 * small function that calculates the total cost of a venue, the calulatetion uses (array.length-1) to calculate amount of nights since the venues has a per night price,
 * so if a venue cost 10$ per night and the user are staying 25/26/27 in a given month, the price will be 20$ since the user are staying for 3 days and 2 nights
 * @param {array} arrayOfDates
 * @param {number} price
 * @returns number
 */

export function calculateVenuePrice(arrayOfDates, price) {
  return (arrayOfDates.length - 1) * price;
}
