// TRANSFORMANDO NUMEROS EM SEUS QUADRADOS //

const numeros = [1,2,3,4,5,6]

const quadrados = numeros.map(function(numero) {
    return numero*numero;
})

console.log(quadrados);


//TRANSFORMANDO PALAVRAS EM MAIUSCULAS //

const frutas = ['maçã', 'banana', 'laranja', 'morango'];

const caixaAlta = frutas.map(function(fruta) {
    return fruta.toUpperCase();
    
});

console.log(caixaAlta);




// CRIANDO UM NOVO ARRRAY COM PROPRIEDADES MODIFICADAS //

const pessoas = [
    {nome: 'Alice', idade: 25},
    {nome: 'Bob', idade: 30},
    {nome: 'Clara', idade: 22}
]

const pessoasComSaudacao = pessoas.map(function (pessoa) {
    return {
        nome: pessoa.nome,
        saudacao: `Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`
    }
  
});

console.log(pessoasComSaudacao)




// FILTRANDO E MAPEANDO VALORES DE UM ARRAY //

const numeros2 = [1,2,3,4,5,6,7,8,9,10];

const quadradosDePares = numeros2.filter(function (item) {
    return item % 2 === 0;
})

.map(function (numeroPar) {
    return numeroPar * numeroPar;
    
})

console.log(quadradosDePares);