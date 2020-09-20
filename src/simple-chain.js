const CustomError = require("../extensions/custom-error");
const chainMaker = {
  countChain: 0,
  chain: '',
  getLength() {
    return this.countChain
  },
  addLink(value = '()') {
    this.countChain += 1
    this.chain += this.chain !== '' ? `~~( ${value} )` : `( ${value} )`
    return this
  },
  removeLink(position) {
    let chainArr = this.chain.split('~~')
    if (typeof chainArr[position] === 'undefined') {
      this.chain = ''
      throw new Error('THROWN')
    }
    this.chain = chainArr.filter((item, index) => index+1 !== position).join('~~')
    return this
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
    let copyChain = this.chain
    this.chain = ''
    return copyChain
  }
};

module.exports = chainMaker;
