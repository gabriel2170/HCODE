console.log('Exibindo mensagem com console.log')

console.error(new Error('Exibindo mensagem de erro'))

const carros = ['GOL', 'Fiat', 'Palio', 'Renault']

console.table(carros)

const dados = {name: 'Gabriel' , age: 24}

console.table(dados)

console.count(dados)
console.count(dados)


console.log('Resetando processo')

console.countReset('processo')

console.count('processo')

console.time('contador')

console.timeEnd('contador')

console.assert(true, 'Do something now')

console.assert(false, 'Sorry , doesn t work')

console.clear()