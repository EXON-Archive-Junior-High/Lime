import path from "path"
import * as Hangul from 'hangul-js'

const PATH = path.resolve()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const words = require(PATH + '/words.json').words

const word = '이의'
const d_word = Hangul.d(word, true)

let a: string | unknown[] = []
words.forEach((i: string) => {
    const d_i = Hangul.d(i, true)
    a = []
    for (let j = 0; j < word.length && j < i.length; j++) a = d_word[j].filter(x => d_i[j].includes(x))
    if (a.length >= d_i.length + 1) console.log(i)
})
