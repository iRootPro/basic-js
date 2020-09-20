const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direction = true) {
        this.direction = direction
        this.en = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }

    reverseStr(str) {
        return str.split(' ').map(item => {
            return item.split('').reverse().join('')
        }).reverse().join(' ')
    }

    createCodeStr(message, key) {
        this.keyStr = Array(Math.ceil(message.length / key.length)).fill(key).join('')
        this.keyCode = ''
        let countSpace = 0
        for (let i = 0; i < message.length; i++) {
            if (message[i] === ' ') {
                this.keyCode += ' '
                countSpace += 1
            } else this.keyCode += this.keyStr[i - countSpace]
        }
        return this.keyCode.toLocaleUpperCase()
    }

    encrypt(message, key) {
        this.encriptStr = ''
        const keyString = this.createCodeStr(message, key)
        this.messageUpper = message.toLocaleUpperCase()
        for (let i = 0; i < this.messageUpper.length; i++) {
            if (this.en.indexOf(this.messageUpper[i]) === -1) {
                this.encriptStr += this.messageUpper[i]
            } else
                this.encriptStr += (this.en[(this.en.indexOf(this.messageUpper[i]) + this.en.indexOf(keyString[i])) % 26])
        }
        return !this.direction ? this.reverseStr(this.encriptStr) : this.encriptStr

    }

    decrypt(message, key) {
        this.decryptStt = ''
        const keyString = this.createCodeStr(message, key)
        for (let i = 0; i < message.length; i++) {
            if (this.en.indexOf(message[i]) === -1) {
                this.decryptStt += message[i]
            } else
                this.decryptStt += (this.en[(this.en.indexOf(message[i]) - this.en.indexOf(keyString[i]) + 26) % 26])
        }
        return !this.direction ? this.reverseStr(this.decryptStt) :this.decryptStt
    }
}

module.exports = VigenereCipheringMachine;
