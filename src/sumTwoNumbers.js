/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let a = parseFloat(String(firstNumber).replace(/\s/g, ''));
  let b = parseFloat(String(secondNumber).replace(/\s/g, ''));

  return a + b;
};
