/**
 * function that posts or updates a venue to the api, the function sets the states setError,setloading,setSuccess,setErrorMsg depending on the response from the Api,
 * this function is used both as a way for a user to post their venue and also to update it
 * @param {object} object
 * @param {string} URL
 * @param {state} setLoading
 * @param {state} setError
 * @param {state} setErrorMsg
 * @param {state} setSuccess
 */
export async function postOrUpdateVenue(
  object,
  URL,
  setLoading,
  setError,
  setErrorMsg,
  setSuccess,
  method
) {
  const token = localStorage.getItem('token');
  const apiKey = localStorage.getItem('key');
  try {
    setLoading(true);
    setError(false);
    const postVenue = await fetch(URL, {
      method: method,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': apiKey,
      },
      body: JSON.stringify(object),
    });
    const response = await postVenue.json();
    if (postVenue.ok) {
      setSuccess(true);
    } else {
      setError(true);
      setSuccess(false);
      setErrorMsg(response.errors[0].message);
    }
  } catch (error) {
    setError(true);
    setErrorMsg('sorry something went wrong try again later');
    setSuccess(false);
  } finally {
    setLoading(false);
  }
}
