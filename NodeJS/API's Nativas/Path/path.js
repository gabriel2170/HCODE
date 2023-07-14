const path = require('path')

console.log(path.basename('c:\\temp\\arquivo.html'))
console.log(path.normalize('c:\\temp//dir//dados//..'))
console.log(path.join('/teste/' , 'teste2' , 'teste3', 'dir3', 'dir2'))
console.log(path.resolve('path.js'))
console.log(path.extname('path.js'))
