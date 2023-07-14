
function exec(){
    exec2()
}

function exec2(){
    throw new Error('Nao funcionou a execução')
}

function init(){
    try {
        exec()
    } catch (error) {
        console(`Ha um erro de execução , ${error.message}`)
    }
}


init()

console.log('Apos o Erro!!')