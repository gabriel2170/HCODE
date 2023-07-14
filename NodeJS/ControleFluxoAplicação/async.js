function sum(x) {
    return new Promisse((resolve, reject) => {
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Nao foi passado um numero para variavel da função!!')
        }
        setTimeout(() => {
            resolve(x + 4500)
        }, 3000)
    }
    )
}


async function main(){
    try{
        const result = await sum(500)
        console.log(`O resultado com Async/Await : ${result}`)
    }
    catch(e){
        console.log(`Erro no processo!! ${e}`)
    }
    
}


