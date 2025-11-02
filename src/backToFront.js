/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
function copyPasteSymbols(str, symbolsCount) {

    if (typeof str !== 'string') str = String(str);
    symbolsCount = Number(symbolsCount) || 0;
    if (symbolsCount < 0) symbolsCount = 0;
    if (symbolsCount > str.length) symbolsCount = str.length;

    const symbols = str.substring(0, symbolsCount);
    return symbols + str + symbols;
}