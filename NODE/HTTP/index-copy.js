const http = require('http');

// Configurações da solicitação
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1', // Endpoint de exemplo
  method: 'GET'
};

// Cria a solicitação
const req = http.request(options, (res) => {
  let data = '';

  // Evento de 'data' ocorre quando dados chegam
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Evento de 'end' ocorre quando a resposta está completa
  res.on('end', () => {
    const post = JSON.parse(data);
    console.log('Título do Post:', post.title);
  });
});

// Evento de 'error' ocorre em caso de erro na solicitação
req.on('error', (error) => {
  console.error('Erro na solicitação:', error);
});

// Finaliza a solicitação (envia a solicitação)
req.end();

