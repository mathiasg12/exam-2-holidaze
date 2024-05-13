import { useEffect, useState } from 'react';
import { nonDuplicatedVenues } from '../js/removeDupllicatedArray';
import { useUpdateTriggerStore } from '../states/updateTriggerState';
/**
 * hook that fetches and returns a users own venues
 * @param {string} URL
 */
export function useFetchMyvenues(URL) {
  const [unFilteredvenues, setUnFilteredVenues] = useState([]);
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const name = localStorage.getItem('name');
  const token = localStorage.getItem('token');
  const apiKey = localStorage.getItem('key');
  const update = useUpdateTriggerStore((state) => state.update);
  useEffect(() => {
    async function innerFetchFunction() {
      try {
        const options = {
          headers: {
            Authorization: `Bearer ${token}`,
            'X-Noroff-API-Key': apiKey,
          },
        };
        setError(false);
        setLoading(true);
        let data = await fetch(`${URL}${name}/venues?_bookings=true`, options);
        let myVenues = await data.json();
        if (data.ok) {
          setUnFilteredVenues(myVenues.data);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    innerFetchFunction();
  }, [URL, update]);
  useEffect(() => {
    setVenues(nonDuplicatedVenues(unFilteredvenues));
  }, [unFilteredvenues]);
  return { error, loading, venues };
}
