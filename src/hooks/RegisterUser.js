import { useEffect, useState } from 'react';

export function useRegisterUser(URL, object) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState({});
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
        setResp(userJson.data);
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
  return { error, loading, resp };
}
