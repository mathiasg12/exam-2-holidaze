import { useEffect, useState } from 'react';
import { useUpdateTriggerStore } from '../states/updateTriggerState';
/**
 * hook that fetches and returns a profile
 * @param {string} URL
 */
export function useFetchUserProfile(URL) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({});
  const name = localStorage.getItem('name');
  const token = localStorage.getItem('token');
  const apiKey = localStorage.getItem('key');
  const update = useUpdateTriggerStore((state) => state.update);
  useEffect(() => {
    async function innerFunction() {
      if (apiKey && token && name) {
        try {
          setLoading(true);
          setError(false);
          const options = {
            headers: {
              Authorization: `Bearer ${token}`,
              'X-Noroff-API-Key': apiKey,
            },
          };
          const data = await fetch(`${URL}${name}?_bookings=true`, options);
          const dataJson = await data.json();
          if (data.ok) {
            setProfile(dataJson.data);
          } else {
            setError(true);
          }
        } catch (error) {
          setError(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    }
    innerFunction();
  }, [URL, update]);

  return { error, loading, profile };
}
