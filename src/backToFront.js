/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
function copyPasteSymbols(str, symbolsCount) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }

    if (typeof symbolsCount !== 'number' || symbolsCount <= 0) {
        return str;
    }
    
    const symbolsToCopy = str.slice(0, symbolsCount);
    
    return symbolsToCopy + str + symbolsToCopy;
}