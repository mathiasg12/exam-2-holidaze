/**
 * function that sends a PUT request to the api with an image object, so a user can update their profile picture
 * @param {string} URL
 * @param {state} setResponseMessage
 * @param {function} reset
 * @param {object} object
 * @param {state} setError
 * @param {state} setLoading
 */
export async function updateProfile(
  URL,
  setResponseMessage,
  reset,
  object,
  setError,
  setLoading,
  updateImage,
  setProfileAvatar
) {
  const key = localStorage.getItem('key');
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  try {
    setLoading(true);
    const options = {
      method: 'put',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': key,
      },
      body: JSON.stringify(object),
    };
    const putNewImage = await fetch(`${URL}${name}`, options);
    if (putNewImage.ok) {
      const response = await putNewImage.json();
      updateImage();
      setError(false);
      reset();
      setProfileAvatar(response.data.avatar.url);
    } else {
      setError(true);
      setResponseMessage(
        'Something went wrong, most likely your URL is not a valid public URL'
      );
      reset();
    }
  } catch (error) {
    setError(true);
    setResponseMessage('Something went wrong, please try again later');
  } finally {
    setLoading(false);
  }
}
