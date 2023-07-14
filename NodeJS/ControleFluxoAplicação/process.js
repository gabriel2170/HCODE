console.log(`Nome do arquivo: `, __filename)
console.log(`Diretorio do arquivo: `, __dirname)
console.log(`Parametros de execução`, process.argv)
console.log(`Diretorio em que foi invocado`, process.cwd())
console.log(`Ambiente de servidor`, process.platform)
console.log(`Parametros de execução completo`, process.env)
console.log(process.argv[3])

switch (process.argv[2]) {
    case '-a':
        console.log('Execute rotina principal');
        break;

    case '-i':
        console.log('Execute instalação');
        break;

    case '-q':
        console.log('Encerrando aplicação');
        process.exit()
        break;

    default:
        console.log('Parametro Invalido');
}


console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuario no SO: `, process.env.USERNANE)
console.log(`Idioma: `, process.env.LANG)
console.log(`Nome do Server: `, process.env.COMPUTERNAME)

