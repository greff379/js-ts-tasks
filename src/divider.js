/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
  let wholePart = 0;
  let temp = n;

  while (temp >= k) {
    temp = temp - k;
    wholePart = wholePart + 1;
  }

  let remainder = temp;

  return wholePart + ' ' + remainder;
};
