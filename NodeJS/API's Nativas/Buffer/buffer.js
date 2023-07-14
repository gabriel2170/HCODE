const Buffer = require('buffer')

const buf = Buffer.from('Teste de Buffer')

console.log(buf.toString())

const buf_string = Buffer.from('Carregando uma string', 'utf-8')

console.log(buf_string.toString())

console.log(Buffer.isBuffer(buf_string))

console.log(buf_string.toString('utf-8', 0, 10))

