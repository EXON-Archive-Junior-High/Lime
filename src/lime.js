const chalk = require('chalk')
const { alliteration } = require('./rhyme/alliteration')
const { consonant } = require('./rhyme/consonant')

console.log(chalk.red('[alliteration]'))
alliteration()

console.log(chalk.red('[consonant]'))
consonant()