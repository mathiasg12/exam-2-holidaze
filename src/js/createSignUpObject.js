/**
 * function that returns a object, meant to be used in the signup function as body in the post request
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {string} image
 * @param {string} userType
 * @returns object
 */
export function createSignUpObject(name, email, password, image, userType) {
  if (userType === 'customer') {
    return {
      name: name,
      email: email,
      password: password,
      avatar: {
        url:
          image.length >= 8
            ? image
            : 'https://img.freepik.com/premium-photo/man-with-face-circle-with-word-man-it_798164-934.jpg?w=996',
      },
    };
  } else {
    return {
      name: name,
      email: email,
      password: password,
      avatar: {
        url:
          image.length >= 8
            ? image
            : 'https://img.freepik.com/premium-photo/man-with-face-circle-with-word-man-it_798164-934.jpg?w=996',
      },
      venueManager: true,
    };
  }
}
