import hangul from 'hangul-js'
import chalk from 'chalk'
import { enter2space, aspirated2simple, removeJosa } from '../convert'

export function consonant() {
    const str = removeJosa('사과를 사고 생각')
    console.log(str)
}

