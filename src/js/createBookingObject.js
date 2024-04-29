/**
 * function that returns an object,this object is meant to be used as body in the post request to create a booking
 * @param {object} data
 */
export function createBookingObject(dateFrom, dateTo, amountOfGuests, venueId) {
  return {
    dateFrom: dateFrom,
    dateTo: dateTo,
    guests: amountOfGuests,
    venueId: venueId,
  };
}
