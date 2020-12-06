export function enter2space(str: string) {
    return str.replace('\n', ' ').replace('    ', '')
}

export function aspirated2simple(consonant: string) {
    if (consonant == 'ㄲ' || consonant == 'ㅋ') return 'ㄱ'
    else if (consonant == 'ㄸ' || consonant == 'ㅌ') return 'ㄷ'
    else if (consonant == 'ㅃ' || consonant == 'ㅍ') return 'ㅂ'
    else if (consonant == 'ㅆ') return 'ㅅ'
    else if (consonant == 'ㅉ' || consonant == 'ㅊ') return 'ㅈ'
    return consonant
}

export function removeJosa(str: string) {
    const josa = ['을', '를', '이', '가', '의']
    let newStr: string = str
    josa.forEach((i) => {
        newStr = newStr.replace(i, '')
    })
    return newStr
}

