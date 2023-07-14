const {writeFile} = require('fs')



writeFile("arquivo.txt", 'Criando arquivo com writeFile', err=>{
    if(err) throw err;
    
    console.log('Arquivo criado com sucesso!!')
})