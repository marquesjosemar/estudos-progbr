//LER UM ARQUIVO COM NODE

const fs = require('fs')

fs.readFile('arquivo1.txt', 'utf-8', (err,data) =>{
    if(err){console.error('erro ao ler o arquivo:', err)
        return;
    }

    console.log('conteúdo do arquivo: ', data)
    
})