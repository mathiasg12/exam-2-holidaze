/**
 * small function that takes two parameters, first one is the text and the second one is the maximum characaters the text should be caped to
 * @param {string} text
 * @param {number} maxCharcacters
 * @returns text
 */
export function capText(text, maxCharcacters) {
  if (typeof text === 'string' && text.length > maxCharcacters) {
    return text.substring(0, maxCharcacters) + '...';
  } else {
    return text;
  }
}
