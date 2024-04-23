/**
 * small fetch function that gets the api key from the api and then stores it in local storage
 * @param {string} URL
 */
export async function fetchApiKey(URL) {
  try {
    const token = localStorage.getItem('token');
    console.log(token);
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
  } catch (error) {
    console.log(error);
  }
}
