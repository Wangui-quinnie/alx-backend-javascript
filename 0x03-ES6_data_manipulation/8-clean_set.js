export default function cleanSet(set, startString) {
  // Checking if the beginning of string is not empty and is a string
  if (!startString || !startString.length || typeof startString !== 'string') {
    return '';
  }

  // Empty string created to store result
  let result = '';

  // Iterating through the set and slices the string from the startString length and appends '-'
  set.forEach((item) => {
    if (item && item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  });

  // Returning the result but first removing the last '-' appended
  return result.slice(0, result.length - 1);
}
