/**
 * function that allows customers to cancel a booking, sends a fetch with method delete to the api with the id of the booking in the URL, also sets response messages to the user,
 * the function is also used for deleting venues
 * @param {string} URL
 * @param {string} id
 * @param {state} updateBookings
 * @param {state} setResponseMessage
 * @param {state} setLoading
 * @param {state} setMessageVisible
 */
export async function deleteBookingAndVenues(
  URL,
  id,
  updateBookings,
  setResponseMessage,
  setLoading,
  setMessageVisible
) {
  const key = localStorage.getItem('key');
  const token = localStorage.getItem('token');
  try {
    setLoading(true);
    const options = {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': key,
      },
    };
    const response = await fetch(`${URL}${id}`, options);
    if (response.ok) {
      updateBookings();
      setMessageVisible(false);
    } else {
      setResponseMessage('Something went wrong, try again later');
      setMessageVisible(true);
    }
  } catch (error) {
    setResponseMessage('Something went wrong, try again later');
    setMessageVisible(true);
  } finally {
    setLoading(false);
  }
}
