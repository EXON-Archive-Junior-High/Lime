const hangul = require('hangul-js')
const chalk = require('chalk')
const { enter2space, aspirated2simple, removeJosa } = require('../convert')

function consonant() {
    const str = enter2space(removeJosa(`사과를 사고 생각`))
    console.log(str)
}

module.exports.consonant = consonant
