const {spawn} = require('child_process')

const ls = spawn('ls', ['..', '-lh', '/usr'])

ls.stdout.on('data' , (data)=>{
    console.log('stdout: ' , data)
})

ls.stderr.on('data' , (data)=>{
    console.log('stderr: ' , data)
})


ls.on('close', (data)=>{
    console.log(`Processo executado em segundo plano ${data}`)
})