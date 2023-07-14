const { EventEmitter } = require('events')
const emitter = new EventEmitter()



const validObj = (a) => {
    if (typeof a !== 'object') {
        emitter.emit('error', new Error('Tipo de dado Invalido!!'))
    }
}

emitter.on('error', (err) => {
    console.log(err.message)
})

let dados = { name: 'Objeto Qualquer' }


validObj(dados)