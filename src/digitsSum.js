/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let num = n;
  if (n < 0) {
    num = -n;
  }

  let str = num + '';
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    sum = sum + digit;
  }
  return sum;
};
