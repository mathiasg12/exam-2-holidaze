/**
 * function that posts a venue to the api, the function sets the states setError,setloading,setSuccess,setErrorMsg depending on the response from the Api
 * @param {object} object
 * @param {string} URL
 * @param {state} setLoading
 * @param {state} setError
 * @param {state} setErrorMsg
 * @param {state} setSuccess
 */
export async function postVenue(
  object,
  URL,
  setLoading,
  setError,
  setErrorMsg,
  setSuccess
) {
  const token = localStorage.getItem('token');
  const apiKey = localStorage.getItem('key');
  try {
    setLoading(true);
    setError(false);
    const postVenue = await fetch(URL, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': apiKey,
      },
      body: JSON.stringify(object),
    });
    const response = await postVenue.json();
    if (postVenue.ok) {
      console.log(response);
      setSuccess(true);
    } else {
      setError(true);
      setErrorMsg(response.errors[0].message);
      console.log(response);
    }
  } catch (error) {
    setError(true);
    setErrorMsg('sorry something went wrong try again later');
  } finally {
    setLoading(false);
  }
}
