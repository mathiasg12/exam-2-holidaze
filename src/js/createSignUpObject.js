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
            : 'https://unsplash.com/photos/blue-and-white-lego-blocks-pi9W2dWDdak',
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
            : 'https://unsplash.com/photos/blue-and-white-lego-blocks-pi9W2dWDdak',
      },
      ' venueManager': true,
    };
  }
}
