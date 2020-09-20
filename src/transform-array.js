const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('Error')
    const resultArr = []
    let discardIndex
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case i === 0 && arr[i] === '--double-prev':
            case i === 0 && arr[i] === '--discard-prev':
            case i === arr.length - 1 && arr[i] === '--double-next':
            case i === arr.length - 1 && arr[i] === '--discard-next':
                break
            case arr[i] === '--discard-next':
                discardIndex = i+1
                break
            case arr[i] === '--discard-prev':
                if (discardIndex === i-1) break
                resultArr.pop()
                break
            case arr[i] === '--double-next':
                resultArr.push(arr[i + 1])
                break
            case arr[i] === '--double-prev':
                if (discardIndex === i-1) break
                arr[i] !== 0 ? resultArr.push(arr[i - 1]) : null
                if (arr[i] === resultArr[resultArr.length - 1]) resultArr.push(arr[i])
                break
            default:
                if (i === discardIndex) break
                resultArr.push(arr[i])
                break
        }
    }
    return resultArr
};
