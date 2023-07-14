const readline = require('readline')
const { createSocket } = require('dgram')
const CommandParser = require('./commandParser')
const Commander = require('./commander')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const TELLO_CMD_PORT = 8889
const TELLO_HOST = '192.168.10.1'

const getSocket = ()=>{
    const socket = createSocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start(){
    const socket = getSocket()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendInitCommand()
    const cmdp = new CommandParser({
        onTakeoff: async () => await cmder.sendTakeoff(),
        onLand: async () => await cmder.sendLand(),
        onForward: async () => await cmder.sendForward(dist),
        onBack: async () => await cmder.sendBack(dist),
        onRight: async () => await cmder.sendRight(dist),
        onLeft: async () => await cmder.sendLeft(dist),
        onCw: async () => await cmder.sendCw(dist),
        onCcw: async () => await cmder.sendCcw(dist),
        onFlip: async () => await cmder.sendFlip(),
        onBattery: async () => await cmder.sendBattery(),
    })
    console.log('Iniciando')

    socket.on('message', (msg)=>{
        console.log(`Dji tello: ${msg.toString()}` )
    })
    socket.on('error', (err)=>{
        console.log(`Dji tello ERROR: ${err.toString()}` )
    })
    socket.on('listening', (e)=>{
        console.log(`Socket is listening` )
    })
    console.log(`Enter a command`)

    rl.on('line', (line)=>{
        if(!cmdp.parseCommand(line)){
            if(line == 'exit'){
                console.log('Bye')
                process.exit(0)
            }
        }
    })
})()