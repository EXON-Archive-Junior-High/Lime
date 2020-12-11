import hangul from 'hangul-js'
import chalk from 'chalk'
import { enter2space, aspirated2simple } from '../convert'

export function alliteration(): void {
    const str = enter2space(`아냐 흘러가는 것은 흘러가는 대로 현재의 우리의 멋있는 모습`)
    console.log(chalk.green(str))
    const charArr = str.split('')
    const firstChar: [[string, number]] = [['', 0]]
    let j = 0
    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] === ' ') {
            firstChar[j] = [aspirated2simple(hangul.disassemble(charArr[i + 1])[0]), i + 1]
            j++
        } else if (i === 0) {
            firstChar[j] = [aspirated2simple(hangul.disassemble(charArr[i])[0]), i]
            j++
        }
    }
    for (let i = 0; i < firstChar.length; i++) charArr[firstChar[i][1]] = chalk.blue('[' + charArr[firstChar[i][1]] + ']')
    // eslint-disable-next-line @typescript-eslint/ban-types
    const counts: any = { }
    firstChar.forEach((x) => counts[x[0]] = (counts[x[0]] || 0) + 1)
    console.log(firstChar)
    console.log(counts)
    console.log(charArr.join(''))
}
