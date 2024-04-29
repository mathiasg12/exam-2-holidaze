/**
 * function that allows users to book a venue, it sends an object to the API and if the request was sucessful the function sets a success message,
 * if the request fails, the function sets an error message
 * @param {string} URL
 * @param {object} object
 * @param {state} setError
 * @param {state} setLoading
 * @param {state} setMessage
 * @param {state} setSuccess
 */
export async function bookVenue(
  URL,
  object,
  setError,
  setLoading,
  setMessage,
  setSuccess
) {
  const key = localStorage.getItem('key');
  const token = localStorage.getItem('token');
  try {
    setLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': key,
      },
      body: JSON.stringify(object),
    };
    const bookVenue = await fetch(URL, options);
    console.log(bookVenue);
    const bookJson = await bookVenue.json();
    console.log(bookJson);
    if (bookVenue.ok) {
      setError(false);
      setSuccess(true);
    } else {
      setError(true);

      if (bookJson.statusCode === 409) {
        setSuccess(false);
        setMessage(
          'Booking failed: You selected dates that overlap with an existing booking. Please select dates that have no bookings (faded dates) in between '
        );
      } else {
        setMessage(bookJson.errors[0].message);
      }
    }
  } catch (error) {
    console.log(error);
    setSuccess(false);
    setError(true);
    setMessage('Something went wrong please try again later');
  } finally {
    setLoading(false);
  }
}
