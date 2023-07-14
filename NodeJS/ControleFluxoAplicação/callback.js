function sum(x, callback) {
    return setTimeout(() => {
        return callback(null, x + 4500)
    }, 3000)
}


function resolveSum(err, data){
    if(err) throw err;
    console.log(data)
}


sum(500, resolveSum)