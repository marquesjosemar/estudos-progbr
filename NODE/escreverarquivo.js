const fs = require('fs')

const conteudo = 'arquivo alterado'
fs.writeFile('arquivo1.txt', conteudo, 'utf-8', (err) =>{
    if(err){
        console.error('erro ao mudar o arquivo:', err)
    }
    console.log('Arquivo gravado com sucesso')
})