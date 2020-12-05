function enter2space(str) {
    return str.replace('\n', ' ').replace('    ', '')
}

function aspirated2simple(consonant) {
    if (consonant == 'ㄲ' || consonant == 'ㅋ') return 'ㄱ'
    else if (consonant == 'ㄸ' || consonant == 'ㅌ') return 'ㄷ'
    else if (consonant == 'ㅃ' || consonant == 'ㅍ') return 'ㅂ'
    else if (consonant == 'ㅆ') return 'ㅅ'
    else if (consonant == 'ㅉ' || consonant == 'ㅊ') return 'ㅈ'
    return consonant
}

function removeJosa(str) {
    let josa = ['을', '를', '이가', '이', '가']
    josa.forEach((i) => {
        str.replace(i, '')
    })
    return str
}

module.exports.enter2space = enter2space
module.exports.aspirated2simple = aspirated2simple
module.exports.removeJosa = removeJosa