/**
 * hook that register a user to the API, takes to parameters, URL which is the URL to create the user and object, which is the object posted to the API, returns three states
 * , error state if an error occurs, loading state which is true when the hook is waiting for a respons, and the response state which is the response from the api
 */
import { useEffect, useState } from 'react';

export function useRegisterUser(URL, object) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  useEffect(() => {
    async function innerFunction() {
      try {
        setLoading(true);
        const registerUser = await fetch(URL, {
          method: 'post',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(object),
        });
        const userJson = await registerUser.json();
        setResponse(userJson.data);
        console.log('success', userJson);
      } catch (error) {
        setError(error);
        console.error('Error registering user:', error);
      } finally {
        setLoading(false);
      }
    }
    innerFunction();
  }, []);
  return { error, loading, response };
}
