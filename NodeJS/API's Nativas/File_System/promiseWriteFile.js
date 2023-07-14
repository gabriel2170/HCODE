const {writeFile} = require('fs')


function criarArquivo(name, content){
    return new Promise((resolve, reject)=>{
        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
}


criarArquivo('Arquivo.txt', 'Criando arquivo com promises')
.then(()=> console.log('Arquivo criado com sucesso com promises'))
.catch((err)=> console.log(`Erro ao criar arquivo: ${err}`))