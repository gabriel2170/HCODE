const fs = require('fs')


fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data)

    console.log('Apos a leitura do arquivo')
    
})


fs.unlink('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data)

    console.log('Apos a leitura do arquivo')
    
})

console.log('Arquivo excluido com sucesso!!')