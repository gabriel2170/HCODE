const EventEmiter = require('EventEmiters')


class EventEmitero extends EventEmiter{}

const meuEvento = new EventEmitero()

//Assinante
meuEvento.on('segurança', (x,y)=>{
    console.log(`Executando o EventEmiter 'segurança', ${x} ${y}`)
})


//Emissor
meuEvento.emit('segurança', 'userAdmin', 'Alterou Salario')


meuEvento.on('encerrar', (dados)=>{
    console.log('Assinante: ' + dados)
})


meuEvento.emit('encerrar', 'Encerrando a importação dos dados')