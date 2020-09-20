const CustomError = require("../extensions/custom-error");


module.exports = function getSeason(date) {
    switch (true) {
        case !date:
            return 'Unable to determine the time of year!'
        case Object.prototype.toString.call(date) !== '[object Date]':
            throw new Error('THROWN')
        case date.getMonth() >= 2 && date.getMonth() <= 4:
            return 'spring'
        case date.getMonth() >= 5 && date.getMonth() <= 7:
            return 'summer'
        case date.getMonth() >= 8 && date.getMonth() <= 10:
            return 'autumn'
        case date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11:
            return 'winter'
        default:
            return
    }
};
