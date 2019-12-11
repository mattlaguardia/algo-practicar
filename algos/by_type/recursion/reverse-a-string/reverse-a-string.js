// ----------------
// Author: Mateo
// ----------------

const reverseAStringOption = (str) => (str === '') ? '' : reverseAStringOption(str.substr(1)) + str.charAt(0);

module.exports = reverseAStringOption;
