const fs = require('fs')

fs.readFileSync('file.txt')

fs.unlinkSync("file.txt")

console.log('Arquivo foi excluido com sucesso!!')