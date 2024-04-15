import { useEffect } from 'react';
import { useState } from 'react';

export function useFetchAllVenues(URL) {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function innerFetchFunction() {
      try {
        setError(false);
        setLoading(true);
        let data = await fetch(URL);
        let allVenues = await data.json();
        setVenues(allVenues);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    innerFetchFunction();
  }, [URL]);
  return { venues, error, loading };
}
