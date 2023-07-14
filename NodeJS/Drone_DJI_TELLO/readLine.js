const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Melhor marca de drones do mundo? ', (anwser)=>{
    console.log(`Melhor marca é a ${anwser}` )

    switch (awnser) {
        case 'command':
            console.log('Ligando drone!')
            break;
        case 'takeoff':
            console.log('Decolando drone!')
            break;

        default:
            console.log('Ligue o drone!')
            break;
    }
    rl.close()
})