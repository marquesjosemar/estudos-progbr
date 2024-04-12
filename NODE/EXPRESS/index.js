const express = require('express'); //importando o express
const app = express(); //

// Rota raiz
app.get('/', (req, res) => {
  res.send('Olá, mundo! Este é o meu servidor Express.');
});
/* Neste trecho, estamos definindo uma rota para a URL raiz do servidor, ou seja, a página inicial que é acessada quando você entra no endereço do servidor. Vamos analisar isso em detalhes:

app.get('/'): Isso define uma rota para o método GET (solicitação de obtenção de informações) e o caminho '/' (que é a raiz, a página inicial) do servidor.

(req, res) => { ... }: Isso é uma função de callback que será executada quando alguém acessar essa rota. Ela recebe dois argumentos: req (abreviação de request), que representa a solicitação feita ao servidor, e res (abreviação de response), que representa a resposta que será enviada de volta ao cliente.

res.send('Olá, mundo! Este é o meu servidor Express.'): Dentro dessa função de callback, estamos usando o método send() do objeto res para enviar uma resposta de volta ao cliente. Neste caso, estamos enviando a string "Olá, mundo! Este é o meu servidor Express." como resposta.

Resumindo, sempre que alguém acessar a URL raiz do seu servidor (por exemplo, http://localhost:3000/), o Express executará essa função de callback e enviará a mensagem "Olá, mundo! Este é o meu servidor Express." como resposta. Isso é uma maneira simples de criar uma página inicial para o seu servidor web.
 */

// Define o IP e a porta em que o servidor vai ouvir
const ip = '192.168.1.8'; // Substitua pelo seu IP
const port = 3000;
app.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}/`);
}); 


