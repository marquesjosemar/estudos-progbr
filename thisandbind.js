/* 
function somGenerico(){
    console.log(this.sound)
}

let dog = {
    sound: "au au",
    speak: somGenerico
}

let gato = {
    sound: "miau",
    speak: somGenerico
}

dog.speak();
gato.speak(); */

/* aqui em cima foi utilizado o this, onde criei uma variavel e fiz um objeto com o som e uma 'funcao' speak chamando a função somGenerico, essa função vai ser servir pra todo tipo de animal que for declarado em uma variavel. Melhorando a qualidade do código.*/

//-----------//


//usando o BIND 
// SIMPLIFICA AINDA MAIS O CÓDIGO E DEIXA FUNCIONAL, ABAIXO TEMOS A USABILIDADE DO BIND E THIS TRABALHANDO JUNTOS. 
const pessoa = {
    nome: 'maria',
    idade: 30,
    saudacao: function(){
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos`)
    }
}

const saudacaoMaria = pessoa.saudacao;
const saudacaoJoao = pessoa.saudacao.bind({nome:'joão', idade: 25});

saudacaoMaria();
saudacaoJoao();



const instrumentos = {
    tipo: 'baixo',
    cor: 'madeira',
    saudacao: function(){
        console.log(`meu ${this.tipo} é da cor ${this.cor} e com ele ganho meu dinheiro`)
    }
}

const saudacaoBaixo = instrumentos.saudacao.bind({tipo:'violão', cor:'preta'})
saudacaoBaixo();
