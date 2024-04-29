import { LoginURL } from './URL';
import { loginFunctionality } from './loginfunctionality';

/**
 * function that register a user to the API, takes six parameters, URL which is the URL to create the user and object,
 * which is the object posted to the API, settErrorActive,setLoggedIn and setErrorMessage
 * is states that sets values depending on the respond from the api and reset which resets the form. the function also calls the login function if the api call was succesfull.
 * @param {string} URL
 * @param {object} object
 * @param {state} setErrorActive
 * @param {state} setErrorMessage
 * @param {function} reset
 */
export async function signUpFunction(
  URL,
  object,
  setErrorActive,
  setErrorMessage,
  setLoggedIn,
  reset
) {
  try {
    const registerUser = await fetch(URL, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(object),
    });
    const userJson = await registerUser.json();
    if (!registerUser.ok) {
      setErrorActive(true);
      const error = userJson.errors[0].message;
      setErrorMessage(error);
    } else {
      setErrorActive(false);
      reset();
      loginFunctionality(
        object.email,
        object.password,
        LoginURL,
        setErrorMessage,
        setErrorActive,
        setLoggedIn,
        reset
      );
    }
  } catch (error) {
    setErrorActive(true);
    setErrorMessage('Error with registration');
  }
}
