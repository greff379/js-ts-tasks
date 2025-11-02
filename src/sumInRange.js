/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let num1 = Number(start);
  let num2 = Number(end);

  let min, max;
  if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }

  return sum;
};
