const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let strArr = []
    let addArrStr = []
    let addStr = options.addition ? options.addition : ''
    let sep = options.separator ? options.separator : '+'
    let addSep = options.additionSeparator ? options.additionSeparator : ''
    if (options.addition !== undefined && options.additionRepeatTimes !== undefined) {
        options.addition === null ? options.addition = 'null' : ''
        addArrStr= Array(options.additionRepeatTimes).fill(options.addition)
        addStr = addArrStr.join(options.additionSeparator)
    }
    if (options.repeatTimes === 0 || options.repeatTimes === undefined || isNaN(options.repeatTimes) || typeof options.repeatTimes !== "number") {
        return str+addStr
    }

    strArr = Array(options.repeatTimes).fill(str+addStr)
    return strArr.join(sep)
};
  