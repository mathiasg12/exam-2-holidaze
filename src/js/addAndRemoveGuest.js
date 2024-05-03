/**
 *  Two functions that handle the addition and removal of guests on the specific site.
 *  These functions allow users to either add or remove the number of guests traveling.
 *  Users cannot add more guests than the allowed limit returned from the venue,
 *  and they cannot add fewer guests than one.
 * @param {state} guestValue
 * @param {state} setGuestValue
 * @param {state} venue
 * @param {const} label
 */
export function handleRemoveGuest(guestValue, setGuestValue, venue, label) {
  label.innerText = `How many are staying? (min 1 and max ${venue.maxGuests})`;
  if (guestValue - 1 <= 0) {
    label.innerText = `Atleast 1 guest`;
    setGuestValue(1);
  } else {
    setGuestValue(guestValue - 1);
  }
}
export function handleAddGuest(guestValue, setGuestValue, venue, label) {
  const maxGuestFloat = parseFloat(venue.maxGuests);
  if (label && label.innerText !== null) {
    label.innerText = `How many are staying? (min 1 and max ${venue.maxGuests})`;
  }
  if (guestValue + 1 > maxGuestFloat) {
    setGuestValue(maxGuestFloat);
    if (label && label.innerText !== null) {
      label.innerText = `Max ${venue.maxGuests} guests`;
    }
  } else {
    setGuestValue(guestValue + 1);
  }
}
