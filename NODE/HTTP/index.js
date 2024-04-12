const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((request, response) =>{

    let path = url.parse(request.url).pathname;
})





const server = http.createServer((req, res) => {
  // Configurar os cabeçalhos da resposta
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Enviar uma resposta ao cliente
  res.end('Ola, mundo!\n');
});

// O servidor começa a ouvir na porta 3000
server.listen(3000, 'localhost', () => {
  console.log('Servidor rodando em http://localhost:3000/');
});
