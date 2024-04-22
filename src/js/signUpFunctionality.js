/**
 * function that register a user to the API, takes five parameters, URL which is the URL to create the user and object, which is the object posted to the API, settErrorActive and setErrorMessage
 * is states that sets values depending on the respond from the api and reset which resets the form.
 */
export async function signUpFunction(
  URL,
  object,
  setErrorActive,
  setErrorMessage,
  reset
) {
  try {
    const registerUser = await fetch(URL, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(object),
    });
    const userJson = await registerUser.json();
    console.log(userJson);
    if (!userJson.data) {
      setErrorActive(true);
      const error = userJson.errors[0].message;
      console.log(error);
      setErrorMessage(error);
    } else {
      setErrorActive(false);
      console.log('nice', userJson.data);
      alert('you successfully created a user');
      reset();
    }
  } catch (error) {
    console.error('Error registering user:', error);
    setErrorActive(true);
    setErrorMessage('Error registering user');
  }
}
