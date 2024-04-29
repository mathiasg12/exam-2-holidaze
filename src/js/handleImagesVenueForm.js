/**
 * function that allows an error message to return to an empty string when the input changes
 * @param {state} setImageError
 */
export function imageOnChange(setImageError) {
  setImageError('');
}
/**
 * function that allow users to add picture to an array to will be used when publishing a venue
 * @param {string} event
 * @param {state} setImageArray
 * @param {array} imageArray
 * @param {state} setImageError
 */
export function addImage(event, setImageArray, imageArray, setImageError) {
  event.preventDefault();
  const imageLink = document.getElementById('image').value;
  if (imageLink.length >= 5) {
    setImageArray([...imageArray, { url: imageLink }]);
  } else if (imageLink.length === 0) {
    setImageError('You have not given a image link (optional)');
  } else {
    setImageError(
      'Please add a valid image URL that is more than 5 characters (optional)'
    );
  }
}
/**
 * function that allow users to remove any images they have added to the venue
 * @param {string} event
 * @param {array} imageArray
 * @param {state} setImageArray
 */
export function removeImage(event, imageArray, setImageArray) {
  const idOfObjectToRemove = event.target.id;
  const indexToRemove = imageArray.indexOf(idOfObjectToRemove);
  imageArray.splice(indexToRemove, 1);
  setImageArray([...imageArray]);
}
