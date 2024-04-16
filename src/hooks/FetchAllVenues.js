import { useEffect } from 'react';
import { useState } from 'react';
import { nonDuplicatedVenues } from '../js/removeDupllicatedArray';
export function useFetchAllVenues(URL) {
  const [unFilteredvenues, setUnFilteredVenues] = useState([]);
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let startedLoop = true;
    async function innerFetchFunction() {
      try {
        setError(false);
        setLoading(true);
        let page = 1;
        while (startedLoop) {
          let data = await fetch(URL + `?limit=10&&page=${page}`);
          let allVenues = await data.json();
          setUnFilteredVenues((previousVenues) => [
            ...previousVenues,
            ...allVenues.data,
          ]);
          if (allVenues.meta.isLastPage === false) {
            page++;
          } else {
            break;
          }
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    innerFetchFunction();
    return () => {
      startedLoop = false;
    };
  }, [URL]);
  useEffect(() => {
    setVenues(nonDuplicatedVenues(unFilteredvenues));
  }, [unFilteredvenues]);
  return { venues, error, loading };
}
