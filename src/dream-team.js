const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(names) {
  let strngForCode = ''
  if (!Array.isArray(names)) return false
  names.forEach(name => {
    if (typeof name === 'string') strngForCode += name.trim()[0]
  })
  return strngForCode.toLocaleUpperCase().split('').sort().join('')
};
