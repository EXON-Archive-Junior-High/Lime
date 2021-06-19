import fs from 'fs'
import path from 'path'

const PATH = path.resolve()

let file = fs.readFileSync(PATH + '/wordslistUnique.txt', 'utf8')
file = '{\n"words": ["' + file.split('\n').join('",\n"') + '"\n]\n}'
fs.writeFileSync(PATH + '/words.json', file)