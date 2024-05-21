import { useEffect } from 'react';
import { useState } from 'react';
import { nonDuplicatedVenues } from '../js/removeDupllicatedArray';
/**
 *  Hook that is used to fetch an array from the API or a single object, the function stores errors, content, and loading as states.
 *  the function takes two parameters, URL which is the url to fetch data from and singleObjectBoolean, which is eighter true or false, if the value is false the function will loop thrue the array
 *  if the value is true then it is a single object and will store it.
 *  The function uses a while loop to go through all pages and collect all the data from the API. If the meta value of an object has isLastPage = true,
 *  the loop will break. The loop has a cleanup function to prevent unwanted behavior, The loop starts if the URL changes.
 *  The function also calls a function that filters through the new array and removes duplicates if there are any.
 *  This function is placed inside a useEffect hook that re-triggers if the unfiltered array changes.
 * @param {string} URL
 */
export function useFetchAllVenues(URL, singleObjectBooleanValue) {
  const [unFilteredvenues, setUnFilteredVenues] = useState([]);
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const isSingleObject = singleObjectBooleanValue;
  useEffect(() => {
    let startedLoop = true;
    async function innerFetchFunction() {
      try {
        setError(false);
        setLoading(true);
        if (isSingleObject === true) {
          let data = await fetch(URL + `?_bookings=true&&_owner=true`);
          let allVenues = await data.json();
          if (data.ok) {
            setVenues(allVenues.data);
          } else {
            setError(true);
          }
        } else {
          let page = 1;
          while (startedLoop) {
            let data = await fetch(URL + `?limit=100&&page=${page}`);
            let allVenues = await data.json();
            if (!data.ok) {
              setError(true);
              break;
            } else {
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
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    innerFetchFunction();
    return () => {
      startedLoop = false;
    };
  }, [URL, isSingleObject]);
  useEffect(() => {
    if (isSingleObject === false) {
      setVenues(nonDuplicatedVenues(unFilteredvenues));
    }
  }, [unFilteredvenues, isSingleObject]);

  return { venues, error, loading };
}
