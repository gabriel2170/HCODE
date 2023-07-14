function sum(x) {
    return new Promisse((resolve, reject)=>{
        setTimeout(() => {
            resolve(x + 4500)
        }, 3000)
    }
    )
}  


sum(500)
.then((result)=>{
    console.log(result)
})
