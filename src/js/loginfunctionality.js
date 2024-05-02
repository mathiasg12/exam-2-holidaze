import { ApiKeyURL } from './URL';
import { fetchApiKey } from './fetchApiKey';

/**
 * function that allow users to login and fetch the access token the function uses the email and password parameters to login and fetch the accessToken, the function then calls
 * the fetchApiKey function that fetches and stores the api key, the function then sets setLoggedIn to true which is used in the logginForm and SignupForm components to redirect the user
 * to the profile page
 * @param {string} userEmail
 * @param {string} userPassword
 * @param {string} URL
 * @param {state} setErrormessage
 * @param {state} setErrorActive
 * @param {function} reset
 */
export async function loginFunctionality(
  userEmail,
  userPassword,
  URL,
  setErrormessage,
  setErrorActive,
  setLoggedIn,
  reset
) {
  try {
    const login = await fetch(URL, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });
    if (login.ok) {
      await setErrorActive(false);
      const response = await login.json();
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('name', response.data.name);
      await reset();
      await fetchApiKey(ApiKeyURL);
      await setLoggedIn(true);
    } else {
      setErrorActive(true);
      const error = await login.json();
      const errormessage = await error.errors[0].message;
      setErrormessage(errormessage);
    }
  } catch (error) {
    setErrorActive(true);
    setErrormessage('Error with Login');
  }
}
