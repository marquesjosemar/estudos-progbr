// É UMA FORMA DE COPIAR ARRAY/OBJETO SEM MODIFICAR O ARRAY ORIGINAL //

let pessoa = {
    name: "josé silva",
    idade: 32,
}

let contato = {
    telefone: 468531,
    email: "jose@gmail.com"
}

let copia = {...pessoa}

copia.idade = 88

console.log(pessoa)
console.log(copia)



// COM O SPREAD OPERATOR DA PRA JUNTAR 2 ARRAYS/OBJETOS TAMBÉM //

let notasTurma1 = [1, 4, 6, 8, 3]

let notasTurma2 = [2, 6, 4, 1, 9]

let todasNotas = [...notasTurma1, ...notasTurma2]

console.log(todasNotas)

