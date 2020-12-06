import chalk from 'chalk'
import { alliteration } from './rhyme/alliteration'
import { consonant } from './rhyme/consonant'

console.log(chalk.red('[alliteration]'))
alliteration()

console.log(chalk.red('[consonant]'))
consonant()