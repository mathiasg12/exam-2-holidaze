/**
 * small fetch function that gets the api key from the api and then stores it in local storage, the function also returns eighter true (if the fetch is successfull),
 * or false (if the fetch fails) this allows the login function to add an error message if the request fails
 * @param {string} URL
 */
export async function fetchApiKey(URL) {
  try {
    const token = localStorage.getItem('token');
    const getApiKey = await fetch(URL, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: 'key' }),
    });
    const apiKeyJson = await getApiKey.json();
    const apiKey = apiKeyJson.data.key;
    localStorage.setItem('key', apiKey);
    return true;
  } catch (error) {
    return false;
  }
}
