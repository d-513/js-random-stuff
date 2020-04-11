// js-random-stuff

/**
 * Generate a random number.
 * @param {number} min - Minimal value of the number.
 * @param {number} max - Maximum value of the number.
 * @returns {number} The random number.
 */
exports.genNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
/**
 * Generate multiple random numbers.
 * @param {number} count - Count of those numbers.
 * @param {number} min - Minimal value of the number.
 * @param {number} max - Maximum value of the number.
 * @returns {Array} Array of those random numbers.
 */
exports.genNumbers = (count, min, max) => {
  let i;
  let numbers = [];
  for (i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return numbers;
};
/**
 * Generate random string.
 * @param {number} length - Length of the string.
 * @param {string} [characters=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789] - Characters to use to create the string .
 * @returns {string} The random string.
 */
exports.genString = (
  length,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
/**
 * Generate random strings.
 * @param {number} count - Count of those strings.
 * @param {number} length - Length of the strings.
 * @param {string} [characters=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789] - Characters to use to create the strings.
 * @returns {Array} Array of those random strings.
 */
exports.genStrings = (
  count,
  length,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) => {
  let i;
  let strings = [];
  for (i = 0; i < count; i++) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    strings.push(result);
  }
  return strings;
};
/**
 * Generate a random hex color.
 * @returns {String} Hex Color.
 */
exports.genHex = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);
