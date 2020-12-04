const hangul = require('hangul-js')

const str = '타임 라임'
const arr = str.split(' ')

arr.forEach((word) => {
    const wordDisassemble = hangul.disassemble(word, true)
    wordDisassemble.forEach((j) => {
        console.log(j)
    })
})