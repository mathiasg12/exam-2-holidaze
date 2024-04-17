import { useEffect } from 'react';
import { useState } from 'react';
import { nonDuplicatedVenues } from '../js/removeDupllicatedArray';
/**
 * Hook that is used to fetch an array from the API, the function stores errors, content, and loading as states.
 *  The function uses a while loop to go through all pages and collect all the data from the API. If the meta value of an object has isLastPage = true,
 *  the loop will break. The loop has a cleanup function to prevent unwanted behavior, The loop starts if the URL changes.
 *  The function also calls a function that filters through the new array and removes duplicates if there are any.
 *  This function is placed inside a useEffect hook that re-triggers if the unfiltered array changes.
 * @param {string} URL
 */
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
