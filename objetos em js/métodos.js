
function calcMedia() {
    console.log("a média do aluno " + this.nome + " é: " + (this.notas[0] + this.notas[1]) / 2 + ".");
}


let aluno  = {
    nome: "igor",
    notas: [5,7],

    //criação do método
    media: calcMedia
    }

let aluno1  = {
    nome: "joao",
    notas: [3,8],

    //criação do método
    media: calcMedia
    }


//chamada do metodo
aluno.media();
aluno1.media();

