const hangul = require('hangul-js')
const { enter2space } = require('../convert')

function alliteration() {
    const str = enter2space(`기나긴 기다림과 고난의 끝, 가사적
    권능으로 구름을 걷으며 길거리를 걷는`)
    const arr = str.split(' ')
    
    let disassembleWords = []
    
    arr.forEach((word) => {
        const disassembleWord = hangul.disassemble(word, true)
        disassembleWords.append(word)
        disassembleWord.forEach((j) => {
            console.log(j)
        })
    })
}

module.exports.alliteration = alliteration
