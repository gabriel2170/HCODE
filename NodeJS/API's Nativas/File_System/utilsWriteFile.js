const { promisify } = require('util')

const writeFile = promisify(require('fs').writeFile)

writeFile('arquivo.txt', 'Criando arquivo utilizando o promisify do util')
    .then(() => {
        console.log('Arquivo criado com sucesso!!')
    })
    .catch((err) => {
        console.log('Erro ao criar arquivo!!', err)

    })
