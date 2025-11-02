/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  let volume = (Math.PI * r * r * h) / 3;
  return Math.round(volume * 100) / 100;
};
