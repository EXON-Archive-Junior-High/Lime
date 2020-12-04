const hangul = require('hangul-js')
const { enter2space, aspirated2simple } = require('../convert')

function alliteration() {
    const str = enter2space(`기나긴 기다림과 고난의 끝, 가사적
    권능으로 구름을 걷으며 길거리를 걷는`)
    const charArr = str.split('')
    const firstChar = []
    let j = 0
    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] == ' ') {
            firstChar[j] = aspirated2simple(hangul.disassemble(charArr[i + 1])[0])
            console.log(firstChar[j])
            j++
        }
    }
    console.log(j)
    
}

module.exports.alliteration = alliteration
