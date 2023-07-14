const fs = require('fs')

const assets = ['css' , 'js' , 'images' , 'fonts' , 'lib']

fs.mkdir('Projeto' , (err, data)=>{
    if(err) throw err;

    console.log('Diretorio criado com sucesso!!')
})



fs.mkdir('Projeto/assets/images' ,{recursive: true}, (err, data)=>{
    if(err) throw err;

    console.log('Diretorio criado com sucesso!!')
})


function make(dir){

    dir.forEach((item)=>{
        fs.mkdir(`Projeto/assets/${item}` ,{recursive: true}, (err, data)=>{
            if(err) throw err;
        
            console.log('Diretorio criado com sucesso:' , item)
        })
    })
    
}

make(assets)