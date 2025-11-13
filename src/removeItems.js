/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  if (!Array.isArray(arr)) return arr;

  const isDeepEqual = (a, b) => {
    if (a === b) return true;
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch (e) {
      return false;
    }
  };

  for (let i = arr.length - 1; i >= 0; i--) {
    if (isDeepEqual(arr[i], value)) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
