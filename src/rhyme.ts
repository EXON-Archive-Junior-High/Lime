import path from "path"
import * as Hangul from 'hangul-js'

const PATH = path.resolve()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const words = require(PATH + '/words.json').words

export default function rhyme(word: string, many = false): string[] {
    console.log(many)
    const d_word = Hangul.d(word, true)
    const result: string[] = []
    let a: string | unknown[] = []
    words.forEach((i: string) => {
        const d_i = Hangul.d(i, true)
        a = []
        for (let j = 0; j < word.length && j < i.length; j++) a = d_word[j].filter(x => d_i[j].includes(x))
        if (a.length >= d_i.length + 1) {
            if (many && i.length > 1) result.push(i)
            else if (!many) result.push(i)
        }
    })

    return result
}
