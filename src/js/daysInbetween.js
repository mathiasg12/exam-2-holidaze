/**
 * function that takes an array of objects, the objects contain a startDate and a endDate and the function loops thrue each item and fills in the days between, returns an arry of days
 * @param {array} datesArray
 * @returns array
 */
export function allDaysBetween(datesArray) {
  const allDays = [];
  datesArray.forEach(({ startDate, endDate }) => {
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      allDays.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });
  return allDays;
}
