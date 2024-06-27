const { readFileSync, writeFileSync } = require('fs')

writeFileSync('./temporary/fileA.txt', 'First line of text.\n', { flag: 'a' })
writeFileSync('./temporary/fileA.txt', 'Second line of text.\n', { flag: 'a' })
writeFileSync('./temporary/fileA.txt', 'Third line of text.\n', { flag: 'a' })



const read = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(read)
