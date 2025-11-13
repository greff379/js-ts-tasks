/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (Math.abs(arr[i]) % 2 === 1) {
      result.push(100);
    }
  }

  return result;
};
