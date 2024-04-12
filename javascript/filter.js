 

function novoAluno (nome, idade) {
    return {nome, idade}

}

let alunos = [
    novoAluno("mario", 23),
    novoAluno("jose", 45),
    novoAluno("marcia", 29),
    novoAluno("joao", 35),
]


function temMenosde30 (aluno) {
    return aluno.idade < 30
}

function temMaisde30 (aluno) {
    return aluno.idade > 30
}

let alunosComMenosde30 = alunos.filter(temMenosde30)

console.log(alunosComMenosde30) 





//FILTRANDO NÚMEROS PARES//

const numeros = [1,2,3,4,5,6,7,8,9,10]

const pares = numeros.filter(function(numero) {
    return numero % 2 == 0;
    
})

console.log(pares)



// FILTRANDO PRODUTOS COM PREÇO SUPERIOR A 30 //

const produtos = [
    {nome: 'Camisa', preço: 20},
    {nome: 'Calça', preço: 50},
    {nome: 'Boné', preço: 15},
    {nome: 'Tenis', preço: 80}
];

const produtosCaros = produtos.filter(function(produto){
    return produto.preço > 30;
})

console.log(produtosCaros)





// FILTRANDO PALAVRAS QUE TENHAM 6 LETRAS  //

const palavras = ['spray', 'limite', 'elite', 'exuberante', 'destruição', 'presente']

const resultado = palavras.filter(function(palavra){
    return palavra.length >= 6;
})

console.log(resultado);