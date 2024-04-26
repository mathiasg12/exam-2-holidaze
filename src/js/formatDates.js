/**
 * small function that converts the date format recived from the API to the desired format of month/day/FullYear
 * @param {object} dateObject
 */
export function dateFormated(dateObject) {
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const newDate = `${month}/${day}/${year}`;
  return newDate;
}
