import hangul from 'hangul-js'
import chalk from 'chalk'
import { enter2space, removeJosa } from '../convert'

export function consonant() {
    const str: string = enter2space(removeJosa('사과를 사고 생각'))
    console.log(chalk.blue(str))
    const words: string[] = str.split(' ')
    const disassembleWords: string[][][] = []
    const initial: string[] = []
    for (let i: number = 0; i < words.length; i++) {
        disassembleWords[i] = hangul.disassemble(words[i], true)
        initial[i] = ''
        disassembleWords[i].forEach((j) => initial[i] += j[0])
    }
    console.log(initial)
    
}

