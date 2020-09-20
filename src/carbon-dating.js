const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if (typeof activity !== 'string') return false
  if (isNaN(parseFloat(activity)) ) return false
  if (+activity > 15 || +activity <= 0) return false
  let k = Math.log(2)  / HALF_LIFE_PERIOD
  return Math.ceil(Math.log(MODERN_ACTIVITY/activity) / k)
};
